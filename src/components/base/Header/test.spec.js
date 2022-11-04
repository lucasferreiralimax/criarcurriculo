import { shallowMount } from '@vue/test-utils'

import Header from './index.vue'
import LogoApp from '@/components/base/Logo'
import NavMenu from '@/components/base/Navigation'
import Localization from '@/components/lab/Localization'
import ThemeApp from '@/components/lab/ThemeApp'
import ScrollPage from '@/components/lab/ScrollPage'

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
  it('Header contains Localization', () => {
    expect(wrapper.findComponent(Localization).exists()).toBeTruthy()
  })
  it('Header contains ThemeApp', () => {
    expect(wrapper.findComponent(ThemeApp).exists()).toBeTruthy()
  })
  it('Header contains ScrollPage', () => {
    expect(wrapper.findComponent(ScrollPage).exists()).toBeTruthy()
  })
})
