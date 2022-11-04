import { shallowMount, createLocalVue } from '@vue/test-utils'

import { user } from '@/user'
import Vuex from 'vuex'
import TextareaApp from './index.vue'

const localVue = createLocalVue()

localVue.use(Vuex)

let store = new Vuex.Store({
  state: {
    user: user
  }
})

const wrapper = shallowMount(TextareaApp, { localVue, store })

describe('TextareaApp', () => {
  it('is TextareaApp a vue instance', () => {
    expect(wrapper.exists()).toBeTruthy()
  })
})
