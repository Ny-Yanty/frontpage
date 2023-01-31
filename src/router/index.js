import { createRouter, createWebHistory } from "vue-router";
import OutsourcingView from "../views/OutsourcingView.vue";
import HomePage from '../components/HomePage.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/outsource",
      name: "outsource",
      component: OutsourcingView,
    },
    {
      path: "/home",
      name: "home",
      component: HomePage,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
  ],
});

export default router;
