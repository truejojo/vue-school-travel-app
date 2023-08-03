import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import sourceData from '../data/index.json'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/destination/:id/:slug',
    name: 'destination.show',
    component: () => import('@/views/DestinationShow.vue'),
    props: (route) => ({ id: parseInt(route.params.id) }),
    // props: route => ({...route.params, id: parseInt(route.params.id)})
    beforeEnter(to) { // from
      const exists = sourceData.destinations.find(
        destination => destination.id === parseInt(to.params.id)
      )
      if(!exists) return {name: 'NotFound'}
    },
    children: [
      {
        path: ':experienceSlug',
        name: 'experience.show',
        component: () => import('@/views/ExperienceShow.vue'),
        props: (route) => ({ ...route.params, id: parseInt(route.params.id) })
      }
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/views/NotFound.vue')
  }
]

const router = createRouter({
  // history: createWebHistory(import.meta.env.BASE_URL),
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || new Promise(resolve => {
      setTimeout(() => resolve({top: 0, behavior: 'smooth'}), 300)
    })
    // return {
    //   top: null,
    //   left: null,
    //   behavior: null
    // }
  },
  linkActiveClass: 'vue-school-active-link'
})

export default router
