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
      component: resolve => require(['@/components/login/login'],resolve),
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
    },{
      path:'/HelloWorld',
      name:'HelloWorld',
      component: resolve => require(['@/components/HelloWorld'],resolve),
      meta:{
        title:'已登录',
        requireAuth:true,
        meta:[
          {
            name:'keywords',
            content:'已登录'
          },
          {
            name:'description',
            content:'已登录'
          }
        ]
      }
    },
    {
      path:'/fail',
      name:'fail',
      component: resolve => require(['@/components/login/fail'],resolve)
    },
    {
      path:'*',
      name:'undefinedfail',
      component:  resolve => require(['@/components/error/undefinedfail'],resolve)
    },
    {
      path:'/test/:id',
      name:'test',
      component: resolve => require(['@/components/test/test.vue'],resolve),
      children:[
        {
          path:'if',
          component: resolve => require(['@/components/test/test-if.vue'],resolve),
        },
        {
          path:'for',
          component: resolve => require(['@/components/test/test-for.vue'],resolve),
        },
        {
          path:'1px-border',
          component: resolve => require(['@/components/test/test-1px-border.vue'],resolve),
        }
      ]
    }
  ]
})

