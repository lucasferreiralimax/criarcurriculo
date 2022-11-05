import { shallowMount, createLocalVue } from '@vue/test-utils'

import { mutations } from '@/mutations'
import Vuex from 'vuex'
import AppTheme from './index.vue'

const localVue = createLocalVue()

localVue.use(Vuex)

let store = new Vuex.Store({
  state: {
    theme_app: 'default'
  },
  mutations: mutations
})

const wrapper = shallowMount(AppTheme, { store, localVue })

describe('AppTheme', () => {
  it('is AppTheme a vue instance', () => {
    expect(wrapper.exists()).toBeTruthy()
  })
})
