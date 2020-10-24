import { shallowMount } from '@vue/test-utils'

import Header from './Header.vue'

const wrapper = shallowMount(Header)

describe('Header', () => {
  it('is Header a vue instance', () => {
    expect(wrapper.isVueInstance()).toBe(true)
  })
})
