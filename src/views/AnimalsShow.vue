
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
    <router-link class="btn-primary mr-2 ml-2 rounded pr-2 pl-2" :to="'/animals/' + animal.id + '/adopt'" tag="button">Adopt Me!</router-link>
    <router-link class="btn-warning mr-2 ml-2 rounded pr-2 pl-2" :to="'/animals/' + animal.id + '/edit'" tag="button">Edit</router-link>
    <button class="btn-danger mr-2 ml-2 rounded pr-2 pl-2" v-on:click="destroyAnimal()">Delete</button>
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
      },
      destroyAnimal: function() {
        axios.delete("/api/animals/" + this.animal.id)
        .then(response => {
          console.log("Success", response.data);
          this.$router.push("/");
        });
      }
  }
};
</script>
