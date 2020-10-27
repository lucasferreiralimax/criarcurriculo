import { shallowMount, createLocalVue } from '@vue/test-utils'

import { user } from '@/user'
import Vuex from 'vuex'
import Coursers from './Coursers.vue'
import draggable from 'vuedraggable'

const localVue = createLocalVue()

localVue.use(Vuex)
localVue.component(draggable.name, draggable)

let store = new Vuex.Store({
  state: {
    user: user
  }
})

const wrapper = shallowMount(Coursers, { store, localVue })

describe('Coursers', () => {
  it('is Coursers a vue instance', () => {
    expect(wrapper.isVueInstance()).toBe(true)
  })
})
