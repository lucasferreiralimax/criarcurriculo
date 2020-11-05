import { shallowMount, createLocalVue } from '@vue/test-utils'

import { user } from '@/user'
import { mutations } from '@/mutations'
import Vuex from 'vuex'
import Accounts from './Accounts.vue'
import draggable from 'vuedraggable'

const localVue = createLocalVue()
localVue.component(draggable.name, draggable)

localVue.use(Vuex)

let store = new Vuex.Store({
  state: {
    user: user
  },
  mutations: mutations
})

const wrapper = shallowMount(Accounts, { store, localVue })

describe('Accounts', () => {
  it('is Accounts a vue instance', () => {
    expect(wrapper.exists()).toBeTruthy()
  })
})
