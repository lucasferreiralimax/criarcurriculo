<template lang="pug">
header.header
  app-logo(type="link")
  app-navigation
  app-localization
  app-theme
  app-scroll-page
</template>

<script>
import AppLogo from '@/components/base/app-logo'
import AppNavigation from '@/components/base/app-navigation'
import AppLocalization from '@/components/lab/app-localization'
import AppTheme from '@/components/lab/app-theme'
import AppScrollPage from '@/components/lab/app-scroll-page'
import { scrollTo } from '@/directive/scroll.js'

export default {
  name: 'app-header',
  components: {
    AppLogo,
    AppNavigation,
    AppLocalization,
    AppTheme,
    AppScrollPage
  },
  directives: { 'scroll-to': scrollTo },
  created () { window.addEventListener('scroll', this.fixedHeader) },
  destroyed () { window.removeEventListener('scroll', this.fixedHeader) },
  data () {
    return {
      fixed: false,
      fixedHide: false,
      fixedFooter: false
    }
  }
}
</script>

<style lang="stylus">
header
  position relative
  &:after
    content ''
    display table
    clear both
.header
  color #666
  letter-spacing .8px
  outline none
  position relative
  user-select none
  padding 1em 1em 0
  z-index 99
  .btn
    border-radius 100px
  +desktop()
    max-width 70%
    margin 0 auto
    padding 2em 0
</style>
