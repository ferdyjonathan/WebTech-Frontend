import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Dashboard.vue'
import Employee from '../views/Employee.vue'
import Bestellungs from '../views/Bestellungs'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/employee',
    name: 'Employee',
    component: Employee
  },
  {
    path: '/bestellungs',
    name: 'Bestellungs',
    component: Bestellungs
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  linkActiveClass: 'active',
  routes
})

export default router
