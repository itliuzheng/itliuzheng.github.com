import Vue from 'vue'
import Vuex from 'vuex'

import user from './modules/user'

import getters from './getters'
// import * as mutations from './mutations'
// import * as actions from './actions'

Vue.use(Vuex);

const store = new Vuex.Store({
  modules:{
    user
  },
  getters,
});

export default store
