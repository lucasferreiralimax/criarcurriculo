import { shallowMount, createLocalVue } from '@vue/test-utils'

import { mutations } from '@/mutations'
import Vuex from 'vuex'
import Layout from './index.vue'

const localVue = createLocalVue()

localVue.use(Vuex)

let store = new Vuex.Store({
  state: {
    layout_render: 'layout-default'
  },
  mutations: mutations
})

const wrapper = shallowMount(Layout, { store, localVue })

describe('Layout', () => {
  it('is Layout a vue instance', () => {
    expect(wrapper.exists()).toBeTruthy()
  })
})
