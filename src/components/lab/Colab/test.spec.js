import { shallowMount } from '@vue/test-utils'

import Colab from './index.vue'

const wrapper = shallowMount(Colab)

describe('Colab', () => {
  it('is Colab a vue instance', () => {
    expect(wrapper.exists()).toBeTruthy()
  })
})
