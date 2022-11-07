import { shallowMount, createLocalVue } from '@vue/test-utils'

import { user } from '@/store/user'
import { mutations } from '@/store/mutations'
import Vuex from 'vuex'
import AppInputCep from './index.vue'

const localVue = createLocalVue()

localVue.use(Vuex)

let store = new Vuex.Store({
  state: {
    user: user
  },
  mutations: mutations
})

let endTestFull = {
  bairro: "Jardim Matarazzo",
  cep: "03814-020",
  complemento: "",
  ddd: "11",
  gia: "1004",
  ibge: "3550308",
  localidade: "São Paulo",
  logradouro: "Rua Manuel de Mattos Godinho",
  siafi: "7107",
  uf: "SP"
}

let endTestClean = {
  bairro: "",
  cep: "",
  complemento: "",
  ddd: "",
  gia: "",
  ibge: "",
  localidade: "",
  logradouro: "",
  siafi: "",
  uf: ""
}

const wrapper = shallowMount(AppInputCep, { localVue, store })

describe('AppInputCep', () => {
  it('is AppInputCep a vue instance', () => {
    expect(wrapper.exists()).toBeTruthy()
  })
  it('is AppInputCep test a CEP valid', () => {
    store.commit('updateEnd', endTestFull)
    expect(wrapper.vm.user.end.cep).toBe('03814-020')
    expect(wrapper.vm.user.end.bairro).toBe('Jardim Matarazzo')
    expect(wrapper.vm.user.end.ddd).toBe('11')
    expect(wrapper.vm.user.end.localidade).toBe('São Paulo')
    expect(wrapper.vm.user.end.logradouro).toBe('Rua Manuel de Mattos Godinho')
    expect(wrapper.vm.user.end.uf).toBe('SP')
  })
  it('is AppInputCep test a CEP empty', () => {
    store.commit('updateEnd', endTestClean)
    expect(wrapper.vm.user.end.cep).toBe('')
    expect(wrapper.vm.user.end.bairro).toBe('')
    expect(wrapper.vm.user.end.ddd).toBe('')
    expect(wrapper.vm.user.end.localidade).toBe('')
    expect(wrapper.vm.user.end.logradouro).toBe('')
    expect(wrapper.vm.user.end.uf).toBe('')
  })
})
