import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Signup from './views/Signup.vue'
import Login from './views/Login.vue'
import Logout from './views/Logout.vue'
import Goodbye from './views/Goodbye.vue'
import AnimalsIndex from './views/AnimalsIndex.vue'
import AnimalsShow from './views/AnimalsShow.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/about', name: 'about', component: About },
    { path: '/signup', name: 'signup', component: Signup },
    { path: '/login', name: 'login', component: Login },
    { path: '/logout', name: 'logout', component: Logout },
    { path: '/goodbye', name: 'goodbye', component: Goodbye },
    { path: '/animals', name: 'animals-index', component: AnimalsIndex },
    { path: '/animals/:id', name: 'animals-show', component: AnimalsShow }
  ]
})
