import { shallowMount, createLocalVue } from '@vue/test-utils'

import { user } from '@/user'
import Vuex from 'vuex'
import SelectHobby from './SelectHobby.vue'

const localVue = createLocalVue()

localVue.use(Vuex)

let store = new Vuex.Store({
  state: {
    user: user
  }
})

const wrapper = shallowMount(SelectHobby, { localVue, store })

describe('SelectHobby', () => {
  it('is SelectHobby a vue instance', () => {
    expect(wrapper.exists()).toBeTruthy()
  })
})
