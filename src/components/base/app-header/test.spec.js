import { shallowMount } from '@vue/test-utils'

import AppHeader from './index.vue'
import AppLogo from '@/components/base/app-logo'
import AppNavigation from '@/components/base/app-navigation'
import Localization from '@/components/lab/localization'
import Theme from '@/components/lab/theme'
import ScrollPage from '@/components/lab/scroll-page'

const wrapper = shallowMount(AppHeader)

describe('Header', () => {
  it('is Header a vue instance', () => {
    expect(wrapper.exists()).toBeTruthy()
  })
  it('Header contains AppLogo', () => {
    expect(wrapper.findComponent(AppLogo).exists()).toBeTruthy()
  })
  it('Header contains AppNavigation', () => {
    expect(wrapper.findComponent(AppNavigation).exists()).toBeTruthy()
  })
  it('Header contains Localization', () => {
    expect(wrapper.findComponent(Localization).exists()).toBeTruthy()
  })
  it('Header contains ThemeApp', () => {
    expect(wrapper.findComponent(Theme).exists()).toBeTruthy()
  })
  it('Header contains ScrollPage', () => {
    expect(wrapper.findComponent(ScrollPage).exists()).toBeTruthy()
  })
})
