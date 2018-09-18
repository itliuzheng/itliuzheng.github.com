import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// import login from '@/components/login/login'
// import fail from '@/components/login/fail'
// import undefinedfail from '@/components/error/undefinedfail'

import Layout from '@/views/layout/layout'

Vue.use(Router)


//
// export default new Router({
//   mode:'history',
//   base: process.env.NODE_ENV == 'development'?'/':'/dist/',
//
//   routes: [
//     {
//       path: '/',
//       component:Layout,
//       hidden:true,
//       meta:{
//         title:'首页',
//         meta:[
//           {
//             name:'keywords',
//             content:'vue-dome'
//           },
//           {
//             name:'description',
//             content:'vue-dome-description'
//           }
//         ]
//       }
//     },
//     {
//       path: '/redirect',
//       component:Layout,
//       hidden:true,
//       children:[
//         {
//           path:'/redirect/:path*',
//           component:resolve => require(['@/views/redirect/index'],resolve)
//         }
//       ],
//       // meta:{
//       //   title:'首页',
//       //   meta:[
//       //     {
//       //       name:'keywords',
//       //       content:'vue-dome'
//       //     },
//       //     {
//       //       name:'description',
//       //       content:'vue-dome-description'
//       //     }
//       //   ]
//       // }
//     },
//     {
//       path:'/login',
//       component:resolve => require(['@/views/login/index'],resolve),
//       hidden:true,
//       meta:{
//         title:'登录',
//         meta:[
//           {
//             name:'keywords',
//             content:'vue-登录'
//           },
//           {
//             name:'description',
//             content:'vue-登录-description'
//           }
//         ]
//       }
//     }
//   ]
// })


export const constantRouterMap = [
  //首页
  {
    path: '',
    component: Layout,
    name: 'Dashboard',
    redirect: '/business_management/data_entry',
    meta: { title: '首页', noCache: true }
    // redirect: 'dashboard',
    // children: [
    //   {
    //     path: 'dashboard',
    //     component: () => import('@/views/dashboard/index'),
    //     name: 'Dashboard',
    //     meta: { title: '首页', icon: 'dashboard', noCache: true }
    //   }
    // ]
  },
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path*',
        // component: () => import('@/views/redirect/index')
        component: resolve => require(['@/views/redirect/index'],resolve)
      }
    ],
    meta: { title: '后台管理-登录' }
  },
  {
    path: '/login',
    // component: () => import('@/views/login/index'),
    component: resolve => require(['@/views/login/index'],resolve),
    hidden: true
  },
  {
    component: Layout,
    path: '/review',
    redirect: '/review/detail',
    children: [
      {
        path: 'detail',
        // component: () => import('@/views/redirect/index')
        component: resolve => require(['@/views/review_detail/detail'],resolve),
        name: 'detail',
        meta: { title: '审核详情', icon: 'detail', noCache: true }
      }
    ],
    hidden: true
  },
  // {
  //   path: '/404',
  //   component: () => import('@/views/errorPage/404'),
  //   hidden: true
  // },
  // {
  //   path: '/401',
  //   component: () => import('@/views/errorPage/401'),
  //   hidden: true
  // },
  {
    //业务管理
    path: '/business_management',
    component: Layout,
    redirect: '/business_management/data_entry',
    meta: { title: '业务管理', noCache: true },
    children: [
      {
        path: 'data_entry',
        // component: () => import('@/views/business_management/data_entry'),
        component: resolve => require(['@/views/business_management/data_entry'],resolve),
        name: 'data_entry',
        meta: { title: '资料录入', icon: 'business_management', noCache: true }
      },
      {
        path: 'application_management',
        component: () => import('@/views/business_management/application_management'),
        name: 'application_management',
        meta: { title: '申请管理', icon: 'business_management', noCache: true }
      }
    ]
  },
  {
    path: '/approval_management',
    component: Layout,
    redirect: '/approval_management/approval_list',
    alwaysShow: true, // will always show the root menu
    meta: {
      title: '审批管理',
      roles: ['admin', 'editor'] // you can set roles in root nav
    },
    children: [
      {
        path: 'approval_list',
        component: () => import('@/views/approval_management/approval_list'),
        name: 'approval_list',
        meta: {
          title: '待审核列表',
          roles: ['admin'] // or you can only set roles in sub nav
        }
      },
      {
        path: 'household_list',
        component: () => import('@/views/approval_management/household_list'),
        name: 'household_list',
        meta: {
          title: '待下户列表',
          roles: ['admin']
          // if do not set roles, means: this page does not require approval_management
        }
      },
      {
        path: 'household_review',
        component: () => import('@/views/approval_management/household_review'),
        name: 'household_review',
        hidden:true,
        meta: {
          title:'录入申线下调研表',
          roles: ['admin']
          // if do not set roles, means: this page does not require approval_management
        }
      }
    ]
  },
  {
    path: '/customer_management',
    component: Layout,
    redirect: '/customer_management/list',
    alwaysShow: true, // will always show the root menu
    meta: {
      title: '客户管理',
      roles: ['admin'] // you can set roles in root nav
    },
    children: [
      {
        path: 'list',
        component: () => import('@/views/customer_management/list'),
        name: 'list',
        meta: {
          title: '客户列表',
          roles: ['admin'] // or you can only set roles in sub nav
        }
      }
    ]
  },
]

export default new Router({
  mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})

export const asyncRouterMap = [
  {
    path: '/approval_management',
    component: Layout,
    redirect: '/approval_management/approval_list',
    alwaysShow: true, // will always show the root menu
    meta: {
      title: '审批管理',
      icon: 'lock',
      roles: ['admin', 'editor'] // you can set roles in root nav
    },
    children: [
      {
        path: 'approval_list',
        component: () => import('@/views/approval_management/approval_list'),
        name: 'approval_list',
        meta: {
          title: '待审核列表',
          roles: ['admin'] // or you can only set roles in sub nav
        }
      },
      {
        path: 'household_list',
        component: () => import('@/views/approval_management/household_list'),
        name: 'household_list',
        meta: {
          title: '待下户列表',
          roles: ['admin']
          // if do not set roles, means: this page does not require approval_management
        }
      }
    ]
  },
  // {
  //   path: '/approval_management',
  //   component: Layout,
  //   redirect: '/approval_management/index',
  //   alwaysShow: true, // will always show the root menu
  //   meta: {
  //     title: 'approval_management',
  //     icon: 'lock',
  //     roles: ['admin', 'editor'] // you can set roles in root nav
  //   },
  //   children: [
  //     {
  //       path: 'page',
  //       component: () => import('@/views/approval_management/page'),
  //       name: 'PagePermission',
  //       meta: {
  //         title: 'pagePermission',
  //         roles: ['admin'] // or you can only set roles in sub nav
  //       }
  //     },
  //     {
  //       path: 'directive',
  //       component: () => import('@/views/approval_management/directive'),
  //       name: 'DirectivePermission',
  //       meta: {
  //         title: 'directivePermission'
  //         // if do not set roles, means: this page does not require approval_management
  //       }
  //     }
  //   ]
  // },
  //
  //
  // {
  //   path: '/example',
  //   component: Layout,
  //   redirect: '/example/list',
  //   name: 'Example',
  //   meta: {
  //     title: 'example',
  //     icon: 'example'
  //   },
  //   children: [
  //     {
  //       path: 'create',
  //       component: () => import('@/views/example/create'),
  //       name: 'CreateArticle',
  //       meta: { title: 'createArticle', icon: 'edit' }
  //     },
  //     {
  //       path: 'edit/:id(\\d+)',
  //       component: () => import('@/views/example/edit'),
  //       name: 'EditArticle',
  //       meta: { title: 'editArticle', noCache: true },
  //       hidden: true
  //     },
  //     {
  //       path: 'list',
  //       component: () => import('@/views/example/list'),
  //       name: 'ArticleList',
  //       meta: { title: 'articleList', icon: 'list' }
  //     }
  //   ]
  // },
  //
  // {
  //   path: '/tab',
  //   component: Layout,
  //   children: [
  //     {
  //       path: 'index',
  //       component: () => import('@/views/tab/index'),
  //       name: 'Tab',
  //       meta: { title: 'tab', icon: 'tab' }
  //     }
  //   ]
  // },
  //
  // {
  //   path: '/error',
  //   component: Layout,
  //   redirect: 'noredirect',
  //   name: 'ErrorPages',
  //   meta: {
  //     title: 'errorPages',
  //     icon: '404'
  //   },
  //   children: [
  //     {
  //       path: '401',
  //       component: () => import('@/views/errorPage/401'),
  //       name: 'Page401',
  //       meta: { title: 'page401', noCache: true }
  //     },
  //     {
  //       path: '404',
  //       component: () => import('@/views/errorPage/404'),
  //       name: 'Page404',
  //       meta: { title: 'page404', noCache: true }
  //     }
  //   ]
  // },
  //
  // {
  //   path: '/error-log',
  //   component: Layout,
  //   redirect: 'noredirect',
  //   children: [
  //     {
  //       path: 'log',
  //       component: () => import('@/views/errorLog/index'),
  //       name: 'ErrorLog',
  //       meta: { title: 'errorLog', icon: 'bug' }
  //     }
  //   ]
  // },
  //
  //
  // {
  //   path: '/zip',
  //   component: Layout,
  //   redirect: '/zip/download',
  //   alwaysShow: true,
  //   meta: { title: 'zip', icon: 'zip' },
  //   children: [
  //     {
  //       path: 'download',
  //       component: () => import('@/views/zip/index'),
  //       name: 'ExportZip',
  //       meta: { title: 'exportZip' }
  //     }
  //   ]
  // },





  { path: '*', redirect: '/404', hidden: true }
]
