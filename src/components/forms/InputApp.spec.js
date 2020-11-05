import { shallowMount, createLocalVue } from '@vue/test-utils'

import { user } from '@/user'
import Vuex from 'vuex'
import InputApp from './InputApp.vue'

const localVue = createLocalVue()

localVue.use(Vuex)

let store = new Vuex.Store({
  state: {
    user: user
  }
})


const wrapper = shallowMount(InputApp, {
  localVue,
  store,
  propsData: {
    value: {
      parent: ''
    }
  }
})

describe('InputApp', () => {
  it('is InputApp a vue instance', () => {
    expect(wrapper.exists()).toBeTruthy()
  })
})
