import { shallowMount, createLocalVue } from '@vue/test-utils'

import { mutations } from '@/mutations'
import Vuex from 'vuex'
import Theme from './index.vue'

const localVue = createLocalVue()

localVue.use(Vuex)

let store = new Vuex.Store({
  state: {
    theme_app: 'default'
  },
  mutations: mutations
})

const wrapper = shallowMount(Theme, { store, localVue })

describe('Theme', () => {
  it('is Theme a vue instance', () => {
    expect(wrapper.exists()).toBeTruthy()
  })
})
