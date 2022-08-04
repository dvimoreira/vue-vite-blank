import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import { setupLayouts } from 'virtual:generated-layouts'
import generatedRoutes from 'virtual:generated-pages'

// UI FRAMEWORK
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const routes = setupLayouts(generatedRoutes)
const app = createApp(App)

const router = createRouter({
  history: createWebHistory(),
  routes,
})

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

// CHECK AUTHENTICATION
router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    next({ path: '/' })
  } else {
    next()
  }
})

app.use(router)
app.use(ElementPlus)
app.mount('#app')
