<template>
  <v-card class="mx-auto" min-width="50" max-width="400">
    <v-img src="https://cdn.vuetifyjs.com/images/cards/road.jpg">
      <v-container fill-height>
        <!-- <v-layout align-start>
          <v-row>
            <v-col>
              <v-icon v-show="suburb.h_score>1" small color="white" right>mdi-school</v-icon>
              <v-icon v-show="suburb.u_score>1" small color="white" right>mdi-hospital</v-icon>
            </v-col>
          </v-row>
        </v-layout> -->
           <v-row align="start">
            <v-col>
              <v-icon v-show="suburb.h_score>1" small color="white" right>mdi-school</v-icon>
              <v-icon v-show="suburb.u_score>1" small color="white" right>mdi-hospital</v-icon>
            </v-col>
          </v-row>   
         <v-row align="stretch" justify="center" class="white white--text">
              <div class="subheading">{{suburb.name}}</div>
              <div class="body-1">{{suburb.state}}</div>
          </v-row>
          
        <!-- <v-layout align-end justify-center grey darken-4 class="white--text">
          <v-row>
            <v-col>
              <div class="subheading">Jonathan Lee</div>
              <div class="body-1">heyfromjonathan@gmail.com</div>
            </v-col>
          </v-row>
        </v-layout> -->
      </v-container>
      <!-- <v-row align="top">
        <v-col>
          <v-icon v-show="suburb.h_score>1" small color="white" right>mdi-school</v-icon>
          <v-icon v-show="suburb.u_score>1" small color="white" right>mdi-hospital</v-icon>
        </v-col>
      </v-row>
      <v-row align="end">
        <v-col>
          <v-icon v-show="suburb.u_score>1" small color="white" right>mdi-hospital</v-icon>
        </v-col>
      </v-row>-->
    </v-img>
    <!-- <v-card-text class="text--primary justify-center">
      <div>{{suburb.name}}</div>
      <div>{{suburb.state}}</div>
    </v-card-text> -->
    <v-card-actions class="justify-center">
      <v-btn small slot="activator" color="orange">
        <v-icon>mdi-arrow-expand</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "Suburb",
  props: ["suburb"],
  components: {}
};
</script>

<style scoped>
</style>