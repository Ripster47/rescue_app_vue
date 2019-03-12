<template>
  <div class="animals-index">
    <div v-for="animal in animals">
      <h1>{{animal.name}}</h1>
      <router-link v-bind:to="'/animals/' + animal.id">
        <img v-bind:src="animal.image_url" v-bind:alt="animal.name">
      </router-link>
    </div>
  </div>
</template>

<style>
img{
  width: 250px;
}
</style>

<script>

import axios from "axios";
  
export default {
  data: function() {
    return {
      animals: []
    };
  },
  created: function() {
    axios.get("/api/animals")
    .then(response => {
      this.animals = response.data;
    });

  },
  methods: {}
};
</script>