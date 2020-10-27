import { shallowMount } from '@vue/test-utils'

import Pluralization from './Pluralization.vue'

const wrapper = shallowMount(Pluralization)

describe('Pluralization', () => {
  it('is Pluralization a vue instance', () => {
    expect(wrapper.isVueInstance()).toBe(true)
  })
})
