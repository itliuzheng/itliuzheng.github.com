
import axios from 'axios'
import store from '@/store'
import {getToken} from "./token";
import Vue from "vue";



const service = axios.create({
  baseURL:process.env.BASE_API,
  timeout:5000
})

service.interceptors.request.use(
  config =>{
    if(store.getters.token){
      // 让每个请求携带token-- ['X-Token']为自定义key 请根据实际情况自行修改
      config.headers['Authorization'] = getToken
    }
    return config
  },
  error => {
    console.log(error);
    Promise.reject(errir)
  }
)

service.interceptors.request.use(
  response => response,
  error => {
    console.log('err==='+error);
    Message({
      msesage:error.message,
      type:'error',
      duration:5000
    })
    return Promise.reject(error)
  }
)

export default service
