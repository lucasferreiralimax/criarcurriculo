import { shallowMount, RouterLinkStub, createLocalVue } from '@vue/test-utils'

import { mutations } from '@/mutations'
import Vuex from 'vuex'
import Navigation from './index.vue'

const localVue = createLocalVue()

localVue.use(Vuex)

let store = new Vuex.Store({
  state: {
    lang: 'pt-BR'
  },
  mutations: mutations
})

const wrapper = shallowMount(Navigation, {
  store, localVue,
  stubs: {
    RouterLink: RouterLinkStub
  },
})

describe('Navigation', () => {
  it('is Navigation a vue instance', () => {
    expect(wrapper.exists()).toBeTruthy()
  })
  it('Navigation contains itens menu', () => {
    expect(wrapper.findAll('a.btn').exists()).toBeTruthy()
  })
  it('Navigation show menu hidden or disable', () => {
    expect(wrapper.vm.menu_show).toBeFalsy()
  })
  it('Navigation show menu', () => {
    wrapper.find('.btn.menu').trigger('click')
    expect(wrapper.vm.menu_show).toBeTruthy()
  })
})
