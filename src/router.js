import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import(/* webpackChunkName: "home" */ './views/home/Home.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './views/about/About.vue')
    },
    {
      path: '/contributors',
      name: 'collaborators',
      component: () => import(/* webpackChunkName: "collaborators" */ './views/collaborators/Collaborators.vue')
    },
    {
      path: '/*',
      name: 'not-found',
      component: () => import(/* webpackChunkName: "not-found" */ './views/not-found/NotFound.vue')
    }
  ],
  scrollBehavior () {
    return { x: 0, y: 0 }
  }
})
