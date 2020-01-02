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
    setSuburbs(state, suburbs) {
      state.suburbs = suburbs;
    },
    setNumPages(state, numPages) {
      state.numPages = numPages;
    },
    setNumResults(state, numResults) {
      state.numResults = numResults;
    }
  },
  actions: {
    async fetchSuburbs(context) {
      const suburbs = await client.fetchSuburbs();
      console.log(suburbs);
      context.commit('setSuburbs', suburbs.suburbs);
      context.commit('setNumPages', suburbs.numPages);
      context.commit('setNumResults', suburbs.numResults);
    }
  },
  modules: {

  }
});