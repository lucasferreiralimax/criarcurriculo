import { shallowMount, createLocalVue } from '@vue/test-utils'

import { user } from '@/store/user'
import Vuex from 'vuex'
import Box from './index.vue'

const localVue = createLocalVue()

localVue.use(Vuex)

let store = new Vuex.Store({
  state: {
    user: user
  }
})

const wrapper = shallowMount(Box, { store, localVue })

describe('Box', () => {
  it('is Box a vue instance', () => {
    expect(wrapper.exists()).toBeTruthy()
  })
})
