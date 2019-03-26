<template>
  <div class="home">
    <div class="row">
      <div class="col-3"></div>
      <h1 class="banner text-center pt-4 pb-4 col-6"><strong>{{ message }}</strong></h1>
      <div class="col-3"></div>
    </div>
    <div class="row">
      <div class="col-1"></div>
      <p class="col-10 pb-4">Illinois' only 501(c)3 reptile, amphibian and invertebrate rescue</p>
      <div class="col-1"></div>
    </div>
    <div class="row">
      <div class="col-1"></div>
      <p class="col-10 pb-4">Mission Statement:
      Our missions are: to end reptile and amphibian abuse, neglect, and misunderstanding through rehoming of our rescue animals; and promote conservation through responsible pet ownership.</p>
      <div class="col-1"></div>
    </div>
    <div class="row">
      <div class="col-1"></div>
      <p class="col-10 pb-2"> Friends of Scales Reptile Rescue (FoS) is an Illinois based 501(c)3 reptile, amphibian, and invertebrate not for profit rescue dedicated to the care of ill, injured, neglected, and relinquished herpetiles. Friends of Scales is a foster based rescue with a strong drive for prevention of abuse and neglect through educations, rehabilitation, and rehoming. We have no paid staff, all their time is being donated out of their own generosity! FoS wouldn't exist without our volunteers!</p>
      <div class="col-1"></div>
    </div>
    <div class="row">
      <div class="col-1"></div>
      <img class="col-10" src="/hero-image_burned.png">
      <div class="col-1"></div>
    </div>
  </div>
</template>

<style>
h1.banner{

}
</style>

<script>

import axios from "axios";

export default {
  data: function() {
    return {
      message: "Welcome to Friends of Scales Reptile Rescue"
    };
  },
  created: function() {},
  methods: {}
};
</script>
