import Vue from 'vue';
import Vuex from 'vuex';
import counter from './modules/counter';
import * as getters from './getters';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    name: 'Amine'
  },
  getters: getters,
  modules: {
    counter
  }
});
