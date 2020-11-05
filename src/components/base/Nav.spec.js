import { shallowMount, RouterLinkStub } from '@vue/test-utils'

import Nav from './Nav.vue'

const wrapper = shallowMount(Nav, {
  stubs: {
    RouterLink: RouterLinkStub
  }
})

describe('Nav', () => {
  it('is Nav a vue instance', () => {
    expect(wrapper.exists()).toBeTruthy()
  })
  it('Nav contains itens menu', () => {
    expect(wrapper.findAll('a.btn').exists()).toBe(true)
  })
  it('Nav show menu hidden or disable', () => {
    expect(wrapper.vm.menu_show).toBe(false)
  })
  it('Nav show menu', () => {
    wrapper.find('.btn.menu').trigger('click')
    expect(wrapper.vm.menu_show).toBe(true)
  })
})
