<template lang="pug">
header.animate_intro
  .header(:class="{ 'active' : fixedHide, 'fixedFooter': fixedFooter }")
    router-link(to="/" v-scroll-to="'#start'" tag="h1").logo.text-center {{ $t('text.name1')}} {{ $t('text.name2')}}
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
  data () {
    return {
      fixed: false,
      fixedHide: false,
      fixedFooter: false
    }
  },
  methods: {
    fixedHeader () {
      this.fixed = window.scrollY > 630
      this.fixedHide = window.scrollY > 600
      this.fixedFooter = !(this.oldScroll > window.scrollY)
      this.oldScroll = window.scrollY
    }
  },
  created () {
    window.addEventListener('scroll', this.fixedHeader)
  },
  destroyed () {
    window.removeEventListener('scroll', this.fixedHeader)
  }
}
</script>
