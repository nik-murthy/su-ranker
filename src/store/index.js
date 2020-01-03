import Vue from 'vue';
import Vuex from 'vuex';
import client from 'api-client/suburbs';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    suburbs: [],
    numPages: 0,
    numResults: 0
  },
  getters: {
    suburbs: state => {
      return state.suburbs;
    },
    numPages: state => {
      return state.numPages;
    },
    numResults: state => {
      return state.numResults;
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
    async fetchSuburbs(context, searchCriteria) {

      const suburbs = await client.fetchSuburbs(searchCriteria);      
      context.commit('setSuburbs', suburbs.data.suburbs);
      context.commit('setNumPages', suburbs.data.numPages);
      context.commit('setNumResults', suburbs.data.numResults);
    }
  }
});