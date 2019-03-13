import Vue from 'vue'
import Router from 'vue-router'
import AnimalsIndex from './views/AnimalsIndex.vue'
import AnimalsNew from './views/AnimalsNew.vue'
import AnimalsShow from './views/AnimalsShow.vue'
import AnimalsEdit from './views/AnimalsEdit.vue'
import SubmissionsAdoption from './views/SubmissionsAdoption.vue'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Signup from './views/Signup.vue'
import Login from './views/Login.vue'
import Logout from './views/Logout.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/animals', name: 'animals-index', component: AnimalsIndex },
    { path: '/animals/new', name: 'animals-new', component: AnimalsNew },
    { path: '/animals/:id', name: 'animals-show', component: AnimalsShow },
    { path: '/animals/:id/edit', name: 'animals-edit', component: AnimalsEdit },
    { path: '/submissions/new', name: 'submissions-adoption', component: SubmissionsAdoption },
    { path: '/about', name: 'about', component: About },
    { path: '/signup', name: 'signup', component: Signup },
    { path: '/login', name: 'login', component: Login },
    { path: '/logout', name: 'logout', component: Logout }
  ]
})
