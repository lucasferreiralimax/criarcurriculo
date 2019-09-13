import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import(/* webpackChunkName: "home" */ './views/Home.vue')
    },
    {
      path: '/sobre',
      name: 'sobre',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/*',
      name: 'notfound',
      component: () => import(/* webpackChunkName: "notfound" */ './views/NotFound.vue')
    }
  ],
  scrollBehavior () {
    return { x: 0, y: 0 }
  }
})
