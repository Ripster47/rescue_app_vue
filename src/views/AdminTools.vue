<template>
  <div class="admin-tools">
    <div class="container">
      <div class="row">
        <div class="col-4"></div>
        <router-link class="col-4 btn mt-2 mb-2 btn-primary" :to="'/submissions/requests'" tag="button">Pending Applications</router-link>
        <div class="col-4"></div>
      </div>
      <div class="row">
        <div class="col-4"></div>
        <router-link class="col-4 btn mt-2 mb-2 btn-primary" :to="'/animals/new'" tag="button">New Adoptable</router-link>
        <div class="col-4"></div>
      </div>
    </div>
  </div>
</template>

<style>
</style>

<script>

import axios from "axios";
  
export default {
  data: function() {
    return {
    };
  },
  created: function() {
    
  },
  methods: {}
};
</script>
