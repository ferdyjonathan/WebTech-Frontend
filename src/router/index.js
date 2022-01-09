import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import Employee from '../views/Employee'
import Bestellungs from '../views/Bestellungs'
import editOrder from '../views/edit-order'
import deleteOrder from '../views/delete-order'

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard
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
  },
  {
    path: '/bestellungs/edit/:id',
    name: 'edit_product',
    component: editOrder
  },
  {
    path: '/bestellungs/delete/:id',
    name: 'delete_product',
    component: deleteOrder
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  linkActiveClass: 'active',
  routes
})

export default router
