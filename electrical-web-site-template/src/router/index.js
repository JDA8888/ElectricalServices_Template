import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ServicesView from '../views/ServicesView.vue'
import ContactUsView from '../views/ContactUsView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/services',
    name: 'services',
    component: ServicesView,
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactUsView,
    },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router