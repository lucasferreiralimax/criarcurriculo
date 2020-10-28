import { shallowMount, createLocalVue } from '@vue/test-utils'

import { user } from '@/user'
import Vuex from 'vuex'
import SelectCountry from './SelectCountry.vue'

const localVue = createLocalVue()

localVue.use(Vuex)

let store = new Vuex.Store({
  state: {
    user: user
  }
})

const wrapper = shallowMount(SelectCountry, { localVue, store })

describe('SelectCountry', () => {
  it('is SelectCountry a vue instance', () => {
    expect(wrapper.isVueInstance()).toBe(true)
  })
})
