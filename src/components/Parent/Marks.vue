<template>
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
            <v-col cols="6" v-for="item in marks" :key="item.id">
              <v-card>
                <v-card-title class="grey">Assesment</v-card-title>
                <v-row>
                  <v-col class="text-center">
                    <v-card-text>Total</v-card-text>
                    <v-chip class="ma-2" color="green">{{item.max_marks}}</v-chip>
                  </v-col>
                  <v-col>
                    <v-card-text>Obtain</v-card-text>
                    <v-chip class="ma-2" color="blue">{{item.marks_obtained}}</v-chip>
                  </v-col>
                  <v-col>
                    <v-card-text>Percentage</v-card-text>
                    <v-chip class="ma-2" color="yellow"></v-chip>
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
</template>

<script lang="ts">
import Vue from "vue";
import { mapState } from "vuex";

export default Vue.extend({
  name: "Marks",
  mounted() {
    this.$store.dispatch("loadMarks");
  },
  computed: {
    ...mapState(["marks"])
  },
  data: () => ({
    dialog: false,
    notifications: false,
    sound: true,
    widgets: false
  })
});
</script>
