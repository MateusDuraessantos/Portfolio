import { createRouter, createWebHashHistory } from 'vue-router'

import Portfolio from '../views/Portfolio.vue'
import Inicio from '../views/Inicio.vue'

const routes = [
  {
    path: '/',
    name: 'Inicio',
    component: Inicio
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: Portfolio
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
