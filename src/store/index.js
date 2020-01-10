import Vue from 'vue';
import Vuex from 'vuex';
import client from 'api-client/suburbs';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    suburbs: [],
    suburb: {},
    numPages: 0,
    numResults: 0,
    searchCriteria: {}
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
    },
    suburb: state => {
      return state.suburb;
    },
    searchCriteria: state => {
      return state.searchCriteria;
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
    },
    setSuburb(state, suburb) {
      state.suburb = suburb;
    },
    setSearchCriteria(state, searchCriteria) {
      state.searchCriteria = searchCriteria;
    }
  },
  actions: {
    async fetchSuburbs(context, searchCriteria) {

      const suburbs = await client.fetchSuburbs(searchCriteria);      
      context.commit('setSearchCriteria', searchCriteria);
      context.commit('setSuburbs', suburbs.data.suburbs);
      context.commit('setNumPages', suburbs.data.numPages);
      context.commit('setNumResults', suburbs.data.numResults);
    },
    async fetchSuburb(context, suburbId) {
      const suburb = await client.fetchSuburb(suburbId);
      context.commit('setSuburb', suburb.data);

    }
  }
});