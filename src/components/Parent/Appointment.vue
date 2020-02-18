<template>
  <v-container
    ><v-row justify="center">
      <v-dialog
        v-model="dialog"
        fullscreen
        hide-overlay
        transition="dialog-bottom-transition"
      >
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
          <!-----Main card------------------------------------>
          <h1 class="text-center purple mt-2">Appointment Requiest</h1>
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
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker
                    v-model="date"
                    no-title
                    @input="menu2 = false"
                  ></v-date-picker>
                </v-menu>
              </v-col>
              <!----------------------2 ------------------------------------------->
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
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker
                    v-model="date"
                    no-title
                    @input="menu2 = false"
                  ></v-date-picker>
                </v-menu>
              </v-col>
            </v-row>
            <!-----------------------------2 end---------------------->
            <!-----form----------------------------------------------->
            <v-form>
              <v-text-field label="Subject" required></v-text-field>
              <v-textarea label="Write Reasion" required></v-textarea>

              <v-btn color="error" class="mr-4" @click="reset">Submit</v-btn>
            </v-form>
          </v-container>
          <!-------------------------end main---------------------------->
        </v-card>
      </v-dialog>
    </v-row></v-container
  >
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Cards",

  data: () => ({})
});
</script>
