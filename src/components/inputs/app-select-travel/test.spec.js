import { shallowMount, createLocalVue } from '@vue/test-utils'

import { user } from '@/store/user'
import Vuex from 'vuex'
import AppSelectTravel from './index.vue'

const localVue = createLocalVue()

localVue.use(Vuex)

let store = new Vuex.Store({
  state: {
    user: user
  }
})

const wrapper = shallowMount(AppSelectTravel, { localVue, store })

describe('AppSelectTravel', () => {
  it('is AppSelectTravel a vue instance', () => {
    expect(wrapper.exists()).toBeTruthy()
  })
})
