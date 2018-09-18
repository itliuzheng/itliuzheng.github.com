import {getToken,setToken,removeToken} from "@/utils/token";
import {loginByUsername,getUserInfo} from "@/api/login"
import {parseStrEmpty} from "@/utils";

const user = {
  state:{
    token:getToken(),
    name:parseStrEmpty(localStorage.getItem('user_name')),
    roles:[]
  },
  mutations:{
    SET_TOKEN:(state,token)=>{
      state.token = token
    },
    SET_NAME:(state,name)=>{
      state.name = name
    },
    SET_ROLES:(state,roles)=>{
      state.roles = roles
    }
  },
  actions:{
    //用户名登录
    LoginByUsername({commit},userInfo){
      // const username = userInfo.username.trim();
      return new Promise((resolve,reject)=>{
        loginByUsername(userInfo.username,userInfo.password).then(res => {
          // const data = res.data;
          const token = res.headers.authorization;
          commit('SET_TOKEN',token);
          commit('SET_NAME',userInfo.username);
          setToken(token);
          localStorage.setItem('user_name',userInfo.username);
          resolve();
        })
      }).catch(error=>{
        reject(error)
      })
    },
    // 获取用户信息
    GetUserInfo({ commit, state }) {

      return new Promise((resolve, reject) => {
        getUserInfo(state.token).then(response => {
          if (!response.data) { // 由于mockjs 不支持自定义状态码只能这样hack
            reject('error')
          }
          const data = response.data

          if (data.roles && data.roles.length > 0) { // 验证返回的roles是否是一个非空数组
            commit('SET_ROLES', data.roles)
          } else {
            reject('getInfo: roles must be a non-null array !')
          }

          commit('SET_NAME', data.name)
          commit('SET_AVATAR', data.avatar)
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },
    // 动态修改权限
    // ChangeRoles({ commit }, role) {
    //   return new Promise(resolve => {
    //     commit('SET_TOKEN', role)
    //     setToken(role)
    //     getUserInfo(role).then(response => {
    //       const data = response.data
    //       commit('SET_ROLES', data.roles)
    //       commit('SET_NAME', data.name)
    //       resolve()
    //     })
    //   })
    // }

    // 前端 登出
    FedLogOut({ commit }) {
      return new Promise(resolve => {
        commit('SET_TOKEN', '')
        removeToken()
        resolve()
      })
    },
  }
};

export default user
