import { shallowMount, createLocalVue } from '@vue/test-utils'

import Vuex from 'vuex'
import AppNotificationAlert from './index.vue'

const localVue = createLocalVue()

localVue.use(Vuex)

let store = new Vuex.Store({
  state: {
    errors: []
  }
})

const wrapper = shallowMount(AppNotificationAlert, { store, localVue })

describe('AppNotificationAlert', () => {
  it('is AppNotificationAlert a vue instance', () => {
    expect(wrapper.exists()).toBeTruthy()
  })
})
