import { shallowMount, createLocalVue } from '@vue/test-utils'

import App from './App.vue'
import HeaderApp from './components/base/Header.vue'
import FooterApp from './components/base/Footer.vue'
import VueRouter from 'vue-router'

const localVue = createLocalVue()

localVue.use(VueRouter)
localVue.component('header-app', HeaderApp)
localVue.component('footer-app', FooterApp)

const router = new VueRouter()

const wrapper = shallowMount(App, {
  localVue,
  router
})

describe('App', () => {
  it('is App a vue instance', () => {
    expect(wrapper.isVueInstance()).toBe(true)
  })
})
