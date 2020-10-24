import { shallowMount, RouterLinkStub } from '@vue/test-utils'

import Nav from './Nav.vue'

const wrapper = shallowMount(Nav, {
  stubs: {
    RouterLink: RouterLinkStub
  }
})

describe('Nav', () => {
  it('is Nav a vue instance', () => {
    expect(wrapper.isVueInstance()).toBe(true)
  })
})
