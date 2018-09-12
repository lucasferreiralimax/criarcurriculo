import Vue from 'vue'
import VueI18n from 'vue-i18n'

import pt from './pt-BR.json'
import es from './es-ES.json'
import en from './en-US.json'
import ru from './ru-RU.json'
import jp from './ja-JP.json'
import fr from './fr-FR.json'
import tr from './tr-TR.json'
import ch from './ch-ZH.json'

Vue.use(VueI18n)

const messages = {
  'pt': pt,
  'es': es,
  'en': en,
  'ru': ru,
  'ja': jp,
  'fr': fr,
  'tr': tr,
  'ch': ch
}

const i18n = new VueI18n({
  locale: 'pt',
  messages
})

export default i18n
