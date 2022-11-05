import { shallowMount } from '@vue/test-utils'

import AppHeader from './index.vue'
import AppLogo from '@/components/base/app-logo'
import AppNavigation from '@/components/base/app-navigation'
import AppLocalization from '@/components/lab/app-localization'
import AppTheme from '@/components/lab/app-theme'
import AppScrollPage from '@/components/lab/app-scroll-page'

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
  it('Header contains AppLocalization', () => {
    expect(wrapper.findComponent(AppLocalization).exists()).toBeTruthy()
  })
  it('Header contains AppTheme', () => {
    expect(wrapper.findComponent(AppTheme).exists()).toBeTruthy()
  })
  it('Header contains AppScrollPage', () => {
    expect(wrapper.findComponent(AppScrollPage).exists()).toBeTruthy()
  })
})
