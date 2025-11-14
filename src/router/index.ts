import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/sobre',
      name: 'sobre',
      component: () => import('../views/SobreView.vue'),
    },
    {
      path: '/pirata-sereia',
      name: 'pirata-sereia',
      component: () => import('../views/CharactersView.vue'),
    },
    {
      path: '/princese',
      name: 'princese',
      component: () => import('../views/CharactersView.vue'),
    },
    {
      path: '/mariposa',
      name: 'mariposa',
      component: () => import('../views/CharactersView.vue'),
    },
    {
      path: '/primavera',
      name: 'primavera',
      component: () => import('../views/CharactersView.vue'),
    },
    {
      path: '/fae',
      name: 'fae',
      component: () => import('../views/CharactersView.vue'),
    },
    {
      path: '/satiro-fauno',
      name: 'satiro-fauno',
      component: () => import('../views/CharactersView.vue'),
    },
    {
      path: '/vampiros',
      name: 'vampiros',
      component: () => import('../views/CharactersView.vue'),
    },
    {
      path: '/vampiras',
      name: 'vampiras',
      component: () => import('../views/CharactersView.vue'),
    },
    {
      path: '/bruxes',
      name: 'bruxes',
      component: () => import('../views/CharactersView.vue'),
    },
  ],
})

export default router
