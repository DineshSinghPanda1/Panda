<template>
  <v-app>
    <!-- <Marksheet /> -->
    <Syllabus />
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";

//import Cards from "./components/Parent/Cards.vue";
//import Marks from "./components/Parent/Marks.vue";
//import Mesh from "./components/Parent/Mesh.vue";
//import Marksheet from "./components/Parent/Marksheet.vue";
//import TCReq from "./components/Parent/TCReq.vue";
//import Navbar from "./components/Parent/Navbar.vue";
//import Appointment from "./components/Parent/Appointment.vue";

import Syllabus from "./components/Teacher/Syllabus.vue";
//import Application from "./components/Teacher/Application.vue";
//import Recommend from "./components/Teacher/Recommend.vue";
//import Test from "./components/Parent/Test.vue";

export default Vue.extend({
  name: "App",

  components: {
    //Cards
    //Mesh
    //Marksheet
    // Mesh
    //Marksheet,
    // TCReq
    //Appointment
    //Application
    //Navbar
    //Recommend
    Syllabus
    // Test
  },

  data: () => ({
    //
  })
});
</script>
