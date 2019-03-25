import Vue from 'vue';
import App from './App.vue';
import router from './router';
import axios from "axios";
import {BadgerAccordion, BadgerAccordionItem} from 'vue-badger-accordion';

axios.defaults.baseURL = 
  process.env.NODE_ENV === "development" ? "http://localhost:3000" : "/";

Vue.config.productionTip = false
Vue.component('BadgerAccordion', BadgerAccordion)
Vue.component('BadgerAccordionItem', BadgerAccordionItem)

var jwt = localStorage.getItem("jwt");
if (jwt) {
  axios.defaults.headers.common["Authorization"] = "Bearer " + jwt;
}

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
