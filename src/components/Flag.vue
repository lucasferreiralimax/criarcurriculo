<template lang="pug">
.flag
  img(v-if="type == 'pt-BR'" src="./../assets/flags/br.svg" alt="Brasil" width="30")
  img(v-if="type == 'ar-SA'" src="./../assets/flags/sa.svg" alt="Arábia" width="30")
  img(v-if="type == 'en-US'" src="./../assets/flags/us.svg" alt="United States" width="30")
  img(v-if="type == 'es-ES'" src="./../assets/flags/es.svg" alt="Spain" width="30")
  img(v-if="type == 'es-CA'" src="./../assets/flags/ca.svg" alt="Català" width="30")
  img(v-if="type == 'ru-RU'" src="./../assets/flags/ru.svg" alt="Russia" width="30")
  img(v-if="type == 'in-ID'" src="./../assets/flags/in.svg" alt="India" width="30")
  img(v-if="type == 'ja-JP'" src="./../assets/flags/jp.svg" alt="Japan" width="30")
  img(v-if="type == 'fr-FR'" src="./../assets/flags/fr.svg" alt="França" width="30")
  img(v-if="type == 'tr-TR'" src="./../assets/flags/tr.svg" alt="Turquia" width="30")
  img(v-if="type == 'ch-ZH'" src="./../assets/flags/ch.svg" alt="China" width="30")
  img(v-if="type == 'al-DE'" src="./../assets/flags/al.svg" alt="Alemanha" width="30")
  img(v-if="type == 'it-IT'" src="./../assets/flags/it.svg" alt="Italia" width="30")
  img(v-if="type == 'gr-GK'" src="./../assets/flags/gr.svg" alt="Grecia" width="30")
  img(v-if="type == 'vn-VT'" src="./../assets/flags/vn.svg" alt="Vietnã" width="30")
  img(v-if="type == 'tl-TD'" src="./../assets/flags/tl.svg" alt="Tailand" width="30")
  img(v-if="type == 'nl-HL'" src="./../assets/flags/nh.svg" alt="Holandes" width="30")
  img(v-if="type == 'nl-NL'" src="./../assets/flags/nl.svg" alt="Noruegues" width="30")
</template>

<script>
export default {
  name: 'flag',
  props: ['type']
}
</script>

<style lang="stylus">
.flag
  width 30px
  height 22px
  background transparent
  padding 0
  margin 0
  display inline-block
  position relative
  img
    position absolute
    top 0
    right 0
    left 0
</style>
