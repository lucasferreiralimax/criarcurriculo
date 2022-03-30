import { shallowMount, RouterLinkStub } from '@vue/test-utils'

import NotFound from './NotFound.vue'

const wrapper = shallowMount(NotFound, {
  stubs: {
    RouterLink: RouterLinkStub
  }
})

describe('NotFound', () => {
  it('is NotFound a vue instance', () => {
    expect(wrapper.exists()).toBeTruthy()
  })
})
