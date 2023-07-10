import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/login',
    name: 'login',
    component: import('@/views/Login.vue')
  },
  {
    path: '/home',
    name: 'home',
    component: import('@/views/Home.vue')
  },
  {
    path: '/index',
    name: 'index',
    component: import('@/views/Index.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: import('@/views/About.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router