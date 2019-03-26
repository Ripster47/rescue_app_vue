<template>
  <div class="animals-new">
    <div class="container">
      <form v-on:submit.prevent="submit()">
        <h1 class=" text-center pb-5">New Adoptable!</h1>
          <ul>
            <li v-for="error in errors">{{ error }}</li>
          </ul>
          <div class="row">
            <div class="form-group col-md-4"></div>
            <div class="form-group col-md-4">
              <input type="text" class="form-control" placeholder="Animal Name" v-model="newAnimalName">
            </div>
            <div class="form-group col-md-4"></div>
            <div class="form-group col-md-4"></div>
            <div class="form-group col-md-4">
              <input type="text" class="form-control" placeholder="Species" v-model="newAnimalSpecies">
            </div>
            <div class="form-group col-md-4"></div>
            <div class="form-group col-md-4"></div>
            <div class="form-group col-md-4">
              <input type="text" class="form-control" placeholder="Adoptable?" v-model="newAnimalAdoptable">
            </div>
            <div class="form-group col-md-4"></div>
            <div class="form-group col-md-4"></div>
            <div class="form-group col-md-4">
              <input type="text" class="form-control" placeholder="Male/Female" v-model="newAnimalGender">
            </div>
            <div class="form-group col-md-4"></div>
            <div class="form-group col-md-4"></div>
            <div class="form-group col-md-4">
              <input type="text" class="form-control" placeholder="Age" v-model="newAnimalAge">
            </div>
            <div class="form-group col-md-4"></div>
            <div class="form-group col-md-4"></div>
            <div class="form-group col-md-4">
              <input type="text" class="form-control" placeholder="Medical Status" v-model="newAnimalMedicalStatus">
            </div>
            <div class="form-group col-md-4"></div>
            <div class="form-group col-md-4"></div>
            <div class="form-group col-md-4">
              <input type="text" class="form-control" placeholder="Description" v-model="newAnimalDescription">
            </div>
            <div class="form-group col-md-4"></div>
            <div class="form-group col-md-4"></div>
            <div class="form-group col-md-4">
              <input type="text" class="form-control" placeholder="Donation" v-model="newAnimalDonation">
            </div>
            <div class="form-group col-md-4"></div>
            <div class="form-group col-md-4"></div>
            <div class="form-group col-md-4">
              <input type="text" class="form-control" placeholder="Image URL" v-model="newAnimalImageUrl">
            </div>
            <div class="form-group col-md-4"></div>
            <div class="form-group col-md-5"></div>
            <input class="btn btn-primary col-md-2" type="submit" value="Create">
            <div class="form-group col-md-5"></div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>

import axios from "axios";
  
export default {
  data: function() {
    return {
            newAnimalName: "",
            newAnimalSpecies: "",
            newAnimalAdoptable: "",
            newAnimalGender: "",
            newAnimalAge: "",
            newAnimalDescription: "",
            newAnimalMedicalStatus: "",
            newAnimalDonation: "",
            newAnimalImageUrl: "",
            errors: []
            };
  },
  created: function() {},
  methods: {
    submit: function() {
      console.log("Add New Adoptable");
    var params = {
                  name: this.newAnimalName,
                  species: this.newAnimalSpecies,
                  adoptable: this.newAnimalAdoptable,
                  gender: this.newAnimalGender,
                  age: this.newAnimalAge,
                  description: this.newAnimalDescription,
                  medical_status: this.newAnimalMedicalStatus,
                  Donation: this.newAnimalDonation,
                  image_url: this.newAnimalImageUrl
                  };
    axios.post("/api/animals", params)
      .then(response => {
        console.log("Success", response.data);
        this.$router.push("/");
      }).catch(error => {
        this.errors = error.response.data.errors;
      });
    }
  }
};
</script>
