import { shallowMount, createLocalVue } from '@vue/test-utils'

import { user } from '@/store/user'
import { mutations } from '@/store/mutations'
import Vuex from 'vuex'
import FormCurriculo from './index.vue'

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
    expect(wrapper.exists()).toBeTruthy()
  })
})
