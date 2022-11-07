import { shallowMount, createLocalVue } from '@vue/test-utils'

import { user } from '@/store/user'
import Vuex from 'vuex'
import AppInputCrud from './index.vue'

const localVue = createLocalVue()

localVue.use(Vuex)

let store = new Vuex.Store({
  state: {
    user: user
  }
})

const wrapper = shallowMount(AppInputCrud, { localVue, store })

describe('AppInputCrud', () => {
  it('is AppInputCrud a vue instance', () => {
    expect(wrapper.exists()).toBeTruthy()
  })
})
