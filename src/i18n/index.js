import Vue from 'vue'
import VueI18n from 'vue-i18n'
import axios from 'axios'
import pt_BR from './pt-BR.json'
import { list_languages } from './list_languages'

Vue.use(VueI18n)

let list = Object.getOwnPropertyNames(list_languages)
let languages = {}

list.map((item) => languages[item] = list_languages[item][0] );

pt_BR.locale = languages

const i18n = new VueI18n({
  locale: 'pt-BR',
  fallbackLocale: 'pt-BR',
  messages: { 'pt-BR': pt_BR}
})

const loadedLanguages = ['pt-BR'] // our default language that is preloaded

function setI18nLanguage (lang) {
  i18n.locale = lang
  axios.defaults.headers.common['Accept-Language'] = lang
  document.querySelector('html').setAttribute('lang', lang)
  if(lang == 'ar-SA') {
    document.querySelector('html').setAttribute('dir', 'RTL')
  } else {
    document.querySelector('html').setAttribute('dir', 'LTR')
  }
  return lang
}

export function loadLanguageAsync(lang) {
  // If the same language
  if (i18n.locale === lang) {
    return Promise.resolve(setI18nLanguage(lang))
  }

  // If the language was already loaded
  if (loadedLanguages.includes(lang)) {
    return Promise.resolve(setI18nLanguage(lang))
  }

  // If the language hasn't been loaded yet
  return import(/* webpackChunkName: "lang-[request]" */ `@/i18n/${lang}.json`).then(
    messages => {
      messages.default.locale = languages
      i18n.setLocaleMessage(lang, messages.default)
      if(!loadedLanguages.includes(lang)) {
        loadedLanguages.push(lang)
      }
      return setI18nLanguage(lang)
    }
  ).catch(error => {
    console.log('An error occurred while loading the language ', error)
  })
}

export default i18n
