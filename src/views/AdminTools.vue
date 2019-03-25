<template>
  <div class="about">
    <h1>{{ message }}</h1>
  </div>
</template>

<style>
</style>

<script>

import axios from "axios";
  
export default {
  data: function() {
    return {
      message: "Welcome to About!"
    };
  },
  created: function() {
    
  },
  methods: {}
};
</script>
