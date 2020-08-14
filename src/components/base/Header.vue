<template lang="pug">
header.header
  logo-app(type="link")
  nav-menu
  pluralization
  theme-app
  scroll-page
</template>

<script>
import LogoApp from '@/components/base/Logo'
import NavMenu from '@/components/base/Nav'
import Pluralization from '@/components/Pluralization'
import ThemeApp from '@/components/ThemeApp'
import ScrollPage from '@/components/ScrollPage'
import { scrollTo } from '@/directive/scroll.js'

export default {
  name: 'header-app',
  components: { LogoApp, NavMenu, Pluralization, ThemeApp, ScrollPage },
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
