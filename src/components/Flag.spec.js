import { shallowMount } from '@vue/test-utils'

import Flag from './Flag.vue'

const wrapper = shallowMount(Flag)

describe('Flag', () => {
  it('is Flag a vue instance', () => {
    expect(wrapper.exists()).toBeTruthy()
  })
  it('Flag Brasil', async () => {
    await wrapper.setProps({ type: 'pt-BR' })
    expect(wrapper.vm.type).toBe('pt-BR')
    expect(wrapper.find('.flag img[alt="Brasil"]').exists()).toBe(true)
  })
  it('Flag Arábia', async () => {
    await wrapper.setProps({ type: 'ar-SA' })
    expect(wrapper.vm.type).toBe('ar-SA')
    expect(wrapper.find('.flag img[alt="Arábia"]').exists()).toBe(true)
  })
  it('Flag United States', async () => {
    await wrapper.setProps({ type: 'en-US' })
    expect(wrapper.vm.type).toBe('en-US')
    expect(wrapper.find('.flag img[alt="United States"]').exists()).toBe(true)
  })
  it('Flag Spain', async () => {
    await wrapper.setProps({ type: 'es-ES' })
    expect(wrapper.vm.type).toBe('es-ES')
    expect(wrapper.find('.flag img[alt="Spain"]').exists()).toBe(true)
  })
  it('Flag Català', async () => {
    await wrapper.setProps({ type: 'es-CA' })
    expect(wrapper.vm.type).toBe('es-CA')
    expect(wrapper.find('.flag img[alt="Català"]').exists()).toBe(true)
  })
  it('Flag Russia', async () => {
    await wrapper.setProps({ type: 'ru-RU' })
    expect(wrapper.vm.type).toBe('ru-RU')
    expect(wrapper.find('.flag img[alt="Russia"]').exists()).toBe(true)
  })
  it('Flag India', async () => {
    await wrapper.setProps({ type: 'in-ID' })
    expect(wrapper.vm.type).toBe('in-ID')
    expect(wrapper.find('.flag img[alt="India"]').exists()).toBe(true)
  })
  it('Flag Japan', async () => {
    await wrapper.setProps({ type: 'ja-JP' })
    expect(wrapper.vm.type).toBe('ja-JP')
    expect(wrapper.find('.flag img[alt="Japan"]').exists()).toBe(true)
  })
  it('Flag França', async () => {
    await wrapper.setProps({ type: 'fr-FR' })
    expect(wrapper.vm.type).toBe('fr-FR')
    expect(wrapper.find('.flag img[alt="França"]').exists()).toBe(true)
  })
  it('Flag Turquia', async () => {
    await wrapper.setProps({ type: 'tr-TR' })
    expect(wrapper.vm.type).toBe('tr-TR')
    expect(wrapper.find('.flag img[alt="Turquia"]').exists()).toBe(true)
  })
  it('Flag China', async () => {
    await wrapper.setProps({ type: 'ch-ZH' })
    expect(wrapper.vm.type).toBe('ch-ZH')
    expect(wrapper.find('.flag img[alt="China"]').exists()).toBe(true)
  })
  it('Flag Alemanha', async () => {
    await wrapper.setProps({ type: 'al-DE' })
    expect(wrapper.vm.type).toBe('al-DE')
    expect(wrapper.find('.flag img[alt="Alemanha"]').exists()).toBe(true)
  })
  it('Flag Italia', async () => {
    await wrapper.setProps({ type: 'it-IT' })
    expect(wrapper.vm.type).toBe('it-IT')
    expect(wrapper.find('.flag img[alt="Italia"]').exists()).toBe(true)
  })
  it('Flag Grecia', async () => {
    await wrapper.setProps({ type: 'gr-GK' })
    expect(wrapper.vm.type).toBe('gr-GK')
    expect(wrapper.find('.flag img[alt="Grecia"]').exists()).toBe(true)
  })
  it('Flag Vietnã', async () => {
    await wrapper.setProps({ type: 'vn-VT' })
    expect(wrapper.vm.type).toBe('vn-VT')
    expect(wrapper.find('.flag img[alt="Vietnã"]').exists()).toBe(true)
  })
  it('Flag Tailand', async () => {
    await wrapper.setProps({ type: 'tl-TD' })
    expect(wrapper.vm.type).toBe('tl-TD')
    expect(wrapper.find('.flag img[alt="Tailand"]').exists()).toBe(true)
  })
  it('Flag Holandes', async () => {
    await wrapper.setProps({ type: 'nl-HL' })
    expect(wrapper.vm.type).toBe('nl-HL')
    expect(wrapper.find('.flag img[alt="Holandes"]').exists()).toBe(true)
  })
  it('Flag Noruegues', async () => {
    await wrapper.setProps({ type: 'nl-NL' })
    expect(wrapper.vm.type).toBe('nl-NL')
    expect(wrapper.find('.flag img[alt="Noruegues"]').exists()).toBe(true)
  })
  it('Flag Ungáiris', async () => {
    await wrapper.setProps({ type: 'hu-RV' })
    expect(wrapper.vm.type).toBe('hu-RV')
    expect(wrapper.find('.flag img[alt="Ungáiris"]').exists()).toBe(true)
  })
  it('Flag Ireland', async () => {
    await wrapper.setProps({ type: 'ir-IS' })
    expect(wrapper.vm.type).toBe('ir-IS')
    expect(wrapper.find('.flag img[alt="Ireland"]').exists()).toBe(true)
  })
})
