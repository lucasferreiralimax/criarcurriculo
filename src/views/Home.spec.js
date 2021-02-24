import { shallowMount, createLocalVue } from '@vue/test-utils'

import { mutations } from '@/mutations'
import Vuex from 'vuex'
import Home from './Home.vue'
import { Hooper, Slide, Pagination as HooperPagination, Navigation as HooperNavigation } from 'hooper';

const localVue = createLocalVue()

localVue.use(Vuex)

let store = new Vuex.Store({
  state: {
    theme_app: 'default',
    home_app: false
  },
  mutations: mutations
})

const wrapper = shallowMount(Home, { store, localVue })

describe('Home', () => {
  it('is Home a vue instance', () => {
    expect(wrapper.exists()).toBeTruthy()
  })
  it('is Home with Carousel component', () => {
    expect(wrapper.findComponent(Hooper).exists()).toBeTruthy()
  })
  it('is Home with Carousel component item', () => {
    expect(wrapper.findComponent(Slide).exists()).toBeTruthy()
  })
  it('is Home with Carousel component Pagination', () => {
    expect(wrapper.findComponent(HooperPagination).exists()).toBeTruthy()
  })
  it('is Home with iframe facebook', () => {
    expect(wrapper.findAll('iframe.facebook').at(0).exists()).toBeTruthy()
    expect(wrapper.findAll('iframe.facebook').at(1).exists()).toBeTruthy()
  })
})
