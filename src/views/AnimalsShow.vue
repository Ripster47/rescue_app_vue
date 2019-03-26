<template>
  <div class="animals-show">
    <div class="container">
      <div class="row">
        <h1 class="col-12 text-center pb-4">{{ animal.name }} the {{ animal.species }}</h1>
      </div>
      <div class="row">
        <div class="col-3"></div>
        <div class="image_container col-6 pb-4">
          <img class="image_bordered" v-bind:src="animal.image_url" alt="gallery">
        </div>
        <div class="col-3"></div>
      </div>
      <div class="row">
        <div class="col-2"></div>
        <div class="col-8 text-center">
          <h3 class="pb-3">Age: {{ animal.age }}</h3>
          <h3 class="pb-3">Gender: {{ animal.gender }}</h3>
          <h3 class="pb-3">Description: {{animal.description}}</h3>
          <h3 class="pb-3">Availability Status: {{ yesOrNo() }}</h3>
          <h3 class="pb-3">Medical Status: {{ animal.medical_status}}</h3>
          <h3 class="pb-3">Adoption Donation: {{ animal.donation }}</h3>
          <router-link class="btn btn-primary mr-3" :to="'/animals/' + animal.id + '/adopt'" tag="button">Adopt Me!</router-link>
          <router-link class="btn btn-warning ml-3 mr-3" :to="'/animals/' + animal.id + '/edit'" tag="button">Edit</router-link>
          <button class="btn btn-danger ml-3" v-on:click="destroyAnimal()">Delete</button>
        </div>
        <div class="col-2"></div>
      </div>
    </div>
  </div>
</template>

<style>
img.image_bordered{
  width: 700px;
}
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
