import Vue from 'vue'
import i18n from './i18n'
import App from './App.vue'
import router from './router'
import store from './store'

import './registerServiceWorker'

import VueHead from 'vue-head'
import { DatePicker, Tag, Input, Button } from 'element-ui'
import VueTheMask from 'vue-the-mask'
import draggable from 'vuedraggable'
import 'element-ui/lib/theme-chalk/icon.css'
import 'element-ui/lib/theme-chalk/date-picker.css'
import 'element-ui/lib/theme-chalk/tag.css'
import 'element-ui/lib/theme-chalk/input.css'
import 'element-ui/lib/theme-chalk/button.css'
import HeaderApp from '@/components/base/Header.vue'
import FooterApp from '@/components/base/Footer.vue'

import lang from 'element-ui/lib/locale/lang/pt-br'
import locale from 'element-ui/lib/locale'
locale.use(lang)

Vue.use(VueHead)
Vue.component('header-app', HeaderApp)
Vue.component('footer-app', FooterApp)
Vue.component(DatePicker.name, DatePicker)
Vue.component(draggable.name, draggable)
Vue.use(Tag)
Vue.use(Input)
Vue.use(Button)
Vue.use(VueTheMask)

Vue.config.productionTip = false

new Vue({
  i18n,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
