import { shallowMount, createLocalVue } from '@vue/test-utils'

import { user } from '@/user'
import Vuex from 'vuex'
import InputCrud from './InputCrud.vue'
import draggable from 'vuedraggable'

const localVue = createLocalVue()

localVue.use(Vuex)
localVue.component(draggable.name, draggable)

let store = new Vuex.Store({
  state: {
    user: user
  }
})

const wrapper = shallowMount(InputCrud, { localVue, store })

describe('InputCrud', () => {
  it('is InputCrud a vue instance', () => {
    expect(wrapper.exists()).toBeTruthy()
  })
})
