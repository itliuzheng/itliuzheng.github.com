import {asyncRouterMap,constantRouterMap} from "@/router";
import {arrToTree} from "@/utils/tree";

/**
 * 通过meta.role判断是否与当前用户权限匹配
 * @param roles
 * @param route
 */
function hasPermission(roles,route) {
  if(route.meta && route.meta.roles){
    console.log('hasPermission.roles',roles);
    // roles.some(role => {
    //   console.log('hasPermission.route.meta.roles==',route.meta.roles);
    //
    //   console.log('hasPermission.some.role==',role);
    //   console.log('hasPermission.some.targetUrl==',role.targetUrl);
    //   return route.meta.roles.indexOf(role.targetUrl) >= 0;
    // })
    // return roles.some(role => route.meta.roles.indexOf(role.targetUrl) >= 0)
    roles.forEach((role) =>{
      console.log('hasPermission.route.meta.roles==',route.meta.roles);

      console.log('hasPermission.some.role==',role);
      console.log('hasPermission.some.targetUrl==',role.targetUrl);

      return route.meta.roles == role.targetUrl
    })
  }else{
    return true
  }
}

/**
 * 递归过滤异步路由表，返回符合用户角色权限的路由表
 * @param asyncRouterMap
 * @param roles
 */

function filterAsynscRouter(asynvRouterMap,roles) {
  console.log('asynvRouterMap',asynvRouterMap);
  console.log('roles',roles);
  const accessedRouters = asynvRouterMap.filter( route => {
    if(hasPermission(roles,route)){
      if(route.children && route.children.length){
        route.children = filterAsynscRouter(route.children,roles)
      }
      return true;
    }
    return false
  })
  return accessedRouters
}



const permission = {
  state :{
    routers:constantRouterMap,
    addRoutes:[]
  },
  mutations:{
    SET_ROUTERS:(state,routers)=>{

      state.addRouters = routers;
      state.routers = constantRouterMap.concat(routers)
    }
  },
  actions:{
    GenerateRoutes({commit},data){
      return new Promise(resolve => {
        const roles = arrToTree(data.roles);
        let accessedRouters;
        accessedRouters = filterAsynscRouter(asyncRouterMap,roles)

        // if(roles.indexOf('admin') >= 0){
        //   accessedRouters = asyncRouterMap;
        // }else{
        //   accessedRouters = filterAsynscRouter(asyncRouterMap,roles)
        // }



        commit('SET_ROUTERS',accessedRouters);
        resolve()
      })
    }
  }
}
export default permission
