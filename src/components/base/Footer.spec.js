import { shallowMount } from '@vue/test-utils'

import Footer from './Footer.vue'
import LogoApp from '@/components/base/Logo'

const wrapper = shallowMount(Footer)
const credits = wrapper.find('.credits.L')

describe('Footer', () => {
  it('is Footer a vue instance', () => {
    expect(wrapper.exists()).toBeTruthy()
  })
  it('Footer contains LogoApp', () => {
    expect(wrapper.contains(LogoApp)).toBe(true)
  })
  it('Footer contains credits L', () => {
    expect(credits.exists()).toBe(true)
  })
})
