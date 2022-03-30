import { shallowMount, createLocalVue } from '@vue/test-utils'

import { user } from '@/user'
import Vuex from 'vuex'
import Coursers from './Coursers.vue'

const localVue = createLocalVue()

localVue.use(Vuex)

let store = new Vuex.Store({
  state: {
    user: user
  }
})

const wrapper = shallowMount(Coursers, { store, localVue })

describe('Coursers', () => {
  it('is Coursers a vue instance', () => {
    expect(wrapper.exists()).toBeTruthy()
  })
})
