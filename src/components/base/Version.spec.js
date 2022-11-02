import { shallowMount } from '@vue/test-utils'

import Version from './Version.vue'
import pkg from '../../../package.json'

const wrapper = shallowMount(Version)

describe('Version', () => {
  it('is Version a vue instance', () => {
    expect(wrapper.exists()).toBeTruthy()
  })
  it('Version contains number', () => {
    expect(wrapper.vm.version).toBe(pkg.version)
  })
})
