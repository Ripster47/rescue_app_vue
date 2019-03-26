<template>
  <div class="animals-index">
    <div class="container">
      <div class="row row-eq-height">
        <div class="card col-md-4" v-for="animal in animals">
          <div class="card_img">
            <router-link v-bind:to="'/animals/' + animal.id">
              <img class="img-full" v-bind:src="animal.image_url" v-bind:alt="animal.name">
            </router-link>
          </div>
          <div class="card-block special-card">
            <a href="#"><h3 class="card-title">{{animal.name}}</h3></a>
            <p class="card-text">{{animal.description}}</p>
          </div>
        </div>
      </div>
    <!-- <div class="card">
    <div class="card_img">
      <router-link v-bind:to="'/animals/' + animal.id">
        <img class="img-full" v-bind:src="animal.image_url" v-bind:alt="animal.name">
      </router-link>
    </div>
    <div class="card-block">
      <a href="#"><h3 class="card-title">{{animal.name}}</h3></a>
      <p class="card-text">{{animal.description}}</p>
      <a href="" class="btn btn-primary">Read more</a>
    </div>
    </div>
        <div class="card">
    <div class="card_img">
      <router-link v-bind:to="'/animals/' + animal.id">
        <img class="img-full" v-bind:src="animal.image_url" v-bind:alt="animal.name">
      </router-link>
    </div>
    <div class="card-block">
      <a href="#"><h3 class="card-title">{{animal.name}}</h3></a>
      <p class="card-text">{{animal.description}}</p>
      <a href="" class="btn btn-primary">Read more</a>
    </div>
    </div>
  </div>
   

      <h1>{{animal.name}}</h1>
      <router-link v-bind:to="'/animals/' + animal.id">
        <img v-bind:src="animal.image_url" v-bind:alt="animal.name">
      </router-link> -->
    </div>
  </div>
</template>

<style>
.animals-index .card:hover {
  box-shadow: 8px 8px 35px 8px #004d00
}
div.card.col-md-4{
  background-image: url('/vintage-concrete.png');
} 
</style>

<script>

import axios from "axios";
  
export default {
  data: function() {
    return {
      animals: []
    };
  },
  created: function() {
    axios.get("/api/animals")
    .then(response => {
      this.animals = response.data;
    });

  },
  methods: {}
};
</script>