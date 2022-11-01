import { createRouter, createWebHashHistory } from "vue-router";
import MeetingList from "../views/MeetingList";
import AddMeeting from "@/views/AddMeeting";
import Parent from "@/components/Parent";
import ToDoList from "@/views/ToDoList";
import ViewMeeting from "@/views/ViewMeeting";

const routes = [
  {
    path: "/",
    name: "/",
    component: Parent,
    meta: { title: "會議記錄系統" },
    children: [
      {
        path: "/",
        name: "/",
        meta: { title: "會議記錄系統" },
        component: MeetingList,
      },
    ],
  },
  {
    path: "/meetingList",
    name: "meetingList",
    component: Parent,
    meta: { title: "會議記錄系統" },
    children: [
      {
        path: "",
        name: "meetingList",
        meta: { title: "會議記錄系統" },
        component: MeetingList,
      },
      {
        path: "addMeeting",
        name: "addMeeting",
        meta: { title: "會議記錄表-新增" },
        component: AddMeeting,
      },
      {
        path: "/editMeeting",
        name: "editMeeting",
        meta: { title: "會議記錄表-編輯" },
        component: AddMeeting,
        hidden: true,
      },
    ],
  },
  {
    path: "/toDoList",
    name: "toDoList",
    component: Parent,
    meta: { title: "待辦事項" },
    children: [
      {
        path: "",
        name: "toDoList",
        meta: { title: "待辦事項" },
        component: ToDoList,
      },
      {
        path: "viewMeeting",
        name: "viewMeeting",
        meta: { title: "待辦事項" },
        component: ViewMeeting,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
