<template>
  <v-app>
    <div id="app">
      <suburbs />
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
  data: () => ({}),
  methods: {},
  async mounted() {
    this.$store.dispatch("fetchSuburbs", {});
  }
};
</script>
