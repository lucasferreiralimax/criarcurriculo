import { shallowMount, createLocalVue } from '@vue/test-utils'

import { user } from '@/user'
import Vuex from 'vuex'
import ActionsCurriculo from './ActionsCurriculo.vue'

const localVue = createLocalVue()

localVue.use(Vuex)

let store = new Vuex.Store({
  state: {
    user: user
  }
})

const wrapper = shallowMount(ActionsCurriculo, { store, localVue })

describe('ActionsCurriculo', () => {
  it('is ActionsCurriculo a vue instance', () => {
    expect(wrapper.exists()).toBeTruthy()
  })
})
