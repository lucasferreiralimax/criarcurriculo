import { shallowMount, createLocalVue } from '@vue/test-utils'

import { user } from '@/store/user'
import Vuex from 'vuex'
import RenderPrint from './index.vue'

const localVue = createLocalVue()

localVue.use(Vuex)

let store = new Vuex.Store({
  state: {
    user: user,
    icon_renderPrint: true
  }
})

const wrapper = shallowMount(RenderPrint, { store, localVue })

describe('RenderPrint', () => {
  it('is RenderPrint a vue instance', () => {
    expect(wrapper.exists()).toBeTruthy()
  })
})
