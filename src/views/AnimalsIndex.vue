<template>
  <div class="animals-index">
    <div class="container">
      <div class="pt-5 row row-eq-height">
        <div class="card col-md-2 card-spacing" v-for="animal in animals">
          <router-link v-bind:to="'/animals/' + animal.id">
          <div class="card_img mt-3">
              <img class="img-full" v-bind:src="animal.photo" v-bind:alt="animal.name">
          </div>
          <div class="">
            <h3 class="text-center card-title">{{animal.name}}</h3>
            <p class="card-text text-center">{{animal.description}}</p>
          </div>
          </router-link>
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
div.card.col-md-2{
  background-image: url('/vintage-concrete.png');
} 

.card-spacing {
  margin: 19px 19px 19px 19px;
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