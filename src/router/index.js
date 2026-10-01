import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/pages/Home.vue'
import ProjectsTemplate from '@/pages/ProjectsTemplate.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/projetos/:slug',
    name: 'project',
    component: ProjectsTemplate
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to) {
    if (to.name === 'project') return { top: 0 }
  }
})

export default router