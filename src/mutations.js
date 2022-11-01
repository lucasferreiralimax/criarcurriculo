export let mutations = {
  updateLang (state, value) {
    state.lang = value
  },
  updateIconRender (state, value) {
    state.icon_render = value
  },
  updateTheme (state, value) {
    state.theme_app = value
  },
  updateLayout (state, value) {
    state.layout_render = value
  },
  updateHome (state, value) {
    state.home_app = value
  },
  updateAcccount (state, value) {
    state.accounts = value
  },
  insertAcccount (state, value) {
    value.s_lang == 'pt-BR' ?
      state.accounts.unshift(value) :
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
  updateHobbies (state, value) {
    state.user.hobbies = value
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
  updateLanguage (state, value) {
    state.user.languages = value
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
  updateEndUF (state, value) {
    state.user.end.uf = value
  },
  updateEndLocalidade (state, value) {
    state.user.end.localidade = value
  },
  updateErrors (state, value) {
    state.errors = value
  }
}
