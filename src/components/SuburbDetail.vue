<template>
  <v-card color="basil">
    <v-card-title class="text-center justify-center py-6">
      <p
        class="display-1 text--primary basil--text"
      >{{ suburb.suburb.suburbInfo.name }}, {{ suburb.suburb.suburbInfo.state }}</p>
    </v-card-title>
    <v-card-text>{{ suburb.suburb.wikiSummary.wikipedia_summary }}</v-card-text>
    <v-tabs background-color="transparent" color="basil" grow>
      <v-tab :key="demographics">Demographics</v-tab>
      <v-tab v-show="suburb.suburb.suburbInfo.hScore>1">Hospitals</v-tab>
      <v-tab v-show="suburb.suburb.suburbInfo.uScore>1">Universities</v-tab>
      <v-tab-item :key="demographics">
        <v-card flat color="basil">
          <v-card-text class="heading">Population Growth: {{ suburb.suburb.lga.populationGrowth }} </v-card-text>

        </v-card>
      </v-tab-item>
      <v-tab-item v-show="suburb.suburb.suburbInfo.hScore>1">
        <v-col cols="12" v-for="hospital in suburb.suburb.hospitals" :key="hospital.hospitalId">
          <v-card flat color="basil">
            <v-card-title v-text="hospital.hospitalName"></v-card-title>
            <v-card-subtitle v-text="hospital.beds"></v-card-subtitle>
          </v-card>
        </v-col>
      </v-tab-item>
      <v-tab-item v-show="suburb.suburb.suburbInfo.hScore>1">
         <v-col cols="12" v-for="university in suburb.suburb.universities" :key="university.universityId">
          <v-card flat color="basil">
            <v-card-title v-text="university.name"></v-card-title>
            <v-card-subtitle v-text="university.campus_type"></v-card-subtitle>
          </v-card>
        </v-col>
      </v-tab-item>
    </v-tabs>
  </v-card>
  <!-- <v-container>    
    <v-row>

    </v-row>   
  </v-container>-->
</template>
<script>
export default {
  name: "SuburbDetail",
  computed: {
    suburb() {
      return this.$store.state.suburb;
    }
  },
  async mounted() {
    console.log(this.$route.params.suburbId);
    this.$store.dispatch("fetchSuburb", this.$route.params.suburbId);
  }
};
</script>