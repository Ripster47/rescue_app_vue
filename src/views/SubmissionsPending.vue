<template>
  <div class="submissions-pending">
      <div v-for="submission in submissions" v-bind:value="currentSubmissionId">
        <h1>{{submission.formatted.purpose}}</h1>
        <img v-if="submission.animal" v-bind:src="submission.animal.image_url">
        <p>Name: {{submission.user.first_name}} {{submission.user.last_name}}</p>
        <p v-if="submission.animal">Would like to adopt: {{submission.animal.name}}</p>
        <p>Address: {{submission.user.address_1}} {{submission.user.address_2}}</p>
        <p>City: {{submission.user.city}} State: {{submission.user.state}} Zip: {{submission.user.zip_code}}</p>
        <p>Email: {{submission.user.email}}</p>
        <p>Phone Number: {{submission.user.phone_number}}</p>
        <p>{{submission.animal_type}}</p>
        <p>{{submission.relinquish_reason}}</p>
        <button v-on:click.prevent="approveSubmission(submission.id)">Approve</button>
        <button v-on:click="denySubmission(submission.id)">Deny</button>
  
        <h2>When is the best time for them to adopt/relinquish their animal?</h2>
        <form>
          Appointment Time: <input type="datetime-local" v-model="startTime">
        </form>
        <button v-on:click="createEvent(submission)">Create Event and Send Notification</button>
      </div>
  </div>
</template>

<style>
img{
  width: 200px;
}
</style>

<script>

import axios from "axios";
var moment = require('moment');
  
export default {
  data: function() {
    return {
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
    createEvent: function(submission) {
      var params = {
                    start_time: this.startTime,
                    submission_id: submission.id,
                    rt_google: localStorage.getItem('rtg'),
                    at_google: localStorage.getItem('atg')
                    };

      axios.post("api/google/events", params)
        .then(response => {
          this.$router.push('/success')
        }).catch(error => {
        this.errors = error.response.data.errors;
      })
    },
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
    denySubmission: function(inputID) {
      var params = {
                    status: "denied"
                    };
      axios.patch( "/api/submissions/" + inputID, params )
      .then(response => {
        axios.get("/api/submissions/requests")
        .then(response => {
          this.submissions = response.data;
          this.$router.push('/success')
        });
      }).catch(error => {
        this.errors = error.response.data.errors;
      });
    }
  }
};
</script>