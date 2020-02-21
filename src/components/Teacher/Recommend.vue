<template>
  <v-container>
    <form>
      <v-text-field
        outlined
        v-model="name"
        :error-messages="nameErrors"
        label="Name"
        required
      ></v-text-field>
      <v-text-field
        outlined
        v-model="mobile"
        :error-messages="nameErrors"
        :counter="10"
        label="mobile"
        required
        @input="$v.mobile.$touch()"
        @blur="$v.mobile.$touch()"
      ></v-text-field>
      <v-text-field
        outlined
        v-model="email"
        :error-messages="emailErrors"
        label="E-mail"
        required
        @input="$v.email.$touch()"
        @blur="$v.email.$touch()"
      ></v-text-field>

      <v-file-input
        v-model="files"
        color="deep-purple accent-4"
        multiple
        placeholder="Select your files"
        outlined
      ></v-file-input>

      <v-btn block rounded>Recommend</v-btn>
    </form>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Recommend",

  data: () => ({})
});
</script>
