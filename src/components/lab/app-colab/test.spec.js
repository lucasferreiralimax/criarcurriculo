import { shallowMount } from '@vue/test-utils'

import AppColab from './index.vue'

const wrapper = shallowMount(AppColab)

describe('AppColab', () => {
  it('is AppColab a vue instance', () => {
    expect(wrapper.exists()).toBeTruthy()
  })
})
