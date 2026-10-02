import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/Home.vue'
import ProjectsTemplate from '@/pages/ProjectsTemplate.vue'
import { datasProjects } from '@/projects-datas/datas.ts'

// Keep bookmarks from the previous hash-based URLs working.
if (window.location.hash.startsWith('#/')) {
  window.history.replaceState(
    window.history.state,
    '',
    window.location.hash.slice(1)
  )
}

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/projetos/:slug',
    name: 'project',
    component: ProjectsTemplate,
    beforeEnter: to => Object.prototype.hasOwnProperty.call(datasProjects, to.params.slug)
      ? true
      : { name: 'home', replace: true }
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: { name: 'home' }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to) {
    if (to.name === 'project') return { top: 0 }
  }
})

export default router
