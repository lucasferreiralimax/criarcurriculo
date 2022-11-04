import { shallowMount } from '@vue/test-utils'

import Colab from './index.vue'

const wrapper = shallowMount(Colab)

describe('Colab', () => {
  it('is Colab a vue instance', () => {
    expect(wrapper.exists()).toBeTruthy()
  })
  it('link to Github', () => {
    expect(wrapper.find('a').exists()).toBeTruthy()
    expect(wrapper.find('a').attributes('href')).toBe('https://github.com/lucasferreiralimax/criarcurriculo')
  })
})
