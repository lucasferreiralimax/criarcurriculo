import { shallowMount, createLocalVue } from '@vue/test-utils'

import { user } from '@/user'
import { mutations } from '@/mutations'
import Vuex from 'vuex'
import FormCurriculo from './FormCurriculo.vue'

const localVue = createLocalVue()

localVue.use(Vuex)

let store = new Vuex.Store({
  state: {
    user: user,
    errors: []
  },
  mutations: mutations
})

const wrapper = shallowMount(FormCurriculo, { store, localVue })

describe('FormCurriculo', () => {
  it('is FormCurriculo a vue instance', () => {
    expect(wrapper.isVueInstance()).toBe(true)
  })
})
