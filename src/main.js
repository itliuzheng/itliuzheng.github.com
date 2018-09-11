// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

// import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/css/base.css'
import '@/assets/css/pc_base.css'

// import Vue from 'vue'

import App from './App'
import router from './router'
import store from './store'
import axiosbase from './axios'
import axios from 'axios'
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'

// import Router from "vue-router";
// import VueResource from 'vue-resource'
// import ElementUI from 'element-ui'

const requireComponent = require.context(
  './components/component/base',
  false,
  /base-\w+\.(vue|js)$/
);

//通用全局组件化
requireComponent.keys().forEach(fileName => {
  const componentConfig = requireComponent(fileName);
  const componentName = upperFirst(
    camelCase(
      fileName.replace(/^\.\/_/,'')
        .replace(/\.\w+$/,'')
    )
  );

  Vue.component(
    componentName,
    componentConfig.default || componentConfig
  )
});

router.beforeEach((to,from,next) =>{
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

  //判断该路由是否需要登录权限

  if(to.matched.some(record => record.meta.requireAuth)){
    let user_info = JSON.parse(localStorage.getItem('user_info'))||{};
    if(user_info.username){
      next();
    }else{
      next({
        path:'/',
        query:{redirect:to.fullPath}   //将跳转的路由path作为参数，登录成功后跳转到该路由
      })
    }

  }else{
    next();
  }

});


// Vue.use(ElementUI);
Vue.use(router);
Vue.prototype.$http = axios;
Vue.config.productionTip = false;


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
  // beforeCreate: function () {
  //         console.group('beforeCreate 创建前状态===============》');
  //        console.log("%c%s", "color:red" , "el     : " + this.$el); //undefined
  //        console.log("%c%s", "color:red","data   : " + this.$data); //undefined
  //        console.log("%c%s", "color:red","message: " + this.message);
  //        console.log("%c%s", "color:red","message: " , this.$store);
  // },
  // created: function () {
  //     console.group('created 创建完毕状态===============》');
  //     console.log("%c%s", "color:red","el     : " + this.$el); //undefined
  //        console.log("%c%s", "color:red","data   : " + this.$data); //已被初始化
  //        console.log("%c%s", "color:red","message: " + this.message); //已被初始化
  // },
  // beforeMount: function () {
  //     console.group('beforeMount 挂载前状态===============》');
  //     console.log("%c%s", "color:red","el     : " + (this.$el)); //已被初始化
  //     console.log(this.$el);
  //        console.log("%c%s", "color:red","data   : " + this.$data); //已被初始化
  //        console.log("%c%s", "color:red","message: " + this.message); //已被初始化
  // },
  // mounted: function () {
  //     console.group('mounted 挂载结束状态===============》');
  //     console.log("%c%s", "color:red","el     : " + this.$el); //已被初始化
  //     console.log(this.$el);
  //        console.log("%c%s", "color:red","data   : " + this.$data); //已被初始化
  //        console.log("%c%s", "color:red","message: " + this.message); //已被初始化
  // },
  // beforeUpdate: function () {
  //     console.group('beforeUpdate 更新前状态===============》');
  //     console.log("%c%s", "color:red","el     : " + this.$el);
  //     console.log(this.$el);
  //        console.log("%c%s", "color:red","data   : " + this.$data);
  //        console.log("%c%s", "color:red","message: " + this.message);
  // },
  // updated: function () {
  //     console.group('updated 更新完成状态===============》');
  //     console.log("%c%s", "color:red","el     : " + this.$el);
  //     console.log(this.$el);
  //        console.log("%c%s", "color:red","data   : " + this.$data);
  //        console.log("%c%s", "color:red","message: " + this.message);
  // },
  // beforeDestroy: function () {
  //     console.group('beforeDestroy 销毁前状态===============》');
  //     console.log("%c%s", "color:red","el     : " + this.$el);
  //     console.log(this.$el);
  //        console.log("%c%s", "color:red","data   : " + this.$data);
  //        console.log("%c%s", "color:red","message: " + this.message);
  // },
  // destroyed: function () {
  //     console.group('destroyed 销毁完成状态===============》');
  //     console.log("%c%s", "color:red","el     : " + this.$el);
  //     console.log(this.$el);
  //        console.log("%c%s", "color:red","data   : " + this.$data);
  //        console.log("%c%s", "color:red","message: " + this.message)
  // }
})
