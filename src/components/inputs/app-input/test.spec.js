import { shallowMount, createLocalVue } from '@vue/test-utils'

import { user } from '@/store/user'
import Vuex from 'vuex'
import AppInput from './index.vue'

const localVue = createLocalVue()

localVue.use(Vuex)

let store = new Vuex.Store({
  state: {
    user: user
  }
})


const wrapper = shallowMount(AppInput, {
  localVue,
  store,
  propsData: {
    value: {
      parent: ''
    }
  }
})

describe('AppInput', () => {
  it('is AppInput a vue instance', () => {
    expect(wrapper.exists()).toBeTruthy()
  })
})
