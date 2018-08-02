import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/sobre',
      name: 'sobre',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/contato',
      name: 'contato',
      component: () => import(/* webpackChunkName: "about" */ './views/Contact.vue')
    },
    {
      path: '/*',
      name: 'notfound',
      component: () => import(/* webpackChunkName: "about" */ './views/NotFound.vue')
    }
  ],
  scrollBehavior () {
    return { x: 0, y: 0 }
  }
})
