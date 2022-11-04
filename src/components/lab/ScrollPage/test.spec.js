import { shallowMount } from '@vue/test-utils'

import ScrollPage from './index.vue'

const wrapper = shallowMount(ScrollPage)

describe('ScrollPage', () => {
  it('is ScrollPage a vue instance', () => {
    expect(wrapper.exists()).toBeTruthy()
  })
})
