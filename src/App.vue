<template>
  <v-app>
    <div id="app">
      <Suburbs />
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
  methods: {}
};
</script>
