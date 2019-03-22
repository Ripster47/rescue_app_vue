<template>
  <div class="catch">
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
      message: "Welcome to Catch!"
    };
  },
  created: function() {
    localStorage.setItem( "atg", this.$route.params.at_google);
    localStorage.setItem( "exp", this.$route.params.exp_time);
    localStorage.setItem( "rtg", this.$route.params.rt_google);
    this.$router.push("/submissions/requests")
  },
  methods: {}
};
</script>
