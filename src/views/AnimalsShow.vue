<template>
  <div class="animals-show">
    <div class="container">
      <div class="row">
        <router-link class="col-1 btn btn-primary mt-2" :to="'/animals/'" tag="button">back</router-link>
        <h1 class="col-10 text-center pt-4 pb-4">{{ animal.name }} the {{ animal.species }}</h1>
      </div>
      <div class="row">
        <div class="col-3"></div>
        <div class="image_container col-6 pb-4">
          <img class="image_bordered" v-bind:src="animal.photo" alt="gallery">
        </div>
        <div class="col-3"></div>
      </div>
      <div class="row">
        <div class="col-3"></div>
        <div class="col-6 text-center ">
          <h4 class="pb-3"><strong>Description:</strong> <span class="des"> {{animal.description}}</span></h4>
          <h4 class="pb-3"><strong>Availability Status:</strong> <span class="adpt"> {{ yesOrNo() }}</span></h4>
          <h4 class="pb-3"><strong>Age:</strong> <span> {{ animal.age }} years old</span></h4>
          <h4 class="pb-3"><strong>Gender:</strong> <span> {{ animal.gender }}</span></h4>
          <h4 class="pb-3"><strong>Medical Status:</strong> <span> {{ animal.medical_status}}</span></h4>
          <h4 class="pb-3"><strong>Adoption Donation:</strong> <span> {{ animal.formatted.donation }}</span></h4>
          <router-link class="btn btn-primary mr-3" :to="'/animals/' + animal.id + '/adopt'" tag="button">Adopt Me!</router-link>
          <router-link class="btn btn-warning ml-3 mr-3" :to="'/animals/' + animal.id + '/edit'" tag="button">Edit</router-link>
          <button class="btn btn-danger ml-3" v-on:click="destroyAnimal()">Delete</button>
        </div>
        <div class="col-3"></div>
      </div>
    </div>
  </div>
</template>

<style>
img.image_bordered{
  width: 700px;
}

span{
  font-size: 95%;
}
span.des{
  font-size: 85%;
}
span.adpt{
  font-size: 85%;
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
                formatted: "",
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
            answer = "Adoptable!";
        } else {
            answer = "Still recovering!";
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
