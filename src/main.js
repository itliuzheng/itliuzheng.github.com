// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/css/base.css'
import Vue from 'vue'
import App from './App'
import router from './router'
// import VueResource from 'vue-resource'
import axios from 'axios'
import ElementUI from 'element-ui'

Vue.use(ElementUI);
Vue.use(router);
Vue.prototype.$http = axios;
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  // components: { App },
  render: h => h(App),
  template: '<App/>'
})
