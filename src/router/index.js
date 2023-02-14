import { createRouter, createWebHistory } from 'vue-router'
import MainHost from '../views/MainHost.vue'
import AboutView from "@/views/AboutView";

const routes = [
  {
    path: '/',
    name: 'synth',
    component: MainHost
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
