import Vue from 'vue'
import Router from 'vue-router'
import Register from '@/components/Register'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/Auth/Register',
      name: 'User Registration',
      component: Register
    }
  ]
})
