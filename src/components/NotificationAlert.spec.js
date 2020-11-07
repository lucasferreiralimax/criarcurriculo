import { shallowMount, createLocalVue } from '@vue/test-utils'

import Vuex from 'vuex'
import NotificationAlert from './NotificationAlert.vue'

const localVue = createLocalVue()

localVue.use(Vuex)

let store = new Vuex.Store({
  state: {
    errors: []
  }
})

const wrapper = shallowMount(NotificationAlert, { store, localVue })

describe('NotificationAlert', () => {
  it('is NotificationAlert a vue instance', () => {
    expect(wrapper.exists()).toBeTruthy()
  })
})
