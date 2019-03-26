<template>
  <div class="animals-adopt">
    <div v-if="indicator">

        <div class="container">
        <form v-on:submit.prevent="submit()">

            <ul>
              <li v-for="error in errors">{{ error }}</li>
            </ul>

            <h1 class=" text-center pb-5">Adoption Application</h1>
            <p class="pb-5">Please fill in any empty fields and update any information that may have changed</p>

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
             <div class="form-group col-md-6">
            </div>
              <h4 class="col-12 text-center pb-2">Residence Information</h4>
            <div class="col-12">
              <label for="example-location" class="col-md-6 ">What type of residence are you currently occupying?</label>
                <div class="col-md-2 selectOptions ">
                  <select name="country" class="form-control select-drop" v-model="user.accommodations">
                    <option>Apartment</option>
                    <option>Condominium</option>
                    <option>House</option>
                    <option>Other</option>
                  </select>
                </div>
            </div>
            <div class="col-12 form-check">
              <label>If you rent, will you be able to provide proof of your landlord’s approval or rental agreement stating it is allowable to have a pet?</label><br>
                <input  class="radio-custom form-check-input" name="radio-group-rent" type="radio" value="true" v-model="user.rent">
                <label  class="radio-custom-label form-check-label">Yes</label>
                <input  class="radio-custom form-check-input" name="radio-group-rent" type="radio" value="false" v-model="user.rent">
                <label  class="radio-custom-label pl-2 form-check-label">No</label>
              </div>
              <div class="form-check">
              <label>Do you currently have small children in your home?</label><br>
                <input class="radio-custom form-check-input" name="radio-group-children" type="radio" value="true" v-model="user.children">
                <label class="radio-custom-label form-check-label">Yes</label>
                <input class="radio-custom form-check-input" name="radio-group-children" type="radio" value="false" v-model="user.children">
                <label class="radio-custom-label pl-2 form-check-label">No</label>
              </div>
              <h4 class="col-12 text-center pb-2">About You</h4>
              <div class="col-12 form-check">
              <label>Are you 18 or older?</label><br>
                <input class="radio-custom form-check-input" name="radio-group-adult" type="radio" value="true" v-model="user.adult">
                <label class="radio-custom-label form-check-label">Yes</label>
                <input class="radio-custom form-check-input" name="radio-group-adult" type="radio" value="false" v-model="user.adult">
                <label class="radio-custom-label pl-2 form-check-label">No</label>
              </div>
              <div class="col-12 form-check">
              <label>Are you interested in volunteering with FoS?</label><br>
                <input class="radio-custom form-check-input" name="radio-group-volunteer" type="radio" value="true" v-model="user.volunteer">
                <label class="radio-custom-label form-check-label">Yes</label>
                <input class="radio-custom form-check-input" name="radio-group-volunteer" type="radio" value="false" v-model="user.volunteer">
                <label class="radio-custom-label pl-2 form-check-label">No</label>
              </div>
              <div class="col-12 form-check">
              <label>Are you interested in Fostering for FoS?</label><br>
                <input class="radio-custom form-check-input" name="radio-group-foster" type="radio" value="true" v-model="user.foster">
                <label class="radio-custom-label form-check-label">Yes</label>
                <input class="radio-custom form-check-input" name="radio-group-foster" type="radio" value="false" v-model="user.foster">
                <label class="radio-custom-label pl-2 form-check-label">No</label>
              </div>
              <div class="col-12 form-check">
              <label>Are you a member of USARK?</label><br>
                <input class="radio-custom form-check-input" name="radio-group-usark" type="radio" value="true" v-model="user.usark">
                <label class="radio-custom-label form-check-label">Yes</label>
                <input class="radio-custom form-check-input" name="radio-group-usark" type="radio" value="false" v-model="user.usark">
                <label class="radio-custom-label pl-2 form-check-label">No</label>
              </div>
              <div class="col-12 form-check">
              <label>Do you have access to a veterinarian willing to work with exotic animals?</label><br>
                <input class="radio-custom form-check-input" name="radio-group-exoticvet" type="radio" value="true" v-model="user.exotic_vet">
                <label class="radio-custom-label form-check-label">Yes</label>
                <input class="radio-custom form-check-input" name="radio-group-exoticvet" type="radio" value="false" v-model="user.exotic_vet">
                <label class="radio-custom-label pl-2 form-check-label">No</label>
              </div>
              <div class="col-12 form-check">
              <label>Have you ever owned a reptile, amphibian, or invertebrate before?</label><br>
                <input class="radio-custom form-check-input" name="radio-group-everowned" type="radio" value="true" v-model="user.ever_owned">
                <label class="radio-custom-label form-check-label">Yes</label>
                <input class="radio-custom form-check-input" name="radio-group-everowned" type="radio" value="false" v-model="user.ever_owned">
                <label class="radio-custom-label pl-2 form-check-label">No</label>
              </div>
                 <h4 class="col-12 text-center pb-2">Adoption Details</h4>
              <div class="col-12 form-check">
              <label>Do you agree to seek veterinary care for your animal if an illness or injury were to occur?</label><br>
                <input class="radio-custom form-check-input" name="radio-group-care" type="radio" value="true" v-model="user.care">
                <label class="radio-custom-label form-check-label">Yes</label>
                <input class="radio-custom form-check-input" name="radio-group-care" type="radio" value="false" v-model="user.care">
                <label class="radio-custom-label pl-2 form-check-label">No</label>
              </div>
              <div class="col-12 form-check">
              <label>Do you agree to present a permit if the animal you are adopting requires one?</label><br>
                <input class="radio-custom form-check-input" name="radio-group-permit" type="radio" value="true" v-model="user.permit">
                <label class="radio-custom-label form-check-label">Yes</label>
                <input class="radio-custom form-check-input" name="radio-group-permit" type="radio" value="false" v-model="user.permit">
                <label class="radio-custom-label pl-2 form-check-label">No</label>
              </div>
              <div class="col-12 form-check">
              <label>Do you have a provision for your (future) pet in place should something happen to you?</label><br>
                <input class="radio-custom form-check-input" name="radio-group-provisions" type="radio" value="true" v-model="user.provisions">
                <label class="radio-custom-label form-check-label">Yes</label>
                <input class="radio-custom form-check-input" name="radio-group-provisions" type="radio" value="false" v-model="user.provisions">
                <label class="radio-custom-label pl-2 form-check-label">No</label>
              </div>
              <div class="col-12 form-check">
              <label>Would you like Friends of Scales to send information on creating a bequest?</label><br>
                <input class="radio-custom form-check-input" name="radio-group-bequest" type="radio" value="true" v-model="user.bequest">
                <label class="radio-custom-label form-check-label">Yes</label>
                <input class="radio-custom form-check-input" name="radio-group-bequest" type="radio" value="false" v-model="user.bequest">
                <label class="radio-custom-label pl-2 form-check-label">No</label>
              </div>
            </div>
          <input class="btn mt-2 mb-2 btn-primary" type="submit" value="Submit">
      </form>
    </div> 
    </div>
    <div v-else>
      <h2 class="text-center pb-5">Adoption Confirmation</h2>
        <form>
          <div class="row">
            <div class="col-5"></div>
            <button class="col-2 btn btn-primary" v-on:click.prevent="createSubmission()">ADOPT!</button>
            <div class="col-5"></div>
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
          this.indicator = false;
        })
        .catch(error => {
          this.errors = error.response.data.errors;
        });
        
    },
      createSubmission: function() {
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
