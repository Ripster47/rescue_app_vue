<template>
  <div class="goodbye">
    <h1>{{ message }}</h1>
    <router-link to="/">Home</router-link> 
  </div>
</template>

<style>
</style>

<script>

import axios from "axios";
  
export default {
  data: function() {
    return {
      message: "You have been successfully logged out!"
    };
  },
  created: function() {},
  methods: {}
};
</script>