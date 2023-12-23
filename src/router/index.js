import { createRouter, createWebHashHistory } from 'vue-router'
import Inicio from '../views/Inicio.vue'

const routes = [
  {
    path: '/',
    name: 'Inicio',
    component: Inicio
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
