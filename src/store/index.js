import Vue from 'vue';
import Vuex from 'vuex';
import client from 'api-client/suburbs';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    suburbs: []
  },
  getters: {
    getSuburbs(state) {
      return state.suburbs;
    }
  },
  mutations: {
    setSuburbs (state, suburbs) {
      state.suburbs = suburbs;
    }
  },
  actions: {
    async fetchSuburbs(context) {
      const suburbs = await client.fetchSuburbs();
      context.commit('setSuburbs', suburbs);
    
    }
  },
  modules: {
  }
})
