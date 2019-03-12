<template>
  <div class="logout">
    <h1>{{ message }}</h1>
  </div>
</template>

<style>
</style>

<script>

import axios from "axios";
  

export default {
  created: function() {
    delete axios.defaults.headers.common["Authorization"];
    localStorage.removeItem("jwt");
    this.$router.push("/animals");
  }
};
</script>