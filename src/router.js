import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import(/* webpackChunkName: "home" */ './views/Home.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/contributors',
      name: 'contributors',
      component: () => import(/* webpackChunkName: "colab" */ './views/Colab.vue')
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
