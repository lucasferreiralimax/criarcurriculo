<template lang="pug">
header
  .header
    router-link(to="/" v-scroll-to="'#start'" tag="h1").logo.text-center {{ $t('view.home.name1')}} {{ $t('view.home.name2')}}
  nav-menu
  pluralization
  theme-app
  scroll-top
</template>

<script>
import NavMenu from '@/components/Nav'
import Pluralization from '@/components/Pluralization'
import ThemeApp from '@/components/ThemeApp'
import ScrollTop from '@/components/ScrollTop'

export default {
  name: 'header-app',
  components: {
    NavMenu,
    Pluralization,
    ThemeApp,
    ScrollTop
  },
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
.header
  color #666
  height 300px
  letter-spacing .8px
  outline none
  position relative
  user-select none
  will-change opacity, translate, scale
  z-index 1
</style>
