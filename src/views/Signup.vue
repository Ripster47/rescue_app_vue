<template>
  <div class="signup">
    <div class="container">
    <form v-on:submit.prevent="submit()">

        <ul>
          <li v-for="error in errors">{{ error }}</li>
        </ul>

        <h1 class=" text-center pt-4 pb-4">Create Your Profile</h1>
        <p class="pb-4">Here, we will gather all of the information needed in order for you to adopt/relinquish an animal, from here forward you will be offered the chance to edit your information, but wont have to fill this out fully again</p>

      <div class="row">
        <div class="form-group col-md-6">
          <input type="text" class="form-control" aria-describedby="userName" placeholder="First Name" v-model="firstName">
        </div>
        <div class="form-group col-md-6">
          <input type="text" class="form-control"  aria-describedby="userName" placeholder="Last Name" v-model="lastName">
        </div>
        <div class="form-group col-md-6">
          <input type="email" class="form-control" aria-describedby="emailHelp" placeholder="Email" v-model="email">
        </div>
        <div class="form-group col-md-6">
          <input type="text" class="form-control"  placeholder="Phone" v-model="phoneNumber">
        </div>
         <div class="form-group col-md-6">
          <input type="password" class="form-control" aria-describedby="emailHelp" placeholder="Password" v-model="password">
        </div>
        <div class="form-group col-md-6">
        </div>
         <div class="form-group col-md-6">
          <input type="password" class="form-control" aria-describedby="emailHelp" placeholder="Password Confirmation" v-model="passwordConfirmation">
        </div>
         <div class="form-group col-md-6">
        </div>
        <div class="form-group col-md-6">
          <input type="text" class="form-control"  placeholder="Home Address" v-model="address1">
        </div>
        <div class="form-group col-md-6">
          <input type="text" class="form-control" placeholder="Apt #, Suite, Etc." v-model="address2">
        </div>
        <div class="form-group col-md-6">
          <input type="text" class="form-control" placeholder="City" v-model="city">
        </div>
        <div class="form-group col-md-6">
          <input type="text" class="form-control" placeholder="State Ex. NY, MA, FL" v-model="state">
        </div>
        <div class="form-group col-md-6">
          <input type="text" class="form-control" placeholder="Zip Code Ex 90210" v-model="zipCode">
        </div>
         <div class="form-group col-md-6">
        </div>
          <h4 class="col-12 text-center pb-2">Residence Information</h4>
        <div class="col-12">
          <label for="example-location" class="col-md-6 ">What type of residence are you currently occupying?</label>
            <div class="col-md-2 selectOptions ">
              <select name="country" class="form-control select-drop" v-model="accommodations">
                <option>Apartment</option>
                <option>Condominium</option>
                <option>House</option>
                <option>Other</option>
              </select>
            </div>
        </div>
        <div class="col-12 form-check">
          <label>If you rent, will you be able to provide proof of your landlord’s approval or rental agreement stating it is allowable to have a pet?</label><br>
            <input  class="radio-custom form-check-input" name="radio-group-rent" type="radio" value="true" v-model="rent">
            <label  class="radio-custom-label form-check-label">Yes</label>
            <input  class="radio-custom form-check-input" name="radio-group-rent" type="radio" value="false" v-model="rent">
            <label  class="radio-custom-label pl-2 form-check-label">No</label>
          </div>
          <div class="form-check">
          <label>Do you currently have small children in your home?</label><br>
            <input class="radio-custom form-check-input" name="radio-group-children" type="radio" value="true" v-model="children">
            <label class="radio-custom-label form-check-label">Yes</label>
            <input class="radio-custom form-check-input" name="radio-group-children" type="radio" value="false" v-model="children">
            <label class="radio-custom-label pl-2 form-check-label">No</label>
          </div>
          <h4 class="col-12 text-center pb-2">About You</h4>
          <div class="col-12 form-check">
          <label>Are you 18 or older?</label><br>
            <input class="radio-custom form-check-input" name="radio-group-adult" type="radio" value="true" v-model="adult">
            <label class="radio-custom-label form-check-label">Yes</label>
            <input class="radio-custom form-check-input" name="radio-group-adult" type="radio" value="false" v-model="adult">
            <label class="radio-custom-label pl-2 form-check-label">No</label>
          </div>
          <div class="col-12 form-check">
          <label>Are you interested in volunteering with FoS?</label><br>
            <input class="radio-custom form-check-input" name="radio-group-volunteer" type="radio" value="true" v-model="volunteer">
            <label class="radio-custom-label form-check-label">Yes</label>
            <input class="radio-custom form-check-input" name="radio-group-volunteer" type="radio" value="false" v-model="volunteer">
            <label class="radio-custom-label pl-2 form-check-label">No</label>
          </div>
          <div class="col-12 form-check">
          <label>Are you interested in Fostering for FoS?</label><br>
            <input class="radio-custom form-check-input" name="radio-group-foster" type="radio" value="true" v-model="foster">
            <label class="radio-custom-label form-check-label">Yes</label>
            <input class="radio-custom form-check-input" name="radio-group-foster" type="radio" value="false" v-model="foster">
            <label class="radio-custom-label pl-2 form-check-label">No</label>
          </div>
          <div class="col-12 form-check">
          <label>Are you a member of USARK?</label><br>
            <input class="radio-custom form-check-input" name="radio-group-usark" type="radio" value="true" v-model="usark">
            <label class="radio-custom-label form-check-label">Yes</label>
            <input class="radio-custom form-check-input" name="radio-group-usark" type="radio" value="false" v-model="usark">
            <label class="radio-custom-label pl-2 form-check-label">No</label>
          </div>
          <div class="col-12 form-check">
          <label>Do you have access to a veterinarian willing to work with exotic animals?</label><br>
            <input class="radio-custom form-check-input" name="radio-group-exoticvet" type="radio" value="true" v-model="exoticVet">
            <label class="radio-custom-label form-check-label">Yes</label>
            <input class="radio-custom form-check-input" name="radio-group-exoticvet" type="radio" value="false" v-model="exoticVet">
            <label class="radio-custom-label pl-2 form-check-label">No</label>
          </div>
          <div class="col-12 form-check">
          <label>Have you ever owned a reptile, amphibian, or invertebrate before?</label><br>
            <input class="radio-custom form-check-input" name="radio-group-everowned" type="radio" value="true" v-model="everOwned">
            <label class="radio-custom-label form-check-label">Yes</label>
            <input class="radio-custom form-check-input" name="radio-group-everowned" type="radio" value="false" v-model="everOwned">
            <label class="radio-custom-label pl-2 form-check-label">No</label>
          </div>
             <h4 class="col-12 text-center pb-2">Adoption Details</h4>
          <div class="col-12 form-check">
          <label>Do you agree to seek veterinary care for your animal if an illness or injury were to occur?</label><br>
            <input class="radio-custom form-check-input" name="radio-group-care" type="radio" value="true" v-model="care">
            <label class="radio-custom-label form-check-label">Yes</label>
            <input class="radio-custom form-check-input" name="radio-group-care" type="radio" value="false" v-model="care">
            <label class="radio-custom-label pl-2 form-check-label">No</label>
          </div>
          <div class="col-12 form-check">
          <label>Do you agree to present a permit if the animal you are adopting requires one?</label><br>
            <input class="radio-custom form-check-input" name="radio-group-permit" type="radio" value="true" v-model="permit">
            <label class="radio-custom-label form-check-label">Yes</label>
            <input class="radio-custom form-check-input" name="radio-group-permit" type="radio" value="false" v-model="permit">
            <label class="radio-custom-label pl-2 form-check-label">No</label>
          </div>
          <div class="col-12 form-check">
          <label>Do you have a provision for your (future) pet in place should something happen to you?</label><br>
            <input class="radio-custom form-check-input" name="radio-group-provisions" type="radio" value="true" v-model="provisions">
            <label class="radio-custom-label form-check-label">Yes</label>
            <input class="radio-custom form-check-input" name="radio-group-provisions" type="radio" value="false" v-model="provisions">
            <label class="radio-custom-label pl-2 form-check-label">No</label>
          </div>
          <div class="col-12 form-check">
          <label>Would you like Friends of Scales to send information on creating a bequest?</label><br>
            <input class="radio-custom form-check-input" name="radio-group-bequest" type="radio" value="true" v-model="bequest">
            <label class="radio-custom-label form-check-label">Yes</label>
            <input class="radio-custom form-check-input" name="radio-group-bequest" type="radio" value="false" v-model="bequest">
            <label class="radio-custom-label pl-2 form-check-label">No</label>
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