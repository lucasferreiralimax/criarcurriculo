import Vue from 'vue'
import i18n from './i18n'
import App from './app.vue'
import router from './router'
import store from './store'

import './registerServiceWorker'

import VueHead from 'vue-head'
import { DatePicker, Tag, Input, Button, Carousel, Select, Option, CarouselItem, Switch } from 'element-ui'
import VueTheMask from 'vue-the-mask'
import draggable from 'vuedraggable'
import 'element-ui/lib/theme-chalk/icon.css'
import 'element-ui/lib/theme-chalk/date-picker.css'
import 'element-ui/lib/theme-chalk/tag.css'
import 'element-ui/lib/theme-chalk/input.css'
import 'element-ui/lib/theme-chalk/button.css'
import 'element-ui/lib/theme-chalk/select.css'
import 'element-ui/lib/theme-chalk/option.css'
import 'element-ui/lib/theme-chalk/carousel.css'
import 'element-ui/lib/theme-chalk/carousel-item.css'
import 'element-ui/lib/theme-chalk/switch.css'
import AppHeader from '@/components/base/app-header'
import AppFooter from '@/components/base/app-footer'

import lang from 'element-ui/lib/locale/lang/pt-br'
import locale from 'element-ui/lib/locale'
locale.use(lang)

Vue.use(VueHead)
Vue.component('app-header', AppHeader)
Vue.component('app-footer', AppFooter)
Vue.component(DatePicker.name, DatePicker)
Vue.component(draggable.name, draggable)
Vue.use(Tag)
Vue.use(Input)
Vue.use(Button)
Vue.use(Select)
Vue.use(Option)
Vue.use(Carousel)
Vue.use(CarouselItem)
Vue.use(Switch)
Vue.use(VueTheMask)

Vue.config.productionTip = false

new Vue({
  i18n,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
