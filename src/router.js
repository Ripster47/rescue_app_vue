import Vue from 'vue'
import Router from 'vue-router'
import AnimalsIndex from './views/AnimalsIndex.vue'
import AnimalsNew from './views/AnimalsNew.vue'
import AnimalsShow from './views/AnimalsShow.vue'
import AnimalsEdit from './views/AnimalsEdit.vue'
import AnimalsAdoptEdit from './views/AnimalsAdoptEdit.vue'
import UsersRelinquishEdit from './views/UsersRelinquishEdit.vue'
import SubmissionsPending from './views/SubmissionsPending.vue'
import Home from './views/Home.vue'
import AdminTools from './views/AdminTools.vue'
import About from './views/About.vue'
import Crew from './views/Crew.vue'
import Catch from './views/Catch.vue'
import Signup from './views/Signup.vue'
import Login from './views/Login.vue'
import Logout from './views/Logout.vue'
import Success from './views/Success.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/animals', name: 'animals-index', component: AnimalsIndex },
    { path: '/submissions/requests', name: 'submissions-pending', component: SubmissionsPending },
    { path: '/animals/new', name: 'animals-new', component: AnimalsNew },
    { path: '/animals/:id', name: 'animals-show', component: AnimalsShow },
    { path: '/animals/:id/edit', name: 'animals-edit', component: AnimalsEdit },
    { path: '/animals/:id/adopt', name: 'animals-adopt', component: AnimalsAdoptEdit },
    { path: '/relinquish/current', name: 'users-relinquish', component: UsersRelinquishEdit },
    { path: '/about', name: 'about', component: About },
    { path: '/crew', name: 'crew', component: Crew },
    { path: '/admintools', name: 'admin-tools', component: AdminTools },

    { path: '/catch/:at_google/:exp_time/:rt_google', name: 'catch', component: Catch },
    
    { path: '/signup', name: 'signup', component: Signup },
    { path: '/login', name: 'login', component: Login },
    { path: '/logout', name: 'logout', component: Logout },
    { path: '/success', name: 'success', component: Success }
  ]
})
