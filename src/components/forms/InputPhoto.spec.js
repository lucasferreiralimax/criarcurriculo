import { shallowMount, createLocalVue } from '@vue/test-utils'

import { user } from '@/user'
import Vuex from 'vuex'
import InputPhoto from './InputPhoto.vue'

const localVue = createLocalVue()

localVue.use(Vuex)

let store = new Vuex.Store({
  state: {
    user: user
  }
})

const wrapper = shallowMount(InputPhoto, { localVue, store })

describe('InputPhoto', () => {
  it('is InputPhoto a vue instance', () => {
    expect(wrapper.isVueInstance()).toBe(true)
  })
})
