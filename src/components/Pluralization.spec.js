import { shallowMount, createLocalVue } from '@vue/test-utils'

import { mutations } from '@/mutations'
import Vuex from 'vuex'
import Pluralization from './Pluralization.vue'

const localVue = createLocalVue()

localVue.use(Vuex)

let store = new Vuex.Store({
  state: {
    lang: 'pt-BR'
  },
  mutations: mutations
})

const wrapper = shallowMount(Pluralization, { store, localVue })

const list_language = [ "pt-BR", "ar-SA", "en-US", "es-ES", "es-CA", "ru-RU", "in-ID", "ja-JP", "fr-FR", "tr-TR", "ch-ZH", "al-DE", "it-IT", "gr-GK", "vn-VT", "tl-TD", "nl-HL", "nl-NL", "hu-RV", "ir-IS" ]

describe('Pluralization', () => {
  it('is Pluralization a vue instance', () => {
    expect(wrapper.exists()).toBeTruthy()
  })
  for(let language of list_language) {
    it(`Language ${language}`, async () => {
      await store.commit('updateLang', language)
      expect(wrapper.vm.lang).toContain(language)
    })
  }
})
