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
    expect(wrapper.contains(LogoApp)).toBe(true)
  })
  it('Header contains NavMenu', () => {
    expect(wrapper.contains(NavMenu)).toBe(true)
  })
  it('Header contains Pluralization', () => {
    expect(wrapper.contains(Pluralization)).toBe(true)
  })
  it('Header contains ThemeApp', () => {
    expect(wrapper.contains(ThemeApp)).toBe(true)
  })
  it('Header contains ScrollPage', () => {
    expect(wrapper.contains(ScrollPage)).toBe(true)
  })
})
