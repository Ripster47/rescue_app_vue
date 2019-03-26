<template>
  <div class="animals-edit">
    <div class="container">
      <form v-on:submit.prevent="submit()">
        <h1 class=" text-center pb-5">Edit {{animal.name}}</h1>
          <ul>
            <li v-for="error in errors">{{ error }}</li>
          </ul>
          <div class="row">
            <div class="form-group col-md-4"></div>
            <div class="form-group col-md-4">
              <input type="text" class="form-control" v-model="animal.name">
            </div>
            <div class="form-group col-md-4"></div>
            <div class="form-group col-md-4"></div>
            <div class="form-group col-md-4">
              <input type="text" class="form-control" v-model="animal.species">
            </div>
            <div class="form-group col-md-4"></div>
            <div class="form-group col-md-4"></div>
            <div class="form-group col-md-4">
              <input type="text" class="form-control" v-model="animal.adoptable">
            </div>
            <div class="form-group col-md-4"></div>
            <div class="form-group col-md-4"></div>
            <div class="form-group col-md-4">
              <input type="text" class="form-control" v-model="animal.gender">
            </div>
            <div class="form-group col-md-4"></div>
            <div class="form-group col-md-4"></div>
            <div class="form-group col-md-4">
              <input type="text" class="form-control" v-model="animal.age">
            </div>
            <div class="form-group col-md-4"></div>
            <div class="form-group col-md-4"></div>
            <div class="form-group col-md-4">
              <input type="text" class="form-control" v-model="animal.medical_status">
            </div>
            <div class="form-group col-md-4"></div>
            <div class="form-group col-md-4"></div>
            <div class="form-group col-md-4">
              <input type="text" class="form-control" v-model="animal.description">
            </div>
            <div class="form-group col-md-4"></div>
            <div class="form-group col-md-4"></div>
            <div class="form-group col-md-4">
              <input type="text" class="form-control" v-model="animal.donation">
            </div>
            <div class="form-group col-md-4"></div>
            <div class="form-group col-md-4"></div>
            <div class="form-group col-md-4">
              <input type="text" class="form-control" v-model="animal.image_url">
            </div>
            <div class="form-group col-md-4"></div>
            <div class="form-group col-md-5"></div>
            <input class="btn btn-primary col-md-2" type="submit" value="Update">
            <div class="form-group col-md-5"></div>
          </div>
        </form>
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
                    donation: this.animal.donation,
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
