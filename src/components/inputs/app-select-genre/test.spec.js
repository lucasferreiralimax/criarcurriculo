import { shallowMount, createLocalVue } from '@vue/test-utils'

import { user } from '@/user'
import Vuex from 'vuex'
import AppSelectGenre from './index.vue'

const localVue = createLocalVue()

localVue.use(Vuex)

let store = new Vuex.Store({
  state: {
    user: user
  }
})

const wrapper = shallowMount(AppSelectGenre, { localVue, store })

describe('AppSelectGenre', () => {
  it('is AppSelectGenre a vue instance', () => {
    expect(wrapper.exists()).toBeTruthy()
  })
})
