import Vue from 'vue'
import Vuex from 'vuex'

import user from './modules/user'
import permission from './modules/permission'
import app from './modules/app'

import getters from './getters'
// import * as mutations from './mutations'
// import * as actions from './actions'

Vue.use(Vuex);

const store = new Vuex.Store({
  modules:{
    app,
    user,
    permission
  },
  getters,
});

export default store
