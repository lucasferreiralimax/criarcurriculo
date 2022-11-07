import { shallowMount, createLocalVue } from '@vue/test-utils'

import { mutations } from '@/store/mutations'
import Vuex from 'vuex'
import AppFooter from './index.vue'
import AppLogo from '@/components/base/app-logo'

const localVue = createLocalVue()

localVue.use(Vuex)

let store = new Vuex.Store({
  state: {
    home_app: false
  },
  mutations: mutations
})

const wrapper = shallowMount(AppFooter, { store, localVue })
const credits = wrapper.find('.credits.L')

describe('AppFooter', () => {
  it('is Footer a vue instance', () => {
    expect(wrapper.exists()).toBeTruthy()
  })
  it('AppFooter contains AppLogo', () => {
    expect(wrapper.findComponent(AppLogo).exists()).toBeTruthy()
  })
})
