<template>
  <div class="submissions-pending">
    <div v-for="submission in submissions">
      <h1>{{submission.formatted.purpose}}</h1>
      <img v-if="submission.animal" v-bind:src="submission.animal.image_url">
      <p>Name: {{submission.user.first_name}} {{submission.user.last_name}}</p>
      <p v-if="submission.animal">Would like to adopt: {{submission.animal.name}}</p>
      <p>Address: {{submission.user.address_1}} {{submission.user.address_2}}</p>
      <p>City: {{submission.user.city}} State: {{submission.user.state}} Zip: {{submission.user.zip_code}}</p>
      <p>Email: {{submission.user.email}}</p>
      <p>Phone Number: {{submission.user.phone_number}}</p>
      <p>{{submission.animal_type}}</p>
      <p>{{submission.relinquish_reason}}</p>
    </div>
  </div>
</template>

<style>
img{
  width: 200px;
}
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