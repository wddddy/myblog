import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Modal from '@/base/modal/modal'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/login',
      component:Modal
    }
  ]
})
