import { shallowMount, RouterLinkStub, createLocalVue } from '@vue/test-utils'

import { mutations } from '@/store/mutations'
import Vuex from 'vuex'
import AppNavigation from './index.vue'

const localVue = createLocalVue()

localVue.use(Vuex)

let store = new Vuex.Store({
  state: {
    lang: 'pt-BR'
  },
  mutations: mutations
})

const wrapper = shallowMount(AppNavigation, {
  store, localVue,
  stubs: {
    RouterLink: RouterLinkStub
  },
})

describe('AppNavigation', () => {
  it('is AppNavigation a vue instance', () => {
    expect(wrapper.exists()).toBeTruthy()
  })
  it('AppNavigation contains itens menu', () => {
    expect(wrapper.findAll('a.btn').exists()).toBeTruthy()
  })
  it('AppNavigation show menu hidden or disable', () => {
    expect(wrapper.vm.menu_show).toBeFalsy()
  })
  it('AppNavigation show menu', () => {
    wrapper.find('.btn.menu').trigger('click')
    expect(wrapper.vm.menu_show).toBeTruthy()
  })
})
