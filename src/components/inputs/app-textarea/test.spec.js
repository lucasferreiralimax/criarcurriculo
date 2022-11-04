import { shallowMount, createLocalVue } from '@vue/test-utils'

import { user } from '@/user'
import Vuex from 'vuex'
import AppTextarea from './index.vue'

const localVue = createLocalVue()

localVue.use(Vuex)

let store = new Vuex.Store({
  state: {
    user: user
  }
})

const wrapper = shallowMount(AppTextarea, { localVue, store })

describe('AppTextarea', () => {
  it('is AppTextarea a vue instance', () => {
    expect(wrapper.exists()).toBeTruthy()
  })
})
