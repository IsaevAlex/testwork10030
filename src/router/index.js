import Vue from 'vue'
import VueRouter from 'vue-router'
import catalogPage from '@/views/pages/catalogPage'
import notFoundPage from '@/views/pages/notFoundPage'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: catalogPage,
    component: () => import('@/views/pages/catalogPage'),
    meta: {
      layout: 'main-layout'
    }
  },
  {
    path: '*',
    name: notFoundPage,
    component: () => import('@/views/pages/notFoundPage'),
    meta: {
      layout: 'error-layout'
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
