import { shallowMount, createLocalVue } from '@vue/test-utils'

import { user } from '@/user'
import Vuex from 'vuex'
import SelectGenre from './index.vue'

const localVue = createLocalVue()

localVue.use(Vuex)

let store = new Vuex.Store({
  state: {
    user: user
  }
})

const wrapper = shallowMount(SelectGenre, { localVue, store })

describe('SelectGenre', () => {
  it('is SelectGenre a vue instance', () => {
    expect(wrapper.exists()).toBeTruthy()
  })
})
