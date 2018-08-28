import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import login from '@/components/login/login'
import fail from '@/components/login/fail'
import undefinedfail from '@/components/error/undefinedfail'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/dist/',
      name: 'login',
      component: login
    },{
      path:'/HelloWorld',
      name:'HelloWorld',
      component:HelloWorld
    },{
      path:'/fail',
      name:'fail',
      component:fail
    },{
      path:'*',
      name:'undefinedfail',
      component:undefinedfail
    }
  ]
})

