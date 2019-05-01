import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import MakeGroup from './views/MakeGroup.vue'
import Group from './views/Group.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/make-group',
      name: 'makegroup',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
      component: MakeGroup
    },
    {
      path: '/group',
      name: 'group',
      component: Group
    }
  ]
})
