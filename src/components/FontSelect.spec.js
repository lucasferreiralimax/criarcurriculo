import { shallowMount, createLocalVue } from '@vue/test-utils'

import FontSelect from './FontSelect.vue'
import { Select, Option } from 'element-ui'

const localVue = createLocalVue()

localVue.use(Select)
localVue.use(Option)

const wrapper = shallowMount(FontSelect, { localVue })

describe('FontSelect', () => {
  it('is FontSelect a vue instance', () => {
    expect(wrapper.exists()).toBeTruthy()
  })
})
