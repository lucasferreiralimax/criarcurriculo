import { shallowMount } from '@vue/test-utils'

import Flag from './Flag.vue'

const wrapper = shallowMount(Flag)

let flags = [
  { name: 'Brasil',        type: 'pt-BR' },
  { name: 'United States', type: 'en-US' },
  { name: 'Spain',         type: 'es-ES' },
  { name: 'Arábia',        type: 'ar-SA' },
  { name: 'Català',        type: 'es-CA' },
  { name: 'Russia',        type: 'ru-RU' },
  { name: 'India',         type: 'in-ID' },
  { name: 'Japan',         type: 'ja-JP' },
  { name: 'França',        type: 'fr-FR' },
  { name: 'Turquia',       type: 'tr-TR' },
  { name: 'China',         type: 'ch-ZH' },
  { name: 'Alemanha',      type: 'al-DE' },
  { name: 'Grecia',        type: 'gr-GK' },
  { name: 'Vietnã',        type: 'vn-VT' },
  { name: 'Tailand',       type: 'tl-TD' },
  { name: 'Holandes',      type: 'nl-HL' },
  { name: 'Noruegues',     type: 'nl-NL' },
  { name: 'Ungáiris',      type: 'hu-RV' },
  { name: 'Ireland',       type: 'ir-IS' }
]

describe('Flag', () => {
  it('is Flag a vue instance', () => {
    expect(wrapper.exists()).toBeTruthy()
  })
  for(let flag of flags) {
    it(`Flag ${flag.name}`, async () => {
      await wrapper.setProps({ type: flag.type })
      expect(wrapper.vm.type).toContain(flag.type)
      expect(wrapper.find(`.flag img[alt="${flag.name}"]`).exists()).toBeTruthy()
    })
  }
})
