import { createRouter, createWebHistory } from "vue-router";
import { setupLayouts } from "virtual:generated-layouts";
import generatedRoutes from "virtual:generated-pages";
import store from "./store";

const routes = setupLayouts(generatedRoutes);

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// CHECK AUTHENTICATION AND DEFINE TITLE
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title + " - iCarros Club";
  } else {
    document.title = "iCarros Club";
  }

  if (!store.state.authenticated && to.meta.auth) {
    next({ path: "/" });
  } else {
    next();
  }
});

export default router;
