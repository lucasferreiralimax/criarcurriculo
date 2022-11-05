import { shallowMount } from '@vue/test-utils'

import AppScrollPage from './index.vue'

const wrapper = shallowMount(AppScrollPage)

describe('AppScrollPage', () => {
  it('is AppScrollPage a vue instance', () => {
    expect(wrapper.exists()).toBeTruthy()
  })
})
