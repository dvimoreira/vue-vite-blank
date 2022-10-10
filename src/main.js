import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import { setupLayouts } from 'virtual:generated-layouts'
import generatedRoutes from 'virtual:generated-pages'

// UI FRAMEWORK
import { Quasar } from 'quasar'
import quasarLang from 'quasar/lang/pt-BR'
import quasarIconSet from 'quasar/icon-set/fontawesome-v6'
import '@quasar/extras/roboto-font/roboto-font.css'
import '@quasar/extras/fontawesome-v6/fontawesome-v6.css'
import 'quasar/src/css/index.sass'

const routes = setupLayouts(generatedRoutes)
const app = createApp(App)

const router = createRouter({
  history: createWebHistory(),
  routes,
})

// CHECK AUTHENTICATION
router.beforeEach((to, from, next) => {
  if (to.meta.auth) {
    next({ path: '/' })
  } else {
    next()
  }
})

app.use(router)
app.use(Quasar, {
  plugins: {}, // import Quasar plugins and add here
  lang: quasarLang,
  iconSet: quasarIconSet,
})
app.mount('#app')
