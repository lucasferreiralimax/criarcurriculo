import { shallowMount, createLocalVue } from '@vue/test-utils'

import { mutations } from '@/mutations'
import Vuex from 'vuex'
import ThemeApp from './ThemeApp.vue'

const localVue = createLocalVue()

localVue.use(Vuex)

let store = new Vuex.Store({
  state: {
    theme_app: 'default'
  },
  mutations: mutations
})

const wrapper = shallowMount(ThemeApp, { store, localVue })

describe('ThemeApp', () => {
  it('is ThemeApp a vue instance', () => {
    expect(wrapper.isVueInstance()).toBe(true)
  })
})
