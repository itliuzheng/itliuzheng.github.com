import {getToken} from "@/utils/token";
import {loginByUsername} from "@/api/login"

const user = {
  state:{
    user:'',
    token:getToken(),
    name:''
  },
  mutations:{
    SET_TOKEN:(state,token)=>{
      state.token = token
    },
    SET_NAME:(state,name)=>{
      state.name = name
    }
  },
  actions:{
    //用户名登录
    LoginByUsername({commit},userInfo){
      // const username = userInfo.username.trim();
      return new Promise((resolve,reject)=>{
        loginByUsername(userInfo.username,userInfo.password).then(res => {
          const data = res.data;
          console.log(res);
          commit('SET_TOKEN',data.token);
          Cookie.set('token',res.headers.authorization);
          resolve();
        })
      }).catch(error=>{
        reject(error)
      })
    }
  }
};

export default user
