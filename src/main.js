import Vue from 'vue'
import i18n from './i18n'
import App from './App.vue'
import router from './router'
import store from './store'

import './registerServiceWorker'

import VueHead from 'vue-head'
import VueScrollTo from 'vue-scrollto'
import HeaderApp from '@/components/base/Header.vue'
import FooterApp from '@/components/base/Footer.vue'

Vue.use(VueHead)
Vue.use(VueScrollTo)
Vue.component('header-app', HeaderApp)
Vue.component('footer-app', FooterApp)

Vue.config.productionTip = false

new Vue({
  i18n,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
