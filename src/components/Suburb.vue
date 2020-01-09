<template>
<v-card class="mx-auto" min-width="50" max-width="400" @click="getDetails(suburb.suburbId)">
  <v-img src="https://cdn.vuetifyjs.com/images/cards/road.jpg" :aspect-ratio="16/9" min-width="100" max-width="400">
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-row align="stretch">
            <v-icon v-show="suburb.hScore>1"  small color="white" right>mdi-school</v-icon>
            <v-icon v-show="suburb.uScore>1" small color="white" right>mdi-hospital</v-icon>
          </v-row>
        </v-col>
        <v-col cols="12">
          <v-row class="grey darken-4 white--text">
            <v-col>
              <v-row justify="center">{{suburb.name}}</v-row>
              <v-row justify="center">{{suburb.state}}</v-row>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </v-img>
</v-card>
</template>
<script>
export default {
  name: "SuburbV2",
  props: ["suburb"],
  components: {},
  methods: {
    getDetails(suburbId) {
      this.$router.push({
        name: 'suburb',
        params: {
          suburbId
        }
      })
    }
  }
};
</script>