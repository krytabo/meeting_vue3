<template>
  <div class="navbar fixed z-50 flex h-16 w-full items-center bg-blue-500 px-5 sm:space-x-5">
    <img src="@/assets/logo/EZPLUS_white.svg" alt="" class="h-10" />
    <p class="hidden flex-1 text-left text-xl font-bold text-white sm:flex">{{ title }}</p>

    <!--功能-->
    <div class="hidden space-x-2 sm:flex">
      <div class="flex cursor-pointer rounded p-2 text-white hover:bg-blue-600">
        <i class="ri-arrow-left-right-line"></i>
        切換系統
      </div>
      <div class="flex cursor-pointer rounded p-2 text-white hover:bg-blue-600">
        <i class="ri-user-line"></i>
        張美美
      </div>
    </div>
    <div class="ml-auto flex cursor-pointer rounded p-2 text-white hover:bg-blue-600 sm:hidden">
      <i class="ri-menu-fill"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavbarHeader",
  props: {
    title: {
      type: String,
      default: "",
    },
  },
};
</script>

<style scoped lang="scss"></style>
