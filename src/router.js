import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { setupLayouts } from 'virtual:generated-layouts'
import generatedRoutes from 'virtual:generated-pages'
import store from './store'

const routes = setupLayouts(generatedRoutes)

const router = createRouter({
  history: createWebHistory(),
  routes,
})

// CHECK AUTHENTICATION
router.beforeEach((to, from, next) => {
  if (!store.state.authenticated && to.meta.auth) {
    next({ path: '/' })
  } else {
    next()
  }
})

export default router