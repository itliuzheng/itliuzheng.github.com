// import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// import login from '@/components/login/login'
// import fail from '@/components/login/fail'
// import undefinedfail from '@/components/error/undefinedfail'

Vue.use(Router)

export default new Router({
  mode:'history',
  base: process.env.NODE_ENV == 'development'?'/':'/dist/',

  routes: [
    {
      path: '/',
      name: 'login',
      component: resolve => require(['@/components/login/login'],resolve)
    },{
      path:'/HelloWorld/',
      name:'HelloWorld',
      component: resolve => require(['@/components/HelloWorld'],resolve)
    },{
      path:'/fail/',
      name:'fail',
      component: resolve => require(['@/components/login/fail'],resolve)
    },{
      path:'*',
      name:'undefinedfail',
      component:  resolve => require(['@/components/error/undefinedfail'],resolve)
    }
  ]
})

