<template>
  <v-app>
    <div id="app">
      <v-row justify="center">
        <v-toolbar dark color="blue-grey darken-1">
          <v-toolbar-title>Aussie Suburb Ranker</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn color="blue-grey darken-1" depressed :to="{name: 'about'}">About</v-btn>
            <v-btn color="blue-grey darken-1" depressed :to="{name: 'suburbs'}">Suburbs</v-btn>
          </v-toolbar-items>
        </v-toolbar>
      </v-row>
      <router-view></router-view>
    </div>
  </v-app>
</template>

<script>
export default {
  name: "app",

  components: {},
  data: () => ({}),
  methods: {}
};
</script>
