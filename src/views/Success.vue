<template>
  <div class="success">
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
      message: "Yeah Yeah Buddy!"
    };
  },
  created: function() {},
  methods: {}
};
</script>
