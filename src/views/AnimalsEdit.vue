<template>
  <div class="animals-edit">
    <h1>Edit Adoptable</h1>
    <ul>
      <li v-for="error in errors">{{ error }}</li>
    </ul>
    <form v-on:submit.prevent="submit()">
      <div>
        Name: <input v-model="animal.name">
      </div>
      <div>
        Species: <input v-model="animal.species">
      </div>
      <div>
        Adoptable: <input v-model="animal.adoptable">
      </div>
      <div>
        Gender: <input v-model="animal.gender">
      </div>
      <div>
        Age: <input v-model="animal.age">
      </div>
      <div>
        Medical Status: <input v-model="animal.medical_status">
      </div>
      <div>
        Description: <input v-model="animal.description">
      </div>
       <div>
        Adoption Donation: <input v-model="animal.donation">
      </div>
      <div>
        Image URL: <input v-model="animal.image_url">
      </div>
      <input type="submit" value="Update">
    </form>
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
                donation: "",
                image_url: ""
                },
                errors: []
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
    submit: function() {
      var params = {
                    name: this.animal.name,
                    species: this.animal.species,
                    adoptable: this.animal.adoptable,
                    gender: this.animal.gender,
                    age: this.animal.age,
                    description: this.animal.description,
                    medical_status: this.animal.medical_status,
                    donation: this.animal.medical_status,
                    image_url: this.animal.image_url
                    };
      axios.patch( "/api/animals/" + this.animal.id, params )
      .then(response => {
        this.$router.push("/animals/" + this.animal.id);
      }).catch(error => {
        this.errors = error.response.data.errors;
      });                  
    }
  }
}
</script>
