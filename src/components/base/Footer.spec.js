import { shallowMount, createLocalVue } from '@vue/test-utils'

import { mutations } from '@/mutations'
import Vuex from 'vuex'
import Footer from './Footer.vue'
import LogoApp from '@/components/base/Logo'

const localVue = createLocalVue()

localVue.use(Vuex)

let store = new Vuex.Store({
  state: {
    home_app: false
  },
  mutations: mutations
})

const wrapper = shallowMount(Footer, { store, localVue })
const credits = wrapper.find('.credits.L')

describe('Footer', () => {
  it('is Footer a vue instance', () => {
    expect(wrapper.exists()).toBeTruthy()
  })
  it('Footer contains LogoApp', () => {
    expect(wrapper.findComponent(LogoApp).exists()).toBeTruthy()
  })
})
