<template>
  <div class="submissions-pending">
    <div v-for="submission in submissions">
      <h2>{{submission.purpose}}</h2>
      <h4>{{submission.user_id}}</h4>
      <h4>{{submission.animal_id}}</h4>
      <h4>{{submission.status}}</h4>
      <h4>{{submission.animal_type}}</h4>
      <h4>{{submission.relinquish_reason}}</h4>
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
      submissions: []
    };
  },
  created: function() {
    axios.get("/api/submissions/requests")
    .then(response => {
      this.submissions = response.data;
    });

  },
  methods: {}
};
</script>