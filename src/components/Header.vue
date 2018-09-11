<template lang="pug">
header.animate_intro
  .header
    router-link(to="/" v-scroll-to="'#start'" tag="h1").logo.text-center {{ $t('view.home.name1')}} {{ $t('view.home.name2')}}
  nav-menu
  pluralization
</template>

<script>
import NavMenu from '@/components/Nav'
import Pluralization from '@/components/Pluralization'

export default {
  name: 'header-app',
  components: {
    NavMenu,
    Pluralization
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
