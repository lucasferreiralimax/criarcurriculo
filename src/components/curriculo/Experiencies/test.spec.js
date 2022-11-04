import { shallowMount, createLocalVue } from '@vue/test-utils'

import { user } from '@/user'
import Vuex from 'vuex'
import Experiencies from './index.vue'

const localVue = createLocalVue()

localVue.use(Vuex)

let store = new Vuex.Store({
  state: {
    user: user
  }
})

const wrapper = shallowMount(Experiencies, { store, localVue })

describe('Experiencies', () => {
  it('is Experiencies a vue instance', () => {
    expect(wrapper.exists()).toBeTruthy()
  })
})
