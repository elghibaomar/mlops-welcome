import { createRouter, createWebHistory } from "vue-router";
// import Preview from "../views/MainPreview.vue";
import NotFound from "../views/PageNotFound.vue";
import home from "../views/HomeDark.vue";

const routes = [
  {
    path: "/",
    name: "Preview",
    component: home,
    meta: {
      title: "MLOPS.MA || Smart Platform",
    },
  },
  {
    path: "/home-dark",
    name: "HomeDark",
    component: () => import("../views/HomeDark.vue"),
    meta: {
      title: "MLOPS.MA || Smart Platform",
    },
  },
  {
    path: "/home-light",
    name: "HomeLight",
    component: () => import("../views/HomeLight.vue"),
    meta: {
      title: "MLOPS.MA || Smart Platform",
    },
  },
  {
    path: "/:catchAll(.*)",
    component: NotFound,
    meta: {
      title: "MLOPS.MA || Smart Platform",
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
  window.scrollTo(0, 0);
});

export default router;
