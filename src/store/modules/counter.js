const state = {
  counter: 0
};

const getters = {
  getMultipliedCounter: (state, payload) => {
    return state.counter * payload;
  },
  getCounter: state => {
    return state.counter;
  }
};

const mutations = {
  updateCounter: (state, payload) => {
    state.counter += payload;
  }
};

const actions = {
  updateCounter: (context, payload) => {
    context.commit('updateCounter', payload);
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
