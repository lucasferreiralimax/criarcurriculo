<template lang="pug">
label.pluralization(for="locale")
  select#locale(v-model="locale")
    option(value="pt-BR") {{ $t('locale.pt')}}
    option(value="ar-SA") {{ $t('locale.ar')}}
    option(value="en-US") {{ $t('locale.en')}}
    option(value="es-ES") {{ $t('locale.es')}}
    option(value="es-CA") {{ $t('locale.ca')}}
    option(value="ru-RU") {{ $t('locale.ru')}}
    option(value="in-ID") {{ $t('locale.in')}}
    option(value="ja-JP") {{ $t('locale.ja')}}
    option(value="fr-FR") {{ $t('locale.fr')}}
    option(value="tr-TR") {{ $t('locale.tr')}}
    option(value="ch-ZH") {{ $t('locale.ch')}}
    option(value="al-DE") {{ $t('locale.de')}}
    option(value="it-IT") {{ $t('locale.it')}}
    option(value="gr-GK") {{ $t('locale.gr')}}
    option(value="vn-VT") {{ $t('locale.vn')}}
    option(value="tl-TD") {{ $t('locale.tl')}}
    option(value="nl-HL") {{ $t('locale.nl')}}
    option(value="nl-NL") {{ $t('locale.nl_n')}}
  svg(xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480.1 480.1" width="29" height="29" fill="#fff")
    path(d="M240.135.05C144.085.036 57.277 57.289 19.472 145.586l-2.992.992 1.16 3.48c-49.776 122.766 9.393 262.639 132.159 312.415a239.87 239.87 0 0 0 90.265 17.577c132.548.02 240.016-107.416 240.036-239.964S372.684.069 240.135.05zm188.253 361.004l-12.324-12.316V320.05a7.99 7.99 0 0 0-.8-3.576l-31.2-62.312V224.05a8 8 0 0 0-3.56-6.656l-24-16a8.002 8.002 0 0 0-6.4-1.104l-29.392 7.344-49.368-21.184-6.792-47.584 18.824-18.816h40.408l13.6 20.44a8 8 0 0 0 5.344 3.448l48 8a7.933 7.933 0 0 0 3.84-.304l44.208-14.736c37.079 71.155 33.113 156.736-10.388 224.156zM395.392 78.882l-13.008 8.672-36.264-7.256-23.528-7.832a7.856 7.856 0 0 0-4.464-.176l-29.744 7.432-13.04-4.344 9.664-19.328h27.056a7.997 7.997 0 0 0 3.576-.84l27.68-13.84a224.823 224.823 0 0 1 52.072 37.512zM152.44 33.914l19.2 12.8a7.99 7.99 0 0 0 3.128 1.232l38.768 6.464-3.784 11.32-20.2 6.744a8 8 0 0 0-4.328 3.464l-22.976 38.288-36.904 22.144-54.4 7.768a8 8 0 0 0-6.88 7.912v24a8 8 0 0 0 2.344 5.656l13.656 13.656v13.744l-33.28-22.192-12.072-36.216A225.289 225.289 0 0 1 152.44 33.914zM129.664 296.21l-36.16-7.24-13.44-26.808v-18.8l29.808-29.808 11.032 22.072a8.001 8.001 0 0 0 7.16 4.424h51.472l21.672 36.12a8 8 0 0 0 6.856 3.88h22.24l-5.6 28.056-30.288 30.288a8.003 8.003 0 0 0-2.352 5.656v20l-28.8 21.6a8.002 8.002 0 0 0-3.2 6.4v28.896l-9.952-3.296-14.048-35.136V304.05a8 8 0 0 0-6.4-7.84zm-24.048 122.981C30.187 362.602-1.712 264.826 25.832 174.642l6.648 19.936a7.995 7.995 0 0 0 3.144 4.128l39.88 26.584-9.096 9.104a8 8 0 0 0-2.344 5.656v24a7.997 7.997 0 0 0 .84 3.576l16 32a8.003 8.003 0 0 0 5.6 4.264l33.6 6.712v73.448a8.003 8.003 0 0 0 .568 2.968l16 40a8.001 8.001 0 0 0 4.904 4.616l24 8a7.86 7.86 0 0 0 2.488.416 8 8 0 0 0 8-8v-36l28.8-21.6a8.002 8.002 0 0 0 3.2-6.4v-20.688l29.656-29.656a8.006 8.006 0 0 0 2.184-4.088l8-40a8 8 0 0 0-7.84-9.568h-27.472l-21.672-36.12a8 8 0 0 0-6.856-3.88h-51.056l-13.744-27.576a7.999 7.999 0 0 0-5.88-4.32 7.84 7.84 0 0 0-6.936 2.24l-10.384 10.344V192.05a8 8 0 0 0-2.344-5.656l-13.656-13.656v-13.752l49.136-7.016a8.037 8.037 0 0 0 2.984-1.064l40-24a7.996 7.996 0 0 0 2.736-2.736l22.48-37.464 21.192-7.072a7.918 7.918 0 0 0 5.056-5.056l8-24a8 8 0 0 0-6.272-10.4l-46.304-7.72-8.136-5.424a223.384 223.384 0 0 1 153.856 5.72l-14.616 7.296h-30.112a8 8 0 0 0-7.2 4.424l-16 32a8 8 0 0 0 4.632 11.16l24 8c1.44.489 2.99.551 4.464.176l29.744-7.432 21.792 7.256c.312.112.633.198.96.256l40 8a7.943 7.943 0 0 0 6.008-1.184l18.208-12.144a225.69 225.69 0 0 1 24.064 32.152l-39.36 13.12-42.616-7.104-14.08-21.12a8 8 0 0 0-6.616-3.56h-48a8 8 0 0 0-5.656 2.344l-24 24a8 8 0 0 0-2.264 6.792l8 56a8 8 0 0 0 4.8 6.216l56 24a7.907 7.907 0 0 0 5.088.408l28.568-7.144 17.464 11.664v27.72a7.99 7.99 0 0 0 .8 3.576l31.2 62.312v30.112a8 8 0 0 0 2.344 5.656l16.736 16.744c-74.223 98.933-214.595 118.965-313.528 44.741z")
</template>

<script>
import { loadLanguageAsync } from '@/i18n'
import { mixinUpdateStore } from '@/mixins/mixinUpdateStore.js'

export default {
  name: 'pluralization',
  mixins: [mixinUpdateStore],
  created () { this.setLocale() },
  data () {
    return {
      locale: 'pt-BR'
    }
  },
  methods: {
    setLocale () {
      let locale = localStorage.getItem('locale')

      if(!locale) {
        localStorage.setItem('locale', 'pt-BR')
      } else {
        locale = locale.replace(/"/g, "")
        loadLanguageAsync(locale)
        this.locale = locale

      }
    }
  },
  watch: {
    locale (val) {
      loadLanguageAsync(val)
      localStorage.setItem('locale', val)
      this.setLocalStore(val)
      this.accountsRender()
    }
  }
}
</script>

<style lang="stylus">
.pluralization
  background transparent
  border 0
  display block
  right 25px
  padding 0
  position absolute
  top 110px
  width auto
  z-index 99
  +tablet()
    right 11px
    top 30px
  +desktop()
    top 47px
  &:hover
    background transparent
    svg
      animation world 2s infinite linear
  svg
    margin-left 10px
    transition 2s all
  select
    background transparent
    border-radius 100px
    border-color rgba(#fff, .3)
    color #fff
    line-height 0
    margin 0
    padding 5px
    position absolute
    text-align-last center
    top 0
    left -130px
    width auto
    option
      color #000
</style>
