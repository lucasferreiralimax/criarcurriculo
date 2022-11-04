import { shallowMount } from '@vue/test-utils'

import Flag from './index.vue'

const wrapper = shallowMount(Flag)

import { list_languages } from '@/i18n/list_languages'

let flags = list_languages

describe('Flag', () => {
  it('is Flag a vue instance', () => {
    expect(wrapper.exists()).toBeTruthy()
  })
  for(let flag in flags) {
    it(`Flag ${list_languages[flag][0]}`, async () => {
      await wrapper.setProps({ type: list_languages[flag][1] })
      expect(wrapper.vm.type).toContain(list_languages[flag][1])
      expect(wrapper.find(`.flag img[alt="${list_languages[flag][0]}"]`).exists()).toBeTruthy()
    })
  }
})
