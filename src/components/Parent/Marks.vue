<template>
  <v-container>
    <v-row justify="center">
      <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
        <template v-slot:activator="{ on }">
          <v-btn color="primary" dark v-on="on">Open Dialog</v-btn>
        </template>
        <v-card>
          <v-toolbar dark color="primary">
            <v-btn icon dark @click="dialog = false">
              <v-icon>mdi-close</v-icon>
            </v-btn>
            <v-toolbar-title>Settings</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items>
              <v-btn dark text @click="dialog = false">Save</v-btn>
            </v-toolbar-items>
          </v-toolbar>
          <!-----Main marks card----->
          <v-container grid-list-md>
            <v-layout row>
              <v-col cols="6" v-for="name in days" :key="name.name">
                <v-card>
                  <v-card-title class="grey">{{ name.title }}</v-card-title>
                  <v-row>
                    <v-col class="text-center">
                      <v-card-text>{{ name.total }}</v-card-text>
                      <v-chip class="ma-2" color="green">100</v-chip>
                    </v-col>
                    <v-col>
                      <v-card-text>{{ name.obtain }}</v-card-text>
                      <v-chip class="ma-2" color="blue">65</v-chip>
                    </v-col>
                    <v-col>
                      <v-card-text>{{ name.percentage }}</v-card-text>
                      <v-chip class="ma-2" color="yellow">65%</v-chip>
                    </v-col>
                  </v-row>
                </v-card>
              </v-col>
            </v-layout>
          </v-container>
          <!----end main---->
        </v-card>
      </v-dialog>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Marks",

  data: () => ({
    return: {
      dialog: false,
      notifications: false,
      sound: true,
      widgets: false,
      days: [
        {
          title: "Assesment 2",
          total: "Total",
          obtain: "Obtain",
          percentage: "Percentage"
        },
        {
          title: "Assesment 2",
          total: "Total",
          obtain: "Obtain",
          percentage: "Percentage"
        },
        {
          title: "Assesment 2",
          total: "Total",
          obtain: "Obtain",
          percentage: "Percentage"
        },
        {
          title: "Assesment 2",
          total: "Total",
          obtain: "Obtain",
          percentage: "Percentage"
        }
      ]
    }
  })
});
</script>
