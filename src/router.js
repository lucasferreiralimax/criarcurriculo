import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import(/* webpackChunkName: "home" */ './views/home/index.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './views/about/index.vue')
    },
    {
      path: '/contributors',
      name: 'contributors',
      component: () => import(/* webpackChunkName: "colab" */ './views/collaborators/index.vue')
    },
    {
      path: '/*',
      name: 'notfound',
      component: () => import(/* webpackChunkName: "notfound" */ './views/not-found/index.vue')
    }
  ],
  scrollBehavior () {
    return { x: 0, y: 0 }
  }
})
