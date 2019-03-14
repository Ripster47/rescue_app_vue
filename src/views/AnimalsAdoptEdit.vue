<template>
  <div class="animals-adopt">
    <div v-if="indicator">
      <form v-on:submit.prevent="submit()">
        <h1>Adoption Application</h1>
        <h3>Please update any information that may have changed and answer the following yes or no questions before proceeding!</h3>
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
          <h4>Your Home</h4>
        <div>
          <label>What type of residence are you currently occupying?</label>
          <select name="accommodations" id="accommodations" v-model="user.accommodations">
            <option>Apartment</option>
            <option>Condominium</option>
            <option>House</option>
            <option>Other</option>
          </select>
        </div>
        <div>
        </div>
        <div>
          <label>If you rent, will you be able to provide proof of your landlord’s approval or rental agreement stating it is allowable to have a pet?</label><br>
          <input type="radio" name="rent" value="true" v-model="user.rent">Yes<br>
          <input type="radio" name="rent" value="false" v-model="user.rent">No<br>
          <input type="radio" name="rent" value="false">I do not rent<br>
        </div>
        <div>
          <label>Do you currently have small children in your home?</label><br>
          <input type="radio" name="children" value="true" v-model="user.children">Yes<br>
          <input type="radio" name="children" value="false" v-model="user.children">No<br>
        </div>
          <h4>About You</h4>
          <div>
            <label>Are you 18 or older?</label><br>
            <input type="radio" name="adult" value="true" v-model="user.adult">Yes<br>
            <input type="radio" name="adult" value="false" v-model="user.adult">No<br>
          </div>
           <div>
            <label>Are you interested in volunteering with FoS?</label><br>
            <input type="radio" name="volunteer" value="true" v-model="user.volunteer">Yes<br>
            <input type="radio" name="volunteer" value="false" v-model="user.volunteer">No<br>
          </div>
           <div>
            <label>Are you interested in Fostering for FoS?</label><br>
            <input type="radio" name="foster" value="true" v-model="user.foster">Yes<br>
            <input type="radio" name="foster" value="false" v-model="user.foster">No<br>
          </div>
          <div>
            <label>Are you a member of USARK?</label><br>
            <input type="radio" name="usark" value="true" v-model="user.usark">Yes<br>
            <input type="radio" name="usark" value="false" v-model="user.usark">No<br>
          </div>
          <div>
            <label>Do you have access to a veterinarian willing to work with exotic animals?</label><br>
            <input type="radio" name="exotic_vet" value="true" v-model="user.exotic_vet">Yes<br>
            <input type="radio" name="exotic_vet" value="false" v-model="user.exotic_vet">No<br>
          </div>
          <div>
            <label>Have you ever owned a reptile, amphibian, or invertebrate before?</label><br>
            <input type="radio" name="ever_owned" value="true" v-model="user.ever_owned">Yes<br>
            <input type="radio" name="ever_owned" value="false" v-model="user.ever_owned">No<br>
          </div>
          <div>
             <h4>Adoption Details</h4>
          </div>
          <div>
            <label>Do you agree to seek veterinary care for your animal if an illness or injury were to occur?</label><br>
            <input type="radio" name="care" value="true" v-model="user.care">Yes<br>
            <input type="radio" name="care" value="false" v-model="user.care">No<br>
          </div>
           <div>
            <label>Do you agree to present a permit if the animal you are adopting requires one?</label><br>
            <input type="radio" name="permit" value="true" v-model="user.permit">Yes<br>
            <input type="radio" name="permit" value="false" v-model="user.permit">No<br>
          </div>
          <div>
            <label>Do you have a provision for your (future) pet in place should something happen to you?</label><br>
            <input type="radio" name="provisions" value="true" v-model="user.provisions">Yes<br>
            <input type="radio" name="provisions" value="false" v-model="user.provisions">No<br>
          </div>
          <div>
            <label>Would you like Friends of Scales to send information on creating a bequest?</label><br>
            <input type="radio" name="bequest" value="true" v-model="user.bequest">Yes<br>
            <input type="radio" name="bequest" value="false" v-model="user.bequest">No<br>
          </div>
        <input type="submit" value="Submit">
      </form>
    </div>
    <div v-else>
      <h2>Adopt form goes here</h2>
      <form>
        <div>
        <label>Click Below!</label>
        <button v-on:click="createSubmission()">ADOPT!</button>
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
      indicator: true
    };
  },
  created: function() {
    axios.get("/api/users/" + this.$route.params.id)
    .then(response => {
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
          this.$router.push("/animals/" + this.user.id + '/adopt');
        })
        .catch(error => {
          this.errors = error.response.data.errors;
        });
        var indicator = new Boolean(true)
        this.indicator = !this.indicator
    },
      submissionCreate: function() {
        var params = {
                      animal_id: this.$route.params.id,
                      purpose: "adoption"
                      };
      axios.post( "/api/submissions", params)
      .then(response => {
        console.log("Your adoption is now pending review!", response.data);
        this.$router.push('/success');
      }).catch(error => {
        this.errors = error.response.data.errors
      });
    }
  }
}
</script>
