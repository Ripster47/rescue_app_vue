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
    localStorage.setItem( "exp", this.$route.params.time_out);
    localStorage.setItem( "rtg", this.$route.params.rt_google);
    localStorage.setItem( "time", this.$route.params.timestamp);
    console.log(this.$route.params.timestamp);
    this.$router.push("/submission/requests")
  },
  methods: {}
};
</script>
