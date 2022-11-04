import { shallowMount, createLocalVue } from '@vue/test-utils'

import { user } from '@/user'
import { mutations } from '@/mutations'
import Vuex from 'vuex'
import AppSelectHobby from './index.vue'

const localVue = createLocalVue()

localVue.use(Vuex)

let store = new Vuex.Store({
  state: {
    user: user
  },
  mutations: mutations
})

const wrapper = shallowMount(AppSelectHobby, { localVue, store })

describe('AppSelectHobby', () => {
  it('is AppSelectHobby a vue instance', () => {
    expect(wrapper.exists()).toBeTruthy()
  })
})
