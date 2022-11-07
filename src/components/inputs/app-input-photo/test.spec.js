import { shallowMount, createLocalVue } from '@vue/test-utils'

import { user } from '@/store/user'
import Vuex from 'vuex'
import AppInputPhoto from './index.vue'

const localVue = createLocalVue()

localVue.use(Vuex)

let store = new Vuex.Store({
  state: {
    user: user
  }
})

const wrapper = shallowMount(AppInputPhoto, { localVue, store })

describe('AppInputPhoto', () => {
  it('is AppInputPhoto a vue instance', () => {
    expect(wrapper.exists()).toBeTruthy()
  })
})
