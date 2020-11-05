import { shallowMount, createLocalVue } from '@vue/test-utils'

import { user } from '@/user'
import Vuex from 'vuex'
import Render from './Render.vue'
import draggable from 'vuedraggable'

const localVue = createLocalVue()

localVue.use(Vuex)
localVue.component(draggable.name, draggable)

let store = new Vuex.Store({
  state: {
    user: user,
    icon_render: true
  }
})

const wrapper = shallowMount(Render, { store, localVue })

describe('Render', () => {
  it('is Render a vue instance', () => {
    expect(wrapper.exists()).toBeTruthy()
  })
})
