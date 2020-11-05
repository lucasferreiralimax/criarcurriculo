import { shallowMount, createLocalVue } from '@vue/test-utils'

import { user } from '@/user'
import Vuex from 'vuex'
import SelectHobby from './SelectHobby.vue'
import { Tag, Input } from 'element-ui'

const localVue = createLocalVue()

localVue.use(Vuex)
localVue.use(Tag)
localVue.use(Input)

let store = new Vuex.Store({
  state: {
    user: user
  }
})

const wrapper = shallowMount(SelectHobby, { localVue, store })

describe('SelectHobby', () => {
  it('is SelectHobby a vue instance', () => {
    expect(wrapper.exists()).toBeTruthy()
  })
})
