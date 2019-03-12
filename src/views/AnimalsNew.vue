
<template>
  <div class="animals-new">
    <h1>New Adoptable!</h1>
    <ul>
      <li v-for="error in errors">{{ error }}</li>
    </ul>
    <form v-on:submit.prevent="submit()">
      <div>
        Name: <input v-model="newAnimalName">
      </div>
      <div>
        Species: <input v-model="newAnimalSpecies">
      </div>
      <div>
        Adoptable: <input v-model="newAnimalAdoptable">
      </div>
      <div>
        Gender: <input v-model="newAnimalGender">
      </div>
      <div>
        Age: <input v-model="newAnimalAge">
      </div>
      <div>
        Medical Status: <input v-model="newAnimalMedicalStatus">
      </div>
      <div>
        Description: <input v-model="newAnimalDescription">
      </div>
       <div>
        Adoption Donation: <input v-model="newAnimalDonation">
      </div>
      <div>
        Image URL: <input v-model="newAnimalImageUrl">
      </div>
      <input type="submit" value="Create">
    </form>
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
