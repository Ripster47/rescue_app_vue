<template>
  <div class="login">
    <div class="container">
      <div class="row">
      <div class="col-4">
      </div>
        <div class="col-4">
          <form class="text-center" v-on:submit.prevent="submit()">
            <h1 class="pt-4 pb-4 text-center">Login</h1>
            <ul>
              <li class="text-danger" v-for="error in errors">{{ error }}</li>
            </ul>
            <div class="form-group">
              <label>Email:</label>
              <input type="email" class="form-control" v-model="email">
            </div>
            <div class="form-group">
              <label>Password:</label>
              <input type="password" class="form-control" v-model="password">
            </div>
            <input type="submit" class="btn btn-primary" value="Submit">
          </form>
        <div class="col-4">
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
  template: "#login-page",
  data: function() {
    return {
      email: "",
      password: "",
      errors: []
    };
  },
  methods: {
    submit: function() {
      var params = {
        email: this.email,
        password: this.password
      };
      axios
        .post("/api/sessions", params)
        .then(response => {
          axios.defaults.headers.common["Authorization"] =
            "Bearer " + response.data.jwt;
          localStorage.setItem("jwt", response.data.jwt);
          this.$router.push("/");
        })
        .catch(error => {
          this.errors = ["Invalid email or password."];
          this.email = "";
          this.password = "";
        });
    }
  }
};
</script>