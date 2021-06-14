import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/people',
    name: 'people',
    component: () => import('../views/People.vue')
  },
  {
    path: '/receipt',
    name: 'receipt',
    component: () => import('../views/Receipt.vue')
  },
  {
    path: '/result',
    name: 'result',
    component: () => import('../views/Result.vue')
  },
  {
    path: '/check',
    name: 'check',
    component: () => import('../views/Check.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
