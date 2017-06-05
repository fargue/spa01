import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
Vue.config.productionTip = false

import Hello from './components/Hello'
import About from './components/About'
import DevUserData from './components/DevUserData'
import Grid from './components/Grid'
import APIGrid from './components/APIGrid'

const routes = [
  { path: '/', component: Hello },
  { path: '/about', component: About },
  { path: '/devuserdata', component: DevUserData },
  { path: '/grid', component: Grid },
  { path: '/apigrid', component: APIGrid }
]

// Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
  routes, // short for routes: routes
  mode: 'history'
})

//instantiate the vue instance
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router
}).$mount('#app')
