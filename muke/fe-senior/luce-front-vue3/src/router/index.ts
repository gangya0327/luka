import { createRouter, createWebHistory } from 'vue-router'
import { routes } from 'vue-router/auto-routes'
import { setupLayouts } from 'virtual:generated-layouts'

// import routes from '~pages'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  // extendRoutes: (routes) => setupLayouts(routes),
  routes: setupLayouts(routes),
  // routes,
})

// router.beforeEach((to) => {
//   if (to.path === '/home') {
//     return '/'
//   }
//   return
// })

export default router
