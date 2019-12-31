<template>
  <v-app>
    <div id="app">
      <Suburbs v-bind:suburbs="suburbs" />
    </div>
  </v-app>
</template>

<script>
import Suburbs from "./components/Suburbs";
export default {
  name: "app",

  components: {
    Suburbs
  },

  data: () => ({
  }),
  methods: {},
  computed: {
    suburbs() {
      return this.$store.state.suburbs;
    }
  },
  async mounted() {
    this.$store.dispatch('fetchSuburbs');
  }
  
};
</script>
