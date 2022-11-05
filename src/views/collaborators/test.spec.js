import { shallowMount } from '@vue/test-utils'

import Collaborators from './Collaborators.vue'

const wrapper = shallowMount(Collaborators)

describe('Collaborators', () => {
  it('is Collaborators a vue instance', () => {
    expect(wrapper.exists()).toBeTruthy()
  })
  it('link to Github', () => {
    expect(wrapper.find('a').exists()).toBeTruthy()
    expect(wrapper.find('a').attributes('href')).toBe('https://github.com/lucasferreiralimax/criarcurriculo')
  })
})
