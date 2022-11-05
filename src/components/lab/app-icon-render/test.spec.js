import { shallowMount, createLocalVue } from '@vue/test-utils'

import { mutations } from '@/mutations'
import Vuex from 'vuex'
import AppIconRender from './index.vue'

const localVue = createLocalVue()

localVue.use(Vuex)

let store = new Vuex.Store({
  state: {
    icon_render: true
  },
  mutations: mutations
})

const wrapper = shallowMount(AppIconRender, { store, localVue })

describe('AppIconRender', () => {
  it('is AppIconRender a vue instance', () => {
    expect(wrapper.exists()).toBeTruthy()
  })
})
