import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// import login from '@/components/login/login'
// import fail from '@/components/login/fail'
// import undefinedfail from '@/components/error/undefinedfail'

import Layout from '@/views/layout/layout'

Vue.use(Router)



export const constantRouterMap = [
  //首页
  {
    path: '',
    component: Layout,
    name: 'Dashboard',
    redirect: '/business_management/data_entry',
    // redirect: '/dashboard',
    meta: { title: '首页', noCache: true },
    // redirect: 'dashboard',
    hidden:true,
    children: [
      {
        path: 'dashboard',
        component: resolve => require(['@/views/dashboard/index'],resolve),
        name: 'Dashboard'
      }
    ]
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
  // {
  //   //业务管理
  //   path: '/business_management_entry',
  //   component: Layout,
  //   redirect: '/business_management_entry/data_entry',
  //   meta: { title: '业务管理', noCache: true },
  //   hidden: true,
  //   children: [
  //     {
  //       path: 'data_entry',
  //       // component: () => import('@/views/business_management/data_entry'),
  //       component: resolve => require(['@/views/business_management/data_entry'],resolve),
  //       name: 'data_entry',
  //       meta: { title: '资料录入', noCache: true }
  //     }
  //   ]
  // },
  // { path: '/*', redirect: '/', hidden: true }

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
]

export default new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})

export const asyncRouterMap = [
  {
    component: Layout,
    path: '/review',
    // redirect: '/review/detail',
    children: [
      {
        path: 'detail/:id(\\d+)/:taskId(\\d+)',
        // component: () => import('@/views/redirect/index')
        component: resolve => require(['@/views/review_detail/detail'],resolve),
        name: 'detail',
        meta: { title: '审核详情', icon: 'detail', noCache: true ,roles:'/review' }
      }
    ],
    hidden: true
  },
  {
    //业务管理
    path: '/business_management',
    component: Layout,
    // redirect: '/business_management/data_entry',
    meta: {
      title: '业务管理',
      noCache: true ,
      roles:'/business_management'
    },
    children: [
      {
        path: 'data_entry',
        // component: () => import('@/views/business_management/data_entry'),
        component: resolve => require(['@/views/business_management/data_entry'],resolve),
        name: 'data_entry',
        meta: {
          title: '资料录入', noCache: true,
          roles:'/business_management/data_entry'
        },
      },
      {
        path: 'data_entry/:id(\\d+)',
        // component: () => import('@/views/business_management/data_entry'),
        component: resolve => require(['@/views/business_management/data_entry'],resolve),
        name: 'data_entry_id',
        hidden:true,
        meta: {
          title: '资料查看', noCache: true,
          roles:'/business_management/data_entry'
        },
      },
      {
        path: 'application_management',
        component: () => import('@/views/business_management/application_management'),
        name: 'application_management',
        meta: { title: '申请管理',
          noCache: true,
          roles:'/business_management/application_management'
        }
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
      roles:'/approval_management'
    },
    children: [
      {
        path: 'approval_list_all',
        component: () => import('@/views/approval_management/approval_list_all'),
        name: 'approval_list_all',
        meta: {
          title: '审核列表',
          roles: '/approval_management/approval_list_all' // or you can only set roles in sub nav
        }
      },
      {
        path: 'approval_list',
        component: () => import('@/views/approval_management/approval_list'),
        name: 'approval_list',
        meta: {
          title: '待审核列表',
          roles: '/approval_management/approval_list' // or you can only set roles in sub nav
        }
      },
      {
        path: 'household_list',
        component: () => import('@/views/approval_management/household_list'),
        name: 'household_list',
        meta: {
          title: '待下户列表',
          roles: '/approval_management/household_list'
          // if do not set roles, means: this page does not require approval_management
        }
      },
      {
        path: 'approval_list_history',
        component: () => import('@/views/approval_management/approval_list_history'),
        name: 'approval_list_history',
        meta: {
          title: '历史审核列表',
          roles: '/approval_management/approval_list_history'
          // if do not set roles, means: this page does not require approval_management
        }
      },
      {
        path: 'household_review/:id(\\d+)',
        component: () => import('@/views/approval_management/household_review'),
        name: 'household_review',
        hidden:true,
        meta: {
          title:'录入申线下调研表',
          roles: '/approval_management/household_review'
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
      roles:'/customer_management'
    },
    children: [
      {
        path: 'list',
        component: () => import('@/views/customer_management/list'),
        name: 'list',
        meta: {
          title: '客户列表',
          roles: '/customer_management/list'
        }
      }
    ]
  },
  {
    path: '/authority_management',
    component: Layout,
    redirect: '/authority_management/set',
    alwaysShow: true, // will always show the root menu
    meta: {
      title: '权限管理',
      roles:'/authority_management/set'
    },
    children: [
      {
        path: 'set',
        component: () => import('@/views/authority/set'),
        name: 'set',
        meta: {
          title: '权限设置',
          roles: '/authority_management/set'
        }
      }
    ]
  },
]
