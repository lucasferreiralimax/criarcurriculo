import { shallowMount, createLocalVue } from '@vue/test-utils'

import AppFontSelect from './index.vue'

const localVue = createLocalVue()

const wrapper = shallowMount(AppFontSelect, { localVue })

describe('AppFontSelect', () => {
  it('is AppFontSelect a vue instance', () => {
    expect(wrapper.exists()).toBeTruthy()
  })
})
