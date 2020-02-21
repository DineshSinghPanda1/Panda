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
          <!-----Main card----->

          <v-container class="text-center">
            <v-row>
              <v-col class="d-flex" cols>
                <v-menu
                  v-model="menu2"
                  :close-on-content-click="false"
                  transition="scale-transition"
                  offset-y
                  max-width="290px"
                  min-width="290px"
                >
                  <template v-slot:activator="{ on }">
                    <v-text-field
                      v-model="computedDateFormatted"
                      label="Date To"
                      hint="MM/DD/YYYY"
                      persistent-hint
                      :prepend-icon="calender"
                      readonly
                      outlined
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker v-model="date" no-title @input="menu2 = false"></v-date-picker>
                </v-menu>
              </v-col>

              <!--------Selection Box-------->
              <v-col class="d-flex" cols="12" sm="6">
                <v-select :items="items" label="Solo field" solo></v-select>
              </v-col>
            </v-row>
            <!----------------end-------------->

            <!-----form---->
            <v-form class="ma-5">
              <v-textarea label="Description" placeholder=" Write here" required outlined></v-textarea>
              <v-checkbox
                v-model="checkbox"
                :rules="[v => !!v || 'You must agree to continue!']"
                label="Accept term & condition"
                required
              ></v-checkbox>
              <v-btn color="error" class="mr-4" @click="reset">Apply For TC</v-btn>
            </v-form>

            <!------------------------>

            <v-layout>
              <v-flex md="6" class="pl-3" v-for="dii in dii" :key="dii.name">
                <v-card outlined :color="dii.color" class="card">
                  <!-- <span class="text">{{dii.text}}</span> -->
                  <v-list-item>
                    <v-list-item-avatar color="grey"></v-list-item-avatar>
                    <v-list-item-content>
                      <v-list-item-title class="headline">
                        {{
                        dii.name
                        }}
                      </v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>
          <!----------------------------------->
          <!----end main---->
        </v-card>
      </v-dialog>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "TCReq",

  data: () => ({})
});
</script>
