<template>
  <div class="signup">
    <div class="container">
      <form v-on:submit.prevent="submit()">
        <h1>Create Your Profile!</h1>
        <h3>Here, we will gather all of the information needed in order for you to adopt/relinquish an animal, from here forward you will be offered the chance to edit your information, but wont have to fill this out fully again.</h3>
        <ul>
          <li class="text-danger" v-for="error in errors">{{ error }}</li>
        </ul>
        <div class="form-group">
          <label>First Name:</label> 
          <input type="text" class="form-control" v-model="firstName">
        </div>
         <div class="form-group">
          <label>Last Name:</label> 
          <input type="text" class="form-control" v-model="lastName">
        </div>
        <div class="form-group">
          <label>Email:</label>
          <input type="email" class="form-control" v-model="email">
        </div>
        <div class="form-group">
          <label>Password:</label>
          <input type="password" class="form-control" v-model="password">
        </div>
        <div class="form-group">
          <label>Password confirmation:</label>
          <input type="password" class="form-control" v-model="passwordConfirmation">
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
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      passwordConfirmation: "",
      errors: []
          };
        },
        methods: {
          submit: function() {
            var params = {
              first_name: this.firstName,
              last_name: this.lastName,
              email: this.email,
              password: this.password,
              password_confirmation: this.passwordConfirmation
            };
            axios
              .post("/api/users", params)
              .then(response => {
                this.$router.push("/login");
              })
              .catch(error => {
                this.errors = error.response.data.errors;
              });
          }
        }
      };
</script>