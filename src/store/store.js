import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    counter: 0
  },
  getters: {
    doubleCounter: state => {
      return state.counter * 2;
    }
  },
  mutations: {
    increment: state => {
      state.counter++;
    },
    incrementBy: (state, by) => {
      state.counter += by;
    },
    decrement: state => {
      state.counter--;
    }
  },
  actions: {
    increment: ({ commit }, by) => {
      commit('incrementBy', by);
    }
  }
});
