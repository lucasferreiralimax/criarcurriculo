import { shallowMount, createLocalVue } from '@vue/test-utils'

import { list_languages } from '@/i18n/list_languages'
import { mutations } from '@/mutations'
import Vuex from 'vuex'
import Localization from './index.vue'

const localVue = createLocalVue()

localVue.use(Vuex)

let store = new Vuex.Store({
  state: {
    lang: 'pt-BR'
  },
  mutations: mutations
})

const wrapper = shallowMount(Localization, { store, localVue })

describe('Localization', () => {
  it('is Localization a vue instance', () => {
    expect(wrapper.exists()).toBeTruthy()
  })
  for(let language in list_languages) {
    it(`Language ${list_languages[language][0]}`, async () => {
      await store.commit('updateLang', list_languages[language][1])
      expect(wrapper.vm.lang).toContain(list_languages[language][1])
    })
  }
})
