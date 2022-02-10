import Vue from 'vue'
import VueRouter from 'vue-router'
import Singleposter from '../views/Singleposter.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/poster',
    name: 'Singleposter',
    component: Singleposter
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
