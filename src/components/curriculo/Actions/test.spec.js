import { shallowMount, createLocalVue } from '@vue/test-utils'

import { user } from '@/user'
import Vuex from 'vuex'
import Actions from './index.vue'

const localVue = createLocalVue()

localVue.use(Vuex)

let store = new Vuex.Store({
  state: {
    user: user
  }
})

const wrapper = shallowMount(Actions, { store, localVue })

describe('Actions', () => {
  it('is Actions a vue instance', () => {
    expect(wrapper.exists()).toBeTruthy()
  })
})
