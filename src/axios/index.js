// import Vue from 'vue'
// import axios from 'axios'
//
// let AUTH_TOKEN = (function(){
//   let token = localStorage.getItem('userToken');
//   return token == 'null'?'':token
// })();
//
// var instance = axios.create({});
// // instance.defaults.headers.common["Authorization"] = AUTH_TOKEN;
// instance.defaults.headers.common["Content-Type"] = 'application/x-www-form-urlencoded;charset=UTF-8';
// instance.interceptors.request.use(function(config){
//   let url = config.url;
//   if(url.indexOf('login')>-1){
//     localStorage.setItem('userToken','');
//     config.headers.Authorization = '';
//   }else{
//     config.headers.Authorization = localStorage.getItem('userToken');
//   }
//   return config;
// },function(err){
//   return Promise.reject(err);
// });
// instance.interceptors.response.use(function(res){
//   if(res.headers.token){
//     localStorage.setItem('userToken',res.headers.token);
//   }
//   return res;
// },function(err){
//   return err;
// });
//
// Vue.prototype.$http = axios;

