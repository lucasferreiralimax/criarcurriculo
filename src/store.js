import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      name: '',
      age: null,
      countrystatus: '',
      cep: null,
      end: {
        localidade: null,
        logradouro: null
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
    }
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
    }
  }
})
