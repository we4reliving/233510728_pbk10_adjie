// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/home.vue'
import Login from '../views/login.vue'
import Register from '../views/register.vue'
import Order from '../views/order.vue'

// Route admin (opsional)
import Dashboard from '../views/admin/dashboard.vue'
import ManageUsers from '../views/admin/ManageUsers.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/login', component: Login },
  { path: '/register', component: Register },
  { path: '/order', component: Order },
  {
    path: '/admin',
    component: Dashboard,
    children: [
      { path: 'users', component: ManageUsers }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
