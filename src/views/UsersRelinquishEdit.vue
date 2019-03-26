<template>
  <div class="users-relinquish">
    <div class="container">
      <div v-if="indicator">
        <form v-on:submit.prevent="submit()">
          <h1 class="text-center pt-4 pb-4">Relinquishment Application</h1>
          <p class="pb-4">If you have not CREATED A PROFILE you must do so before you attempt to relinquish an animal. If you have, please update any information that may have changed and answer the following questions before proceeding</p>
          <ul>
            <li v-for="error in errors">{{ error }}</li>
          </ul>
          <div class="row">
            <div class="form-group col-md-6">
              <input type="text" class="form-control" aria-describedby="userName" placeholder="First Name" v-model="user.first_name">
            </div>
            <div class="form-group col-md-6">
              <input type="text" class="form-control"  aria-describedby="userName" placeholder="Last Name" v-model="user.last_name">
            </div>
            <div class="form-group col-md-6">
              <input type="email" class="form-control" aria-describedby="emailHelp" placeholder="Email" v-model="user.email">
            </div>
            <div class="form-group col-md-6">
              <input type="text" class="form-control"  placeholder="Phone" v-model="user.phone_number">
            </div>
            <div class="form-group col-md-6">
              <input type="text" class="form-control"  placeholder="Home Address" v-model="user.address_1">
            </div>
            <div class="form-group col-md-6">
            </div>
            <div class="form-group col-md-6">
              <input type="text" class="form-control" placeholder="Apt #, Suite, Etc." v-model="user.address_2">
            </div>
            <div class="form-group col-md-6">
              <input type="text" class="form-control" placeholder="City" v-model="user.city">
            </div>
            <div class="form-group col-md-6">
              <input type="text" class="form-control" placeholder="State Ex. NY, MA, FL" v-model="user.state">
            </div>
            <div class="form-group col-md-6">
              <input type="text" class="form-control" placeholder="Zip Code Ex 90210" v-model="user.zip_code">
            </div>
            <div class="form-group col-md-6 pb-4">
              <label>What type of animal are you looking to relinquish?</label>
            <div>
              <input class="form-group col-md-6" type="text" v-model="newAnimalType">
            </div>
            </div>
            <div class="form-group col-md-6">
            </div>
            <div class="form-group col-md-6">
              <label>What is the reason for relinquishment?</label>
            <div class="pb-4">
              <textarea cols="50" rows="5" v-model="newRelinquishReason"></textarea>
            </div>
            </div>
          </div>
          <input type="submit" class="btn btn-primary" value="Submit">
        </form>
      </div>
      <div v-else>
        <h2 class="text-center pt-4 pb-4">Relinquishment Confirmation</h2>
          <form>
            <div class="row">
              <div class="col-5"></div>
              <button class="col-2 btn btn-primary" v-on:click.prevent="createSubmission()">RELINQUISH!</button>
              <div class="col-5"></div>
            </div>
          </form>
        </div>
      </div>
    </div>
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
      user: {
              first_name: "",
              last_name: "",
              email: "",
              phone_number: "",
              address_1: "",
              address_2: "",
              city: "",
              state: "",
              zip_code: "",
              accommodations: "",
              rent: "",
              children: "",
              adult: "",
              volunteer: "",
              foster: "",
              usark: "",
              exotic_vet: "",
              ever_owned: "",
              care: "",
              provisions: "",
              bequest: "",
              permit: "",
            },
      errors: [],
      indicator: true,
      newAnimalType: "",
      newRelinquishReason: ""
    };
  },
  created: function() {
    axios.get("/api/users/current")
    .then(response => {
      console.log(response.data);
      this.user = response.data;
    });
  },
  methods: {
      submit: function() {
        console.log("submit...")
        var params = {
                      first_name: this.user.first_name,
                      last_name: this.user.last_name,
                      email: this.user.email,
                      phone_number: this.user.phone_number,
                      address_1: this.user.address_1,
                      address_2: this.user.address_2,
                      city: this.user.city,
                      state: this.user.state,
                      zip_code: this.user.zip_code,
                      rent: this.user.rent,
                      children: this.user.children,
                      adult: this.user.adult,
                      volunteer: this.user.volunteer,
                      foster: this.user.foster,
                      usark: this.user.usark,
                      exotic_vet: this.user.exotic_vet,
                      ever_owned: this.user.ever_owned,
                      care: this.user.care,
                      provisions: this.user.provisions,
                      bequest: this.user.bequest,
                      accommodations: this.user.accommodations,
                      permit: this.user.permit
                    };
      axios.patch( "/api/users/" + this.user.id, params )
      .then(response => {
        this.indicator = false;
      }).catch(error => {
        this.errors = error.response.data.errors;
      });
    },
    createSubmission: function() {
      var params = {
                    purpose: "relinquishment",
                    relinquish_reason: this.newRelinquishReason,
                    animal_type: this.newAnimalType
                    };
      axios.post( "/api/submissions", params)
      .then(response => {
        console.log("Your relinquishment is now pending review!", response.data);
        this.$router.push('/');
      }).catch(error => {
        this.errors = error.response.data.errors
      });
    }
  }
}
</script>
