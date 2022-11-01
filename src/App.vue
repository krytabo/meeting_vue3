<template>
  <div id="app">
    <n-config-provider :locale="zhTW" :date-locale="dateZhTW">
      <n-layout class="h-screen">
        <n-layout-header bordered>
          <navbar-header :title="headerTitle"></navbar-header>
        </n-layout-header>
        <n-layout position="absolute" style="top: 60px" has-sider>
          <n-layout-sider
            collapse-mode="width"
            :collapsed-width="0"
            :width="240"
            show-trigger="arrow-circle"
            content-style="padding: 24px;background-color: #232324;height:100%"
            bordered
            :native-scrollbar="false"
          >
            <side-menu class="body-height" :collapse="collapsed"></side-menu>
          </n-layout-sider>
          <n-layout content-style="padding: 20px" :native-scrollbar="false">
            <a-config-provider :locale="zhTW">
              <router-view class="overflow-auto" v-if="isReload" />
            </a-config-provider>
          </n-layout>
        </n-layout>
      </n-layout>
    </n-config-provider>
    <!--<a-config-provider :locale="zhTW">
      <div class="body-height absolute top-16 flex w-full overflow-hidden">
        &lt;!&ndash;<div class="sideMenu_model" :class="{ sideMenu_hidden: checkHidden === true }">
        <div v-for="(item, index) in tabsList" :key="index" class="menu flex flex-col items-center space-y-1">
          <router-link :to="item.link" class="w-full rounded px-4 py-3 text-left text-white hover:bg-white hover:bg-opacity-10">{{ item.name }}</router-link>
        </div>
        <div @click="listClose" class="listHidden-button" :class="{ listShow_button: checkHidden === true }">
          <i v-if="checkHidden === false" class="ri-arrow-left-s-line"></i>
          <i v-else class="ri-arrow-right-s-line text-white"></i>
        </div>
      </div>&ndash;&gt;
        <side-menu class="body-height"></side-menu>
        <router-view v-if="isReload" />
      </div>
    </a-config-provider>-->
  </div>
</template>

<script>
import NavbarHeader from "@/components/Navbar/header";
import sideMenu from "@/components/Navbar/sideMenu";
import zhTW from "@arco-design/web-vue/es/locale/lang/zh-tw";

export default {
  name: "app",
  components: {
    NavbarHeader,
    sideMenu,
  },
  provide() {
    return {
      reload: this.reload,
    };
  },
  data() {
    return {
      zhTW,
      isReload: true,
      collapsed: true,
      checkHidden: false,
      selected: 0,
      tabsList: [
        {
          id: 0,
          name: "定價表",
          link: "/",
        },
        {
          id: 1,
          name: "配置圖設定",
          link: "/config-setting",
        },
      ],
      active: false,
      headerTitle: "會議記錄系統",
    };
  },
  methods: {
    listClose() {
      this.checkHidden = !this.checkHidden;
    },
    reload() {
      this.isReload = false;
      this.$nextTick(() => {
        this.isReload = true;
      });
    },
  },
};
</script>
<style lang="scss">
body {
  background: #f1f1f1;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

@media only screen and (max-width: 500px) {
  .body-height {
    height: calc(100vh - 150px) !important;
    padding-bottom: env(safe-area-bottom);
  }
}
.body-height {
  height: calc(100vh - 64px);
}

.body-main {
  display: block;
  flex: 1;
  flex-basis: auto;
  overflow: auto;
  box-sizing: border-box;
}

.sideMenu_model {
  @apply absolute z-50 flex w-full flex-col space-y-5 bg-gray-900 p-4 pr-20 md:relative md:w-80;

  .router-link-active {
    @apply border border-blue-500 bg-blue-600 bg-opacity-20;
  }
}

.listHidden-button {
  @apply absolute right-5 top-2 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-white shadow-6;
}

.listShow_button {
  @apply -right-14 top-2 bg-gray-800;
}

.sideMenu_hidden {
  @apply absolute -left-8 mr-0 w-0 pr-0 md:-left-8;
}
</style>
