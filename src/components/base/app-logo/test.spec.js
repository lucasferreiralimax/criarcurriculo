import { shallowMount } from '@vue/test-utils'

import Logo from './index.vue'

const wrapper = shallowMount(Logo)

describe('Logo', () => {
  it('is Logo a vue instance', () => {
    expect(wrapper.exists()).toBeTruthy()
  })
})
