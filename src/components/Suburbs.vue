<template>
  <v-container fluid>
    <v-row dense>
      <v-col cols="4" v-for="suburb in suburbs" :key="suburb.suburbId">
        <SuburbV2 :suburb="suburb" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import SuburbV2 from "./SuburbV2";

export default {
  name: "Suburbs",
  components: {
    SuburbV2
  },
  computed: {
    suburbs() {
      return this.$store.state.suburbs;
    }
  },
  async mounted() {
    this.$store.dispatch("fetchSuburbs");
  }
};
</script>

<style scoped>
</style>