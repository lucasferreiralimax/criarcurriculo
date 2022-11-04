import { shallowMount, createLocalVue } from '@vue/test-utils'

import App from './app.vue'
import AppHeader from './components/base/app-header'
import AppFooter from './components/base/app-footer'
import VueRouter from 'vue-router'

const localVue = createLocalVue()

localVue.use(VueRouter)
localVue.component('app-header', AppHeader)
localVue.component('app-footer', AppFooter)

const router = new VueRouter()

const wrapper = shallowMount(App, {
  localVue,
  router
})

describe('App', () => {
  it('is App a vue instance', () => {
    expect(wrapper.exists()).toBeTruthy()
  })
  it('App contains HeaderApp', () => {
    expect(wrapper.findComponent(AppHeader).exists()).toBeTruthy()
  })
  it('App contains Main', () => {
    expect(wrapper.get('main')).toBeTruthy()
  })
  it('App contains FooterApp', () => {
    expect(wrapper.findComponent(AppFooter).exists()).toBeTruthy()
  })
})
