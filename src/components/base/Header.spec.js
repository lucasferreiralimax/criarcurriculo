import { shallowMount } from '@vue/test-utils'

import Header from './Header.vue'
import LogoApp from '@/components/base/Logo'
import NavMenu from '@/components/base/Nav'
import Pluralization from '@/components/Pluralization'
import ThemeApp from '@/components/ThemeApp'
import ScrollPage from '@/components/ScrollPage'

const wrapper = shallowMount(Header)

describe('Header', () => {
  it('is Header a vue instance', () => {
    expect(wrapper.exists()).toBeTruthy()
  })
  it('Header contains LogoApp', () => {
    expect(wrapper.findComponent(LogoApp).exists()).toBeTruthy()
  })
  it('Header contains NavMenu', () => {
    expect(wrapper.findComponent(NavMenu).exists()).toBeTruthy()
  })
  it('Header contains Pluralization', () => {
    expect(wrapper.findComponent(Pluralization).exists()).toBeTruthy()
  })
  it('Header contains ThemeApp', () => {
    expect(wrapper.findComponent(ThemeApp).exists()).toBeTruthy()
  })
  it('Header contains ScrollPage', () => {
    expect(wrapper.findComponent(ScrollPage).exists()).toBeTruthy()
  })
})
