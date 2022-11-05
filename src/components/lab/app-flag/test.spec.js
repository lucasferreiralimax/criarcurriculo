import { shallowMount } from '@vue/test-utils'

import AppFlag from './index.vue'

const wrapper = shallowMount(AppFlag)

import { list_languages } from '@/i18n/list_languages'

let flags = list_languages

describe('AppFlag', () => {
  it('is AppFlag a vue instance', () => {
    expect(wrapper.exists()).toBeTruthy()
  })
  for(let flag in flags) {
    it(`AppFlag ${list_languages[flag][0]}`, async () => {
      await wrapper.setProps({ type: list_languages[flag][1] })
      expect(wrapper.vm.type).toContain(list_languages[flag][1])
      expect(wrapper.find(`.flag img[alt="${list_languages[flag][0]}"]`).exists()).toBeTruthy()
    })
  }
})
