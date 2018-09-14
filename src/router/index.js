import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// import login from '@/components/login/login'
// import fail from '@/components/login/fail'
// import undefinedfail from '@/components/error/undefinedfail'

import Layout from '@/views/layout/layout'

Vue.use(Router)



export default new Router({
  mode:'history',
  base: process.env.NODE_ENV == 'development'?'/':'/dist/',

  routes: [
    {
      path: '/',
      component:Layout,
      hidden:true,
      meta:{
        title:'首页',
        meta:[
          {
            name:'keywords',
            content:'vue-dome'
          },
          {
            name:'description',
            content:'vue-dome-description'
          }
        ]
      }
    },
    {
      path: '/redirect',
      component:Layout,
      hidden:true,
      children:[
        {
          path:'/redirect/:path*',
          component:resolve => require(['@/views/redirect/index'],resolve)
        }
      ],
      // meta:{
      //   title:'首页',
      //   meta:[
      //     {
      //       name:'keywords',
      //       content:'vue-dome'
      //     },
      //     {
      //       name:'description',
      //       content:'vue-dome-description'
      //     }
      //   ]
      // }
    },
    {
      path:'/login',
      component:resolve => require(['@/views/login/index'],resolve),
      hidden:true,
      meta:{
        title:'登录',
        meta:[
          {
            name:'keywords',
            content:'vue-登录'
          },
          {
            name:'description',
            content:'vue-登录-description'
          }
        ]
      }
    }
  ]
})

