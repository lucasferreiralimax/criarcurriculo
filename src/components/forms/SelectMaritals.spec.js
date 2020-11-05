import { shallowMount, createLocalVue } from '@vue/test-utils'

import { user } from '@/user'
import Vuex from 'vuex'
import SelectMaritals from './SelectMaritals.vue'

const localVue = createLocalVue()

localVue.use(Vuex)

let store = new Vuex.Store({
  state: {
    user: user
  }
})

const wrapper = shallowMount(SelectMaritals, { localVue, store })

describe('SelectMaritals', () => {
  it('is SelectMaritals a vue instance', () => {
    expect(wrapper.exists()).toBeTruthy()
  })
})
