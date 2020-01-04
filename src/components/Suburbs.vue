<template>
  <v-container fluid>
    <v-row dense>
    </v-row>
    <v-row align="center">
      <v-col lg="4" sm="12">
        <v-row justify="center" dense>
          <v-switch justify="center" v-model="propertyType" class="mx-2" label="House/unit?"></v-switch>
        </v-row>
      </v-col>
      <v-col lg="4" sm="12">
        <v-row justify="center" class="white--text" dense>
          <v-text-field label="Enter budget" v-model="maximumMedianPrice"></v-text-field>
        </v-row>
      </v-col>
      <v-col lg="4" sm="12">
        <v-row align="stretch" justify="center" dense>
          <v-btn @click="updateSuburbs('search')">Search</v-btn>
        </v-row>
      </v-col>
    </v-row>
    <v-row dense>
      <v-divider></v-divider>
    </v-row>
    <v-row justify="center">
      <v-col lg="3" sm="12">
        <v-row justify="center" dense>
          <v-select
            v-model="state"
            :items="states"
            @change="updateSuburbs('filter')"
            label="Filter by state"
          ></v-select>
        </v-row>
      </v-col>
      <v-col lg="3" sm="12">
        <v-row justify="center" dense>
          <v-select v-model="sort" :items="sorts" @change="updateSuburbs('sort')" label="Sort By"></v-select>
        </v-row>
      </v-col>
    </v-row>
    <v-row dense>
      <v-col lg="4" sm="6" v-for="suburb in suburbs" :key="suburb.suburbId">
        <SuburbV2 :suburb="suburb" />
      </v-col>
    </v-row>    
    <v-row class="mt-5">       
      <v-pagination v-model="page" :length="numPages" @input="updateSuburbs('pagination')"></v-pagination>
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
    },
    states() {
      return ["All", "NSW", "VIC"];
    },
    sorts() {
      return ["Relevance", "Demographics"];
    },
    numPages() {
      return this.$store.state.numPages;
    }
  },
  methods: {
    updateSuburbs(event) {
      if (event === "search") {
        this.state = "All";
        this.sort = "Relevance";
        this.page = 1;
      }
      if(event === 'sort') {
          this.page = 1;
      }
      if(event === 'filter') {
          this.page = 1;
      }
      this.$store
        .dispatch("fetchSuburbs", {
          state: this.state,
          sort: this.sort,
          mmp: this.maximumMedianPrice,
          type: this.propertyType,
          page: this.page
        })
        .catch(error => console.log(error));
    }
  },
   async mounted() {
    this.$store.dispatch("fetchSuburbs", {});
  }
};
</script>

<style scoped>
</style>