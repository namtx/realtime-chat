import Vuex from 'Vuex';
import Vue from 'vue/dist/vue.esm';

import mutations from './mutations';
import actions from './actions';
import getters from './getters';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    ws: null,
    count: 0,
    loggedIn: false,
    messages: []
  },
  mutations,
  actions,
  getters
})
