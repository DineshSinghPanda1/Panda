<template>
  <div id="app">
    <v-card class="mx-auto" max-width="344" outlined v-for="item in posts" :key="item">
      <v-list-item three-line>
        <v-list-item-content>
          <v-list-item-title class="headline mb-1">Api Example</v-list-item-title>
          <v-list-item-subtitle>ID:{{ item.id }}</v-list-item-subtitle>
          <v-list-item-subtitle>First_name:{{ item.first_name }}</v-list-item-subtitle>

          <v-list-item-subtitle>Last_name:{{ item.last_name }}</v-list-item-subtitle>
          <v-list-item-subtitle>Gender:{{ item.gender }}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-card>

    <!-- <h1>done</h1> -->
  </div>
</template>

<script>
import Vue from "vue";
import { mapState } from "vuex";

export default {
  name: "Test",
  mounted() {
    this.$store.dispatch("loadPosts");
  },
  computed: {
    ...mapState(["posts"])
  }
};
</script>
