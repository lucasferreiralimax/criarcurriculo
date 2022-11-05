import { shallowMount, createLocalVue } from '@vue/test-utils'

import { mutations } from '@/mutations'
import Vuex from 'vuex'
import AppLayout from './index.vue'

const localVue = createLocalVue()

localVue.use(Vuex)

let store = new Vuex.Store({
  state: {
    layout_render: 'layout-default'
  },
  mutations: mutations
})

const wrapper = shallowMount(AppLayout, { store, localVue })

describe('AppLayout', () => {
  it('is AppLayout a vue instance', () => {
    expect(wrapper.exists()).toBeTruthy()
  })
})
