import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    accounts: [],
    user: {
      name: '',
      photo: '',
      age: null,
      countrystatus: '',
      cep: null,
      end: {
        localidade: '',
        logradouro: '',
        complemento: '',
        uf: '',
        bairro: '',
        cep: ''
      },
      maritalstatus: '',
      addressNumber: null,
      travel: false,
      about: null,
      genero: '',
      telephones: [],
      emails: [],
      sites: [],
      exps: [],
      coursers: []
    },
    errors: []
  },
  mutations: {
    updateAcccount (state, value) {
      state.accounts = value
    },
    insertAcccount (state, value) {
      state.accounts.push(value)
    },
    updateUser (state, value) {
      state.user = value
    },
    updateName (state, value) {
      state.user.name = value
    },
    updatePhoto (state, value) {
      state.user.photo = value
    },
    updateAge (state, value) {
      state.user.age = value
    },
    updateAddressNumber (state, value) {
      state.user.addressNumber = value
    },
    updateCep (state, value) {
      state.user.cep = value
    },
    updateGenero (state, value) {
      state.user.genero = value
    },
    updateTravel (state, value) {
      state.user.travel = value
    },
    updateAbout (state, value) {
      state.user.about = value
    },
    updateTelephone (state, value) {
      state.user.telephones = value
    },
    updateEmail (state, value) {
      state.user.emails = value
    },
    updateSite (state, value) {
      state.user.sites = value
    },
    updateExp (state, value, id) {
      state.user.exps[id] = value
    },
    updateCourser (state, value, id) {
      state.user.coursers[id] = value
    },
    updateExpCheck (state, payload) {
      state.user.exps[payload.id].experience.now = payload.value
    },
    updateCourserCheck (state, payload) {
      state.user.coursers[payload.id].formation.now = payload.value
    },
    updateMaritalStatus (state, value) {
      state.user.maritalstatus = value
    },
    updateEnd (state, value) {
      state.user.end = value
    },
    updateEndLogradouro (state, value) {
      state.user.end.logradouro = value
    },
    updateEndLocalidade (state, value) {
      state.user.end.localidade = value
    },
    updateErrors (state, value) {
      state.errors = value
    }
  }
})
