import { shallowMount } from '@vue/test-utils'

import Layout from './Layout.vue'

const wrapper = shallowMount(Layout)

describe('Layout', () => {
  it('is Layout a vue instance', () => {
    expect(wrapper.exists()).toBeTruthy()
  })
})
