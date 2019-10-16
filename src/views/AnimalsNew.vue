<template>
  <div class="animals-new">
    <div class="container">
      <form v-on:submit.prevent="submit()">
        <h1 class=" text-center pt-4 pb-4">New Adoptable</h1>
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
              <input type="text" class="form-control" placeholder="Adoptable? (true or false)" v-model="newAnimalAdoptable">
            </div>
            <div class="form-group col-md-4"></div>
            <div class="form-group col-md-4"></div>
            <div class="form-group col-md-4">
              <input type="text" class="form-control" placeholder="Male/Female (capitalized)" v-model="newAnimalGender">
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
            <div class="form-group col-md-4"></div>
            <div class="form-group col-md-4">
              <input type="file" class="form-control" placeholder="Image URL" v-on:change="setFile($event)" ref="fileInput">
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
            photo: "",
            errors: []
            };
  },
  created: function() {},
  methods: {
    setFile: function(event) {
      if (event.target.files.length > 0) {
        this.photo = event.target.files[0];
      }
    },
    submit: function() {
      console.log("Add New Adoptable");
    var params = new FormData();
      params.append("name", this.newAnimalName);
      params.append("species", this.newAnimalSpecies);
      params.append("adoptable", this.newAnimalAdoptable);
      params.append("gender", this.newAnimalGender);
      params.append("age", this.newAnimalAge);
      params.append("description", this.newAnimalDescription);
      params.append("medical_status", this.newAnimalMedicalStatus);
      params.append("donation", this.newAnimalDonation);
      params.append("image_url", this.newAnimalImageUrl);
      params.append("photo", this.photo);

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
