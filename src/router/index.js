import { createRouter, createWebHistory } from "vue-router";
import WelcomeView from "../views/WelcomeView";
import ChatroomView from "../views/ChatroomView";
import { auth } from "@/firebase/config";
import { deleteDoc } from "firebase/firestore";

const routes = [
  {
    path: "/",
    name: "welcome",
    component: WelcomeView,
    beforeEnter(to, form, next) {
      if (!auth.currentUser) {
        next();
      } else {
        next({ name: "chat" });
      }
    },
  },
  {
    path: "/chat",
    name: "chat",
    component: ChatroomView,
    beforeEnter(to, form, next) {
      if (auth.currentUser) {
        next();
      } else {
        next({ name: "welcome" });
      }
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
