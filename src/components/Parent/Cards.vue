<template>
  <v-container fluid grid-list-md>
    <!---Class1 Start-->

    <div class>
      <v-btn class="purple white--text ml-8">CLASS I</v-btn>
    </div>

    <v-alert outlined color="purple">
      <v-layout>
        <v-flex md3 v-for="card in cards" :key="card">
          <v-hover v-slot:default="{ hover }" open-delay="200">
            <v-card :elevation="hover ? 16 : 2">
              <v-card-title class="purple--text justify-center">
                {{
                card.title
                }}
              </v-card-title>
              <v-divider></v-divider>
              <v-row>
                <v-col pl-5>
                  <v-responsive>
                    <v-avatar class="pl-4" size="100">
                      <v-img :src="card"></v-img>
                    </v-avatar>
                  </v-responsive>
                </v-col>
                <v-col>
                  <v-row>
                    <v-col class="pr-10">
                      <h5 class="purple--text">{{ card.name }}</h5>
                      <h5 class="purple--text">{{ card.subject }}</h5>
                      <h5 class="purple--text">{{ card.strenght }}</h5>
                      <h5 class="purple--text">{{ card.present }}</h5>
                      <h5 class="purple--text">{{ card.abscent }}</h5>
                    </v-col>
                  </v-row>
                </v-col>
              </v-row>
            </v-card>
          </v-hover>
        </v-flex>
      </v-layout>
    </v-alert>

    <!------- Class1 End         ---->
    <!-------Class2 Start       ----->
    <div>
      <v-btn color="purple white--text ml-8 ">CLASS II</v-btn>
    </div>
    <v-alert outlined color="purple">
      <v-layout>
        <v-flex md3 v-for="card in cards" :key="card">
          <v-card>
            <v-card-title class="purple--text justify-center">
              {{
              card.title
              }}
            </v-card-title>
            <v-divider></v-divider>
            <v-row>
              <v-col>
                <v-responsive>
                  <v-avatar class="pl-4" size="100">
                    <v-img :src="card"></v-img>
                  </v-avatar>
                </v-responsive>
              </v-col>
              <v-col>
                <v-row>
                  <v-col class="pr-9">
                    <h5 class="purple--text">{{ card.name }}</h5>
                    <h5 class="purple--text">{{ card.subject }}</h5>
                    <h5 class="purple--text">{{ card.strenght }}</h5>
                    <h5 class="purple--text">{{ card.present }}</h5>
                    <h5 class="purple--text">{{ card.abscent }}</h5>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </v-card>
        </v-flex>
      </v-layout>
    </v-alert>
    <!----Class 2 End---->
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Cards",

  data: () => ({
    dynamic: "purple",
    cards: [
      {
        title: "Section A",
        src: "https://cdn.vuetifyjs.com/images/john.png",
        name: "Raj",
        subject: "Math",
        strenght: "Strenght of class",
        present: "Student Present",
        abscent: "Student Abscent"
      },
      {
        title: "Section B",
        src: "https://cdn.vuetifyjs.com/images/john.png",
        name: "Dinesh",
        subject: "English",
        strenght: "Strenght of class",
        present: "Student Present",
        abscent: "Student Abscent"
      },
      {
        title: "Section C",
        src: "https://cdn.vuetifyjs.com/images/john.png",
        name: "Kamal",
        subject: "C++",
        strenght: "Strenght of class",
        present: "Student Present",
        abscent: "Student Abscent"
      },
      {
        title: "Section D",
        src: "https://cdn.vuetifyjs.com/images/john.png",
        name: "Suraj",
        subject: "English",
        strenght: "Strenght of class",
        present: "Student Present",
        abscent: "Student Abscent"
      }
    ]
  })
});
</script>
