import { shallowMount } from '@vue/test-utils'

import Colab from './Colab.vue'

const wrapper = shallowMount(Colab)

describe('Colab', () => {
  it('is Colab a vue instance', () => {
    expect(wrapper.exists()).toBeTruthy()
  })
})
