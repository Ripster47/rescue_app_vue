<template>
  <div class="submissions-pending">
    <div class="grid-wrapper section">
      <div class="container">
        <div class="element-content">
          <div id="accordion" role="tablist" aria-multiselectable="true">
            <div class="card card-accordion">
              <div class="card-header" role="tab" id="heading1">
                <div class="" v-for="submission in submissions" v-bind:value="currentSubmissionId">
                  <h6 class="mb-0">
                    <a data-parent="#accordion" aria-expanded="true" aria-controls="collapse1">
                      <div class="" slot="header"><h1>{{submission.formatted.purpose}}</h1></div> 
                    </a>
                  </h6>
                  <div id="collapse1" class="collapse show" role="tabpanel" aria-labelledby="heading1">
                    <div class="card-block">
                      <badger-accordion>
                        <badger-accordion-item>
                          <div class="row" slot="header">
                            <div class="float-left col-4">
                              <img v-if="submission.animal" v-bind:src="submission.animal.image_url">
                              <img v-if="!submission.animal" v-bind:src="'/alligator-web 2.png'">
                            </div>
                            <div class="col-6">
                              <p class="mb-1"><u>Name</u>: {{submission.user.first_name}} {{submission.user.last_name}}</p>
                              <p v-if="submission.animal"><u>Would like to adopt</u>: {{submission.animal.name}}</p>
                              <p class="mb-1"><u>Address</u>: {{submission.user.address_1}} {{submission.user.address_2}}</p>
                              <p class="mb-1"><u>City</u>: {{submission.user.city}}</p> 
                              <p class="mb-1"><u>State</u>: {{submission.user.state}}</p>
                              <p class="mb-1"><u>Zip</u>: {{submission.user.zip_code}}</p>
                              <p class="mb-1"><u>Email</u>: {{submission.user.email}}</p>
                              <p class="mb-1"><u>Phone Number</u>: {{submission.user.phone_number}}</p>
                            <div v-if="!submission.animal">
                              <p class="mb-1"><u>Is Relinquishing</u>:</p>
                              <p class="mb-1"> {{submission.animal_type}}</p>
                              <p class="mb-1"><u>Because</u>...</p>
                              <p class="mb-1"> {{submission.relinquish_reason}}</p>
                            </div>
                            </div>
                              <div class="col-2 text-center"> 
                                <button class="btn mt-2 mb-2 btn-primary" v-on:click="approveSubmission(submission.id)">Approve</button>
                                <button class="btn mt-4 mb-2 btn-danger" v-on:click="denySubmission(submission.id)">Deny</button>
                              </div>
                          </div>
                          <!-- <div slot="content" class="text-center row">
                            <form class="col-8 pt-4 pl-5 font-weight-bold">
                              Schedule Pickup/Dropoff: <input type="datetime-local" v-model="startTime">
                            </form>
                            <button class="text-center col-4 btn mt-2 mb-2 btn-primary " v-on:click="createEvent(submission)">Create Event</button>
                          </div> -->
                        </badger-accordion-item>
                      </badger-accordion>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<style>
img{
  width: 200px;
}
p{
  font-weight: bold;
}
</style>

<script>

import axios from "axios";
var moment = require('moment');
import {BadgerAccordion, BadgerAccordionItem} from 'vue-badger-accordion';
  
export default {
  data: function() {
    return {
            components: {
                  BadgerAccordion,
                  BadgerAccordionItem
              },
            submissions: [],
            currentSubmissionId: "",
            startTime: "",
          };
  },
  created: function() {
    var expTime = localStorage.getItem("exp");
    var formattedTime = moment(expTime, "YYYY-MM-DD LTS UTC");
    var timeComparison = moment().isAfter(formattedTime);

    if (expTime === null) {
      window.location.href = "http://localhost:3000/api/google/redirect";
    } else if (timeComparison) {
      window.location.href = "http://localhost:3000/api/google/redirect";
    } else {
      axios.get("/api/submissions/requests")
      .then(response => {
        this.submissions = response.data;
      });
    }
  },
  methods: {
    approveSubmission: function(inputID) {
      var params = {
                    status: "approved"
                    };
      axios.patch( "/api/submissions/" + inputID, params )
      .then(response => {
        axios.get("/api/submissions/requests")
        .then(response => {
          this.submissions = response.data;  
        });
      }).catch(error => {
        this.errors = error.response.data.errors;
      });
    },
    createEvent: function(submission) {
      var params = {
                    start_time: this.startTime,
                    submission_id: submission.id,
                    rt_google: localStorage.getItem('rtg'),
                    at_google: localStorage.getItem('atg')
                    };

      axios.post("api/google/events", params)
        .then(response => {
          this.$router.push('/animals')
        }).catch(error => {
        this.errors = error.response.data.errors;
      });
        this.approveSubmission(submission.id)
    },

    denySubmission: function(inputID) {
      var params = {
                    status: "denied"
                    };
      axios.patch( "/api/submissions/" + inputID, params )
      .then(response => {
        axios.get("/api/submissions/requests")
        .then(response => {
          this.submissions = response.data;
        });
      }).catch(error => {
        this.errors = error.response.data.errors;
      });
    }
  }
};
</script>