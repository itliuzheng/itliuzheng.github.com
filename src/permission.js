import router from "./router";
import store from './store'
import {getToken} from "@/utils/token";

const whiteList = ['/login'];

router.beforeEach((to,from,next) =>{

  let token = getToken;
  if(token){
    if(to.path === '/login'){
      next({path:'/'});
    }else{
      //判断该路由是否需要登录权限
        console.log(to.matched.some(record => record.meta.requireAuth));
      if(to.matched.some(record => record.meta.requireAuth)){
        let token = store.token;
        if(token){
          next();
        }else{
          next({
            path:'/login',
            query:{redirect:to.fullPath}   //将跳转的路由path作为参数，登录成功后跳转到该路由
          })
        }
      }else{
        next();
      }
    }
  }else{
    if(whiteList.indexOf(to.path) != -1 ){ // 在免登录白名单，直接进入
      next();
    }else{
      // 全部重定向到登录页
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
