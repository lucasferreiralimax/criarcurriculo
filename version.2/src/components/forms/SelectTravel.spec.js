import { shallowMount, createLocalVue } from '@vue/test-utils'

import { user } from '@/user'
import Vuex from 'vuex'
import SelectTravel from './SelectTravel.vue'

const localVue = createLocalVue()

localVue.use(Vuex)

let store = new Vuex.Store({
  state: {
    user: user
  }
})

const wrapper = shallowMount(SelectTravel, { localVue, store })

describe('SelectTravel', () => {
  it('is SelectTravel a vue instance', () => {
    expect(wrapper.exists()).toBeTruthy()
  })
})
