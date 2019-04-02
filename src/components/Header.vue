<template lang="pug">
header.animate_intro
  .header
    router-link(to="/" v-scroll-to="'#start'" tag="h1").logo.text-center {{ $t('view.home.name1')}} {{ $t('view.home.name2')}}
  nav-menu
  pluralization
  font-select
  theme-app
</template>

<script>
import NavMenu from '@/components/Nav'
import Pluralization from '@/components/Pluralization'
import FontSelect from '@/components/FontSelect'
import ThemeApp from '@/components/ThemeApp'

export default {
  name: 'header-app',
  components: {
    NavMenu,
    Pluralization,
    FontSelect,
    ThemeApp
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
