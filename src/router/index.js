import Vue from 'vue'
import VueRouter from 'vue-router'
import catalogPage from '@/views/pages/catalogPage'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'catalogPage',
    component: () => import('@/views/pages/catalogPage'),
    meta: {
      layout: 'main-layout'
    }
  },
]

const router = new VueRouter({
  routes
})

export default router
