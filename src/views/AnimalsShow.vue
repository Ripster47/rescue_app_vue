
<template>
  <div class="animals-show">
    <h1>{{ animal.name }}</h1>
    <img v-bind:src="animal.image_url" v-bind:alt="animal.name">
    <h3>Species: {{ animal.species }}</h3>
    <h3>Availability Status: {{ yesOrNo() }}</h3>
    <h3>Gender: {{ animal.gender }}</h3>
    <h3>Age: {{ animal.age }}</h3>
    <h3>Description: {{animal.description}}</h3>
    <h3>Medical Status: {{ animal.medical_status}}</h3>
    <h3>Adoption Donation: {{ animal.donation }}</h3>
  </div>
</template>

<style>
</style>

<script>

import axios from "axios";
  
export default {
    data: function() {
      return {
        animal: {
                name: "",
                species: "",
                description: "",
                adoptable: "",
                medical_status: "",
                gender: "",
                age: "",
                donation: ""
                }
      };
    },
    created: function() {
      axios.get("/api/animals/" + this.$route.params.id)
      .then(response => {
        console.log(response.data);
        this.animal = response.data;
      });
    },
    methods: {
      yesOrNo: function() {
        var answer = ""
        if (this.animal.adoptable === true) {
            answer = "Ready to find a home!";
        } else {
            answer = "Still recovering, check back soon!";
        }
        return answer
      }
  }
};
</script>
