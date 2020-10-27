import { shallowMount, createLocalVue } from '@vue/test-utils'

import { user } from '@/user'
import Vuex from 'vuex'
import BoxCurriculo from './BoxCurriculo.vue'

const localVue = createLocalVue()

localVue.use(Vuex)

let store = new Vuex.Store({
  state: {
    user: user
  }
})

const wrapper = shallowMount(BoxCurriculo, { store, localVue })

describe('BoxCurriculo', () => {
  it('is BoxCurriculo a vue instance', () => {
    expect(wrapper.isVueInstance()).toBe(true)
  })
})
