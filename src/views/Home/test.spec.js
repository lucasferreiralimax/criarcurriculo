import { shallowMount, createLocalVue } from '@vue/test-utils'

import { mutations } from '@/mutations'
import Vuex from 'vuex'
import Home from './index.vue'

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
  it('is Home with iframe facebook', () => {
    expect(wrapper.findAll('iframe.facebook').at(0).exists()).toBeTruthy()
  })
})
