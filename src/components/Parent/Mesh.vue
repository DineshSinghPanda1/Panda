<template>
  <v-container>
    <v-row justify="center">
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
          <!-----Main card----->
          <v-container>
            <v-data-iterator
              :items="items"
              :items-per-page.sync="itemsPerPage"
              hide-default-footer
            >
              <template v-slot:header>
                <v-toolbar class="mb-2" color="indigo darken-5" dark flat>
                  <v-toolbar-title>Today Menu</v-toolbar-title>
                </v-toolbar>
              </template>

              <template v-slot:default="props">
                <v-row>
                  <v-col
                    v-for="item in props.items"
                    :key="item.name"
                    cols="12"
                    sm="6"
                    md="4"
                    lg="3"
                  >
                    <v-card>
                      <v-card-title class="subheading font-weight-bold">{{
                        item.name
                      }}</v-card-title>
                      <v-divider></v-divider>
                      <v-row>
                        <v-col class="text-center">
                          <v-card-text>{{ item.allo }}</v-card-text>
                          <v-card-text>{{ item.egg }}</v-card-text>
                        </v-col>
                        <v-col>
                          <v-card-text>{{ item.rajma }}</v-card-text>
                          <v-card-text>{{ item.chawal }}</v-card-text>
                        </v-col>
                        <v-col>
                          <v-card-text>{{ item.tea }}</v-card-text>
                          <v-card-text>{{ item.chips }}</v-card-text>
                        </v-col>
                        <v-col>
                          <v-card-text>{{ item.roti }}</v-card-text>
                          <v-card-text>{{ item.dal }}</v-card-text>
                        </v-col>
                      </v-row>
                    </v-card>
                  </v-col>
                </v-row>
              </template>
            </v-data-iterator>
          </v-container>

          <!----end main---->

          <!--------2--------->
          <v-container grid-list-md>
            <v-layout row>
              <v-col cols="7" v-for="din in din" :key="din.name">
                <v-card>
                  <v-divider></v-divider>
                  <v-row>
                    <v-col>
                      <v-responsive>
                        <v-avatar color="orange" size="162">
                          <span class="white--text headline">Food Pic</span>
                        </v-avatar>
                      </v-responsive>
                    </v-col>
                    <v-col class="text-center">
                      <v-card-text class="display-3">Breakfast</v-card-text>
                      <v-rating
                        v-model="rating"
                        background-color="green lighten-3"
                        color="green"
                        large
                      ></v-rating>
                    </v-col>
                  </v-row>
                  <v-divider></v-divider>
                  <v-row>
                    <v-col class>
                      <v-card-text>{{ din.monday }}</v-card-text>
                      <v-divider></v-divider>
                      <v-card-text>{{ din.m }}</v-card-text>
                    </v-col>
                    <v-col>
                      <v-card-text>{{ din.tuesday }}</v-card-text>
                      <v-divider></v-divider>
                      <v-card-text>{{ din.t }}</v-card-text>
                    </v-col>
                    <v-col>
                      <v-card-text>{{ din.wed }}</v-card-text>
                      <v-divider></v-divider>
                      <v-card-text>{{ din.w }}</v-card-text>
                    </v-col>
                    <v-col>
                      <v-card-text>{{ din.thus }}</v-card-text>
                      <v-divider></v-divider>
                      <v-card-text>{{ din.th }}</v-card-text>
                    </v-col>
                    <v-col>
                      <v-card-text>{{ din.fir }}</v-card-text>
                      <v-divider></v-divider>
                      <v-card-text>{{ din.f }}</v-card-text>
                    </v-col>
                    <v-col>
                      <v-card-text>{{ din.sat }}</v-card-text>
                      <v-divider></v-divider>
                      <v-card-text>{{ din.s }}</v-card-text>
                    </v-col>
                  </v-row>
                </v-card>
              </v-col>
            </v-layout>
          </v-container>
          <!---------2 end-------->
          <!----------3------------------->
          <v-container>
            <v-layout>
              <v-flex v-for="dii in dii" :key="dii.name">
                <v-card>
                  <v-row>
                    <v-col class="ma-3">
                      <v-responsive>
                        <v-avatar color="orange" size="80">
                          <span class="white--text headline">Food Pic</span>
                        </v-avatar>
                      </v-responsive>
                    </v-col>
                    <v-col class>
                      <v-card-text class="display">{{ dii.food }}</v-card-text>
                      <v-rating
                        v-model="rating"
                        background-color="green lighten-3"
                        color="green"
                      ></v-rating>
                    </v-col>
                  </v-row>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>

          <!--------3 end------------>
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
    rating: 4,
    itemsPerPage: 4,
    din: [
      {
        title: "dinesh",
        monday: "Monday",
        tuesday: "Tuesday",
        wed: "Wedneday",
        thus: "Thusday",
        fir: "Firday",
        sat: "Saturday",
        m: "Aallo Parath",
        t: "Chholy Bhature",
        w: "Puri Sabji",
        th: "Paratha Sabji",
        f: "Sandwich",
        s: "Dessert"
      }
    ],

    items: [
      {
        name: "Braekfast",
        allo: " Paratha",
        egg: "egg"
      },
      {
        name: "Launch",
        rajma: "Rajma",
        chawal: "Chawal"
      },
      {
        name: "Snacks",
        tea: "Tea",
        chips: "Chips"
      },
      {
        name: "Dinner",
        roti: "Roti",
        dal: "Dal"
      }
    ],
    dii: [
      {
        food: "Breakfast"
      },
      {
        food: "Launch"
      },
      {
        food: "Snacks"
      },
      {
        food: "Dinner"
      }
    ]
  })
});
</script>
