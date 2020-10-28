import { shallowMount, createLocalVue } from '@vue/test-utils'

import { user } from '@/user'
import Vuex from 'vuex'
import SelectGenre from './SelectGenre.vue'
import { Select, Option } from 'element-ui'

const localVue = createLocalVue()

localVue.use(Vuex)
localVue.use(Select)
localVue.use(Option)

let store = new Vuex.Store({
  state: {
    user: user
  }
})

const wrapper = shallowMount(SelectGenre, { localVue, store })

describe('SelectGenre', () => {
  it('is SelectGenre a vue instance', () => {
    expect(wrapper.isVueInstance()).toBe(true)
  })
})
