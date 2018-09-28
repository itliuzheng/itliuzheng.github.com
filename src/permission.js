import router from "./router";
import store from './store'
import {getToken} from "@/utils/token";
import { Message } from 'element-ui'

const whiteList = ['/login'];

// permission judge function
function hasPermission(roles, permissionRoles) {
  if (roles.indexOf('admin') >= 0) return true // admin permission passed directly
  if (!permissionRoles) return true
  return roles.some(role => permissionRoles.indexOf(role) >= 0)
}

router.beforeEach((to,from,next) =>{

  let token = getToken();


  if(token){
    if(to.path === '/login'){
      next({path:'/'});
    }else{

      if (store.getters.roles.length === 0) { // 判断当前用户是否已拉取完user_info信息

        store.dispatch('GetUserInfo').then(res => { // 拉取user_info
          const roles = res.data.data // note: roles must be a array! such as: ['editor','develop']
          store.dispatch('GenerateRoutes', { roles }).then(() => { // 根据roles权限生成可访问的路由表
            router.addRoutes(store.getters.addRouters) // 动态添加可访问路由表
            next({ ...to, replace: true }) // hack方法 确保addRoutes已完成 ,set the replace: true so the navigation will not leave a history record

          })
        }).catch((err) => {
          store.dispatch('FedLogOut').then(() => {
            Message.error('Verification failed, please login again')
            next({ path: `/`})
          })
        })

      } else {
        // 没有动态改变权限的需求可直接next() 删除下方权限判断 ↓
        // if (hasPermission(store.getters.roles, to.meta.roles)) {
        //   next()
        // } else {
        //   next({ path: '/401', replace: true, query: { noGoBack: true }})
        // }
        // 可删 ↑
        if (to.matched.length ===0) {                                    
          from.name ? next({ name:from.name }) : next('/');  
        }else{
          next()
        }
      }

    }
  }else{

    if(whiteList.indexOf(to.path) != -1 ){ // 在免登录白名单，直接进入
      next();
    }else{
      // 全部重定向到登录页
      // next(`/login?redirect=${to.path}`);
      next(`/login?redirect=${to.path}`);
    }
  }

  let length = to.meta.meta? to.meta.meta.length: 0;
  //路由发生变化修改页面meta
  if(length){
    for(let i = 0;i<length;i++){
      let head = document.getElementsByTagName('head');
      let meta = document.createElement('meta');
      meta.name = to.meta.meta[i].name;
      meta.content = to.meta.meta[i].content;
      head[0].appendChild(meta);
    }
  }

  //路由发生变化修改页面title
  if(to.meta.title){
    document.title = to.meta.title;
  }


});
