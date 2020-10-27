import { shallowMount } from '@vue/test-utils'

import Hitech from './Hitech.vue'

const wrapper = shallowMount(Hitech)

describe('Hitech', () => {
  it('is Hitech a vue instance', () => {
    expect(wrapper.isVueInstance()).toBe(true)
  })
})
