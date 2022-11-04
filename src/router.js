import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import(/* webpackChunkName: "home" */ './views/Home/index.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './views/About/index.vue')
    },
    {
      path: '/contributors',
      name: 'contributors',
      component: () => import(/* webpackChunkName: "colab" */ './views/Colab/index.vue')
    },
    {
      path: '/*',
      name: 'notfound',
      component: () => import(/* webpackChunkName: "notfound" */ './views/NotFound/index.vue')
    }
  ],
  scrollBehavior () {
    return { x: 0, y: 0 }
  }
})
