import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      name: 'Lucas Lima',
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
      telephone: null,
      email: null,
      exps: [],
      coursers: []
    },
    theme_app: 'default'
  },
  mutations: {
    updateUser (state, value) {
      state.user = value
    },
    updateName (state, value) {
      state.user.name = value
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
      state.user.telephone = value
    },
    updateEmail (state, value) {
      state.user.email = value
    },
    updateExps (state, value) {
      state.user.exps = value
    },
    updateCoursers (state, value) {
      state.user.coursers = value
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
    updateThemeApp (state, value) {
      state.theme_app = value
    }
  }
})
