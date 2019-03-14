<template>
  <div class="users-relinquish">
    <div>
      <form v-on:submit.prevent="submit()">
        <h1>Relinquish Application
        </h1>
        <h3>Please update any information that may have changed and answer the following questions before proceeding!</h3>
        <ul>
          <li v-for="error in errors">{{ error }}</li>
        </ul>
        <div>
          <label>First Name:</label> 
          <input type="text" v-model="user.first_name">
        </div>
         <div>
          <label>Last Name:</label> 
          <input type="text" v-model="user.last_name">
        </div>
        <div>
          <label>Email:</label>
          <input type="email" v-model="user.email">
        </div>
        <div>
          <label>Phone Number:</label>
          <input type="text" v-model="user.phone_number">
        </div>
        <div>
          <label>Address 1:</label>
          <input type="text" v-model="user.address_1">
        </div>
         <div>
          <label>Address 2:</label>
          <input type="text" v-model="user.address_2">
        </div>
        <div>
          <label>City:</label>
          <input type="text" v-model="user.city">
        </div>
        <div>
          <label>State:</label>
          <input type="text" v-model="user.state">
        </div>
        <div>
          <label>Zip Code:</label>
          <input type="text" v-model="user.zip_code">
        </div>
        <br>
        <div>
          <label>Animal you wish to relinquish?</label>
          <input type="text">
        </div>
        <br>
        <div>
          <label>What is the reason for relinquishment?</label>
          <div>
          <textarea cols="50" rows="5"></textarea>
          </div>
        </div>
        <input type="submit" class="btn btn-primary" value="Submit">
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
              errors: [] 
    };
  },
  created: function() {
    axios.get("/api/users/" + this.$route.params.id)
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
        this.$router.push("/users/" + this.user.id);
      }).catch(error => {
        this.errors = error.response.data.errors;
      });
    }
  }
}
</script>
