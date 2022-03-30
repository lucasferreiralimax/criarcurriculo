import { shallowMount, createLocalVue } from '@vue/test-utils'

import { user } from '@/user'
import { mutations } from '@/mutations'
import Vuex from 'vuex'
import SelectHobby from './SelectHobby.vue'

const localVue = createLocalVue()

localVue.use(Vuex)

let store = new Vuex.Store({
  state: {
    user: user
  },
  mutations: mutations
})

const wrapper = shallowMount(SelectHobby, { localVue, store })

describe('SelectHobby', () => {
  it('is SelectHobby a vue instance', () => {
    expect(wrapper.exists()).toBeTruthy()
  })
})
