import { shallowMount } from '@vue/test-utils'

import AppVersion from './index.vue'
import pkg from '../../../../package.json'

const wrapper = shallowMount(AppVersion)

describe('AppVersion', () => {
  it('is AppVersion a vue instance', () => {
    expect(wrapper.exists()).toBeTruthy()
  })
  it('AppVersion contains number', () => {
    expect(wrapper.vm.version).toBe(pkg.version)
  })
})
