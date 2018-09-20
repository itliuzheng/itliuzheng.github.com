
import axios from 'axios'
import store from '@/store'
import {getToken} from "./token";
import Vue from "vue";

axios.defaults.retry = 4;
axios.defaults.retryDelay = 1000;
axios.interceptors.response.use(undefined, function axiosRetryInterceptor(err) {
 var config = err.config;
 // If config does not exist or the retry option is not set, reject
 if(!config || !config.retry) return Promise.reject(err);
 // Set the variable for keeping track of the retry count
 config.__retryCount = config.__retryCount || 0;
 // Check if we've maxed out the total number of retries
 if(config.__retryCount >= config.retry) {
  // Reject with the error
  return Promise.reject(err);
 }
 // Increase the retry count
 config.__retryCount += 1;
 // Create new promise to handle exponential backoff
 var backoff = new Promise(function(resolve) {
  setTimeout(function() {
   resolve();
  }, config.retryDelay || 1);
 });
 // Return the promise in which recalls axios to retry the request
 return backoff.then(function() {
  return axios(config);
 });
});

const service = axios.create({
  baseURL:process.env.BASE_API,
  // timeout:5000
})

service.interceptors.request.use(
  config =>{
    if(store.getters.token){
      // 让每个请求携带token-- ['X-Token']为自定义key 请根据实际情况自行修改
      config.headers['Authorization'] = getToken()
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
