import { shallowMount, RouterLinkStub, createLocalVue } from '@vue/test-utils'

import { mutations } from '@/mutations'
import Vuex from 'vuex'
import Nav from './Nav.vue'

const localVue = createLocalVue()

localVue.use(Vuex)

let store = new Vuex.Store({
  state: {
    lang: 'pt-BR'
  },
  mutations: mutations
})

const wrapper = shallowMount(Nav, {
  store, localVue,
  stubs: {
    RouterLink: RouterLinkStub
  },
})

describe('Nav', () => {
  it('is Nav a vue instance', () => {
    expect(wrapper.exists()).toBeTruthy()
  })
  it('Nav contains itens menu', () => {
    expect(wrapper.findAll('a.btn').exists()).toBeTruthy()
  })
  it('Nav show menu hidden or disable', () => {
    expect(wrapper.vm.menu_show).toBeFalsy()
  })
  it('Nav show menu', () => {
    wrapper.find('.btn.menu').trigger('click')
    expect(wrapper.vm.menu_show).toBeTruthy()
  })
})
