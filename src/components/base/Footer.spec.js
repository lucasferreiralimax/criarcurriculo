import { shallowMount } from '@vue/test-utils'

import Footer from './Footer.vue'

const wrapper = shallowMount(Footer)

describe('Footer', () => {
  it('is Footer a vue instance', () => {
    expect(wrapper.isVueInstance()).toBe(true)
  })
})
