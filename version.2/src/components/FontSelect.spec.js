import { shallowMount, createLocalVue } from '@vue/test-utils'

import FontSelect from './FontSelect.vue'

const localVue = createLocalVue()

const wrapper = shallowMount(FontSelect, { localVue })

describe('FontSelect', () => {
  it('is FontSelect a vue instance', () => {
    expect(wrapper.exists()).toBeTruthy()
  })
})
