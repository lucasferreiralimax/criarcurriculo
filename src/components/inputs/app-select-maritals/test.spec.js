import { shallowMount, createLocalVue } from '@vue/test-utils'

import { user } from '@/user'
import Vuex from 'vuex'
import AppSelectMaritals from './index.vue'

const localVue = createLocalVue()

localVue.use(Vuex)

let store = new Vuex.Store({
  state: {
    user: user
  }
})

const wrapper = shallowMount(AppSelectMaritals, { localVue, store })

describe('AppSelectMaritals', () => {
  it('is AppSelectMaritals a vue instance', () => {
    expect(wrapper.exists()).toBeTruthy()
  })
})
