import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/view/home.vue'
import Sidebar from '../components/bar/sidebar.vue'
import login from '../views/view/login.vue'
import register from '../views/view/register.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },

    {
      path: '/sidebar',
      name: 'Sidebar',
      component: Sidebar
    },
    {
      path: '/login',
      name: 'Login',
      component: login
    },
    {
      path: '/register',
      name: 'Register',
      component: register
    },
  ]
})

export default router
