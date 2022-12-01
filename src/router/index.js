import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: () => import("../views/home/index.vue"),
    },
    {
      path: "/panel",
      component: () => import("../views/panel/index.vue"),
    },
    {
      path: "/usuario",
      component: () => import("../views/usuario/index.vue"),
    },
  ],
});

export default router;
