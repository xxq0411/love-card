import Vue from 'vue'
import Router from 'vue-router'
import Register from '@/components/Register'
import Login from '@/components/Login'
import First from '@/components/First'
import Homepage from '@/components/Homepage'
import ChangeInfo from '@/components/ChangeInfo'
import Creat from '@/components/Card/Creat'
import Dispatch from '@/components/Card/Dispatch'
import Own from '@/components/Card/Own'
import Use from '@/components/Card/Use'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'First',
      component: First
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/homepage',
      name: 'Homepage',
      children: [
        {
          path: 'creat',
          component: Creat
        },
        {
          path: 'dispatch',
          component: Dispatch
        },
        {
          path: 'own',
          component: Own
        },
        {
          path: 'use',
          component: Use
        }
      ],
      component: Homepage
    },
    {
      path: '/changeInfo',
      name: 'ChangeInfo',
      component: ChangeInfo
    }
  ]
})
