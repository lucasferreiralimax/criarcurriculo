import { shallowMount } from '@vue/test-utils'

import Flag from './Flag.vue'

const wrapper = shallowMount(Flag)

describe('Flag', () => {
  it('is Flag a vue instance', () => {
    expect(wrapper.isVueInstance()).toBe(true)
  })
})
