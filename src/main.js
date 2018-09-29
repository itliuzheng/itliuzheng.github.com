// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import '@/styles/index.scss'


import App from './App'
import router from './router'
import store from './store'

// import axios from 'axios'

// import './axios'
import './components/component/base/index'
import './icon'
import './permission.js'
// import Router from "vue-router";
// import VueResource from 'vue-resource'



Vue.use(ElementUI);
Vue.config.productionTip = false;

//解决ie不支持promise
require('es6-promise').polyfill();

// const store = new Vuex.Store({
//   state:{
//     count:0
//   },
//   mutations:{
//     increment(state){
//       state.count++;
//     }
//   }
// })

/* eslint-disable no-new */

var app = new Vue({
  el: '#app',
  router,
  store,
  // components: { App },
  render: h => h(App),
  template: '<App/>',
})


