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
    expect(wrapper.findComponent(LogoApp).exists()).toBeTruthy()
  })
  it('Footer contains credits L', () => {
    expect(credits.exists()).toBeTruthy()
  })
})
