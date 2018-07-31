import Vue from 'vue'
import VueI18n from 'vue-i18n'

import pt from './pt-BR.json'
import es from './es-ES.json'
import en from './en-US.json'
import ru from './ru-RU.json'
import jp from './ja-JP.json'

Vue.use(VueI18n)

const messages = {
  'pt': pt,
  'es': es,
  'en': en,
  'ru': ru,
  'ja': jp
}

const i18n = new VueI18n({
  locale: 'pt',
  messages
})

export default i18n
