import { shallowMount, createLocalVue } from '@vue/test-utils'

import { user } from '@/user'
import Vuex from 'vuex'
import InputCep from './InputCep.vue'

const localVue = createLocalVue()

localVue.use(Vuex)

let store = new Vuex.Store({
  state: {
    user: user
  }
})

const wrapper = shallowMount(InputCep, { localVue, store })

describe('InputCep', () => {
  it('is InputCep a vue instance', () => {
    expect(wrapper.exists()).toBeTruthy()
  })
})
