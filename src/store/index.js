import Vuex from 'vuex'
import * as getters from './getters'
import * as mutations from './mutations'
import * as actions from './actions'

Vue.use(Vuex);

const store = new Vuex.Store({
  state:{
    //当前用户
    currentUser:null,
    //是否登录
    isLogin:false,
    //token
    token:''
  },
  getters,
  mutations,
  actions
});

export default store
