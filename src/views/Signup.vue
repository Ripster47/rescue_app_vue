<template>
  <div class="signup">
    <div>
      <form v-on:submit.prevent="submit()">
        <h1>Create Your Profile!</h1>
        <h3>Here, we will gather all of the information needed in order for you to adopt/relinquish an animal, from here forward you will be offered the chance to edit your information, but wont have to fill this out fully again.</h3>
        <ul>
          <li v-for="error in errors">{{ error }}</li>
        </ul>
        <div>
          <label>First Name:</label> 
          <input type="text" v-model="firstName">
        </div>
         <div>
          <label>Last Name:</label> 
          <input type="text" v-model="lastName">
        </div>
        <div>
          <label>Email:</label>
          <input type="email" v-model="email">
        </div>
        <div>
          <label>Password:</label>
          <input type="password" v-model="password">
        </div>
        <div>
          <label>Password confirmation:</label>
          <input type="password" v-model="passwordConfirmation">
        </div>
        <div>
          <label>Phone Number:</label>
          <input type="text" v-model="phoneNumber" placeholder="XXXXXXXXXX"> (Just numbers, no symbols!) 
        </div>
        <div>
          <label>Address 1:</label>
          <input type="text" v-model="address1">
        </div>
         <div>
          <label>Address 2:</label>
          <input type="text" v-model="address2">
        </div>
        <div>
          <label>City:</label>
          <input type="text" v-model="city">
        </div>
        <div>
          <label>State:</label>
          <input type="text" v-model="state">
        </div>
        <div>
          <label>Zip Code:</label>
          <input type="text" v-model="zipCode">
        </div>
          <h4>Your Home</h4>
        <div>
          <label>What type of residence are you currently occupying?</label>
          <select name="accommodations" id="accommodations" v-model="accommodations">
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
          <input type="radio" name="rent" value="true" v-model="rent">Yes<br>
          <input type="radio" name="rent" value="false" v-model="rent">No<br>
          <input type="radio" name="rent" value="false">I do not rent<br>
        </div>
        <div>
          <label>Do you currently have small children in your home?</label><br>
          <input type="radio" name="children" value="true" v-model="children">Yes<br>
          <input type="radio" name="children" value="false" v-model="children">No<br>
        </div>
          <h4>About You</h4>
          <div>
            <label>Are you 18 or older?</label><br>
            <input type="radio" name="adult" value="true" v-model="adult">Yes<br>
            <input type="radio" name="adult" value="false" v-model="adult">No<br>
          </div>
           <div>
            <label>Are you interested in volunteering with FoS?</label><br>
            <input type="radio" name="volunteer" value="true" v-model="volunteer">Yes<br>
            <input type="radio" name="volunteer" value="false" v-model="volunteer">No<br>
          </div>
           <div>
            <label>Are you interested in Fostering for FoS?</label><br>
            <input type="radio" name="foster" value="true" v-model="foster">Yes<br>
            <input type="radio" name="foster" value="false" v-model="foster">No<br>
          </div>
          <div>
            <label>Are you a member of USARK?</label><br>
            <input type="radio" name="usark" value="true" v-model="usark">Yes<br>
            <input type="radio" name="usark" value="false" v-model="usark">No<br>
          </div>
          <div>
            <label>Do you have access to a veterinarian willing to work with exotic animals?</label><br>
            <input type="radio" name="exotic_vet" value="true" v-model="exoticVet">Yes<br>
            <input type="radio" name="exotic_vet" value="false" v-model="exoticVet">No<br>
          </div>
          <div>
            <label>Have you ever owned a reptile, amphibian, or invertebrate before?</label><br>
            <input type="radio" name="ever_owned" value="true" v-model="everOwned">Yes<br>
            <input type="radio" name="ever_owned" value="false" v-model="everOwned">No<br>
          </div>
          <div>
             <h4>Adoption Details</h4>
          </div>
          <div>
            <label>Do you agree to seek veterinary care for your animal if an illness or injury were to occur?</label><br>
            <input type="radio" name="care" value="true" v-model="care">Yes<br>
            <input type="radio" name="care" value="false" v-model="care">No<br>
          </div>
           <div>
            <label>Do you agree to present a permit if the animal you are adopting requires one?</label><br>
            <input type="radio" name="permit" value="true" v-model="permit">Yes<br>
            <input type="radio" name="permit" value="false" v-model="permit">No<br>
          </div>
          <div>
            <label>Do you have a provision for your (future) pet in place should something happen to you?</label><br>
            <input type="radio" name="provisions" value="true" v-model="provisions">Yes<br>
            <input type="radio" name="provisions" value="false" v-model="provisions">No<br>
          </div>
          <div>
            <label>Would you like Friends of Scales to send information on creating a bequest?</label><br>
            <input type="radio" name="bequest" value="true" v-model="bequest">Yes<br>
            <input type="radio" name="bequest" value="false" v-model="bequest">No<br>
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
            phoneNumber: "",
            address1: "",
            address2: "",
            city: "",
            state: "",
            zipCode: "",
            accommodations: "",
            rent: "",
            children: "",
            adult: "",
            volunteer: "",
            foster: "",
            usark: "",
            exoticVet: "",
            everOwned: "",
            care: "",
            provisions: "",
            bequest: "",
            accommodations: "",
            permit: "",
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
                      password_confirmation: this.passwordConfirmation,
                      phone_number: this.phoneNumber,
                      address_1: this.address1,
                      address_2: this.address2,
                      city: this.city,
                      state: this.state,
                      zip_code: this.zipCode,
                      rent: this.rent,
                      children: this.children,
                      adult: this.adult,
                      volunteer: this.volunteer,
                      foster: this.foster,
                      usark: this.usark,
                      exotic_vet: this.exoticVet,
                      ever_owned: this.everOwned,
                      care: this.care,
                      provisions: this.provisions,
                      bequest: this.bequest,
                      accommodations: this.accommodations,
                      permit: this.permit
                    };
          axios.post("/api/users", params)
            .then(response => {
              this.$router.push("/login");
            })
            .catch(error => {
              this.errors = error.response.data.errors;
            });
          }
        }
      }
</script>