import { shallowMount } from '@vue/test-utils'

import Flag from './Flag.vue'

const wrapper = shallowMount(Flag)

describe('Flag', () => {
  it('is Flag a vue instance', () => {
    expect(wrapper.exists()).toBeTruthy()
  })
  it('Flag Brasil', async () => {
    await wrapper.setProps({ type: 'pt-BR' })
    expect(wrapper.vm.type).toContain('pt-BR')
    expect(wrapper.find('.flag img[alt="Brasil"]').exists()).toBeTruthy()
  })
  it('Flag Arábia', async () => {
    await wrapper.setProps({ type: 'ar-SA' })
    expect(wrapper.vm.type).toContain('ar-SA')
    expect(wrapper.find('.flag img[alt="Arábia"]').exists()).toBeTruthy()
  })
  it('Flag United States', async () => {
    await wrapper.setProps({ type: 'en-US' })
    expect(wrapper.vm.type).toContain('en-US')
    expect(wrapper.find('.flag img[alt="United States"]').exists()).toBeTruthy()
  })
  it('Flag Spain', async () => {
    await wrapper.setProps({ type: 'es-ES' })
    expect(wrapper.vm.type).toContain('es-ES')
    expect(wrapper.find('.flag img[alt="Spain"]').exists()).toBeTruthy()
  })
  it('Flag Català', async () => {
    await wrapper.setProps({ type: 'es-CA' })
    expect(wrapper.vm.type).toContain('es-CA')
    expect(wrapper.find('.flag img[alt="Català"]').exists()).toBeTruthy()
  })
  it('Flag Russia', async () => {
    await wrapper.setProps({ type: 'ru-RU' })
    expect(wrapper.vm.type).toContain('ru-RU')
    expect(wrapper.find('.flag img[alt="Russia"]').exists()).toBeTruthy()
  })
  it('Flag India', async () => {
    await wrapper.setProps({ type: 'in-ID' })
    expect(wrapper.vm.type).toContain('in-ID')
    expect(wrapper.find('.flag img[alt="India"]').exists()).toBeTruthy()
  })
  it('Flag Japan', async () => {
    await wrapper.setProps({ type: 'ja-JP' })
    expect(wrapper.vm.type).toContain('ja-JP')
    expect(wrapper.find('.flag img[alt="Japan"]').exists()).toBeTruthy()
  })
  it('Flag França', async () => {
    await wrapper.setProps({ type: 'fr-FR' })
    expect(wrapper.vm.type).toContain('fr-FR')
    expect(wrapper.find('.flag img[alt="França"]').exists()).toBeTruthy()
  })
  it('Flag Turquia', async () => {
    await wrapper.setProps({ type: 'tr-TR' })
    expect(wrapper.vm.type).toContain('tr-TR')
    expect(wrapper.find('.flag img[alt="Turquia"]').exists()).toBeTruthy()
  })
  it('Flag China', async () => {
    await wrapper.setProps({ type: 'ch-ZH' })
    expect(wrapper.vm.type).toContain('ch-ZH')
    expect(wrapper.find('.flag img[alt="China"]').exists()).toBeTruthy()
  })
  it('Flag Alemanha', async () => {
    await wrapper.setProps({ type: 'al-DE' })
    expect(wrapper.vm.type).toContain('al-DE')
    expect(wrapper.find('.flag img[alt="Alemanha"]').exists()).toBeTruthy()
  })
  it('Flag Italia', async () => {
    await wrapper.setProps({ type: 'it-IT' })
    expect(wrapper.vm.type).toContain('it-IT')
    expect(wrapper.find('.flag img[alt="Italia"]').exists()).toBeTruthy()
  })
  it('Flag Grecia', async () => {
    await wrapper.setProps({ type: 'gr-GK' })
    expect(wrapper.vm.type).toContain('gr-GK')
    expect(wrapper.find('.flag img[alt="Grecia"]').exists()).toBeTruthy()
  })
  it('Flag Vietnã', async () => {
    await wrapper.setProps({ type: 'vn-VT' })
    expect(wrapper.vm.type).toContain('vn-VT')
    expect(wrapper.find('.flag img[alt="Vietnã"]').exists()).toBeTruthy()
  })
  it('Flag Tailand', async () => {
    await wrapper.setProps({ type: 'tl-TD' })
    expect(wrapper.vm.type).toContain('tl-TD')
    expect(wrapper.find('.flag img[alt="Tailand"]').exists()).toBeTruthy()
  })
  it('Flag Holandes', async () => {
    await wrapper.setProps({ type: 'nl-HL' })
    expect(wrapper.vm.type).toContain('nl-HL')
    expect(wrapper.find('.flag img[alt="Holandes"]').exists()).toBeTruthy()
  })
  it('Flag Noruegues', async () => {
    await wrapper.setProps({ type: 'nl-NL' })
    expect(wrapper.vm.type).toContain('nl-NL')
    expect(wrapper.find('.flag img[alt="Noruegues"]').exists()).toBeTruthy()
  })
  it('Flag Ungáiris', async () => {
    await wrapper.setProps({ type: 'hu-RV' })
    expect(wrapper.vm.type).toContain('hu-RV')
    expect(wrapper.find('.flag img[alt="Ungáiris"]').exists()).toBeTruthy()
  })
  it('Flag Ireland', async () => {
    await wrapper.setProps({ type: 'ir-IS' })
    expect(wrapper.vm.type).toContain('ir-IS')
    expect(wrapper.find('.flag img[alt="Ireland"]').exists()).toBeTruthy()
  })
})
