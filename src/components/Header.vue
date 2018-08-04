<template lang="pug">
header.header.animate_intro(:class="{ 'active' : fixedHide, 'fixedFooter': fixedFooter }")
  router-link(to="/" v-scroll-to="'#start'" tag="h1").logo.text-center {{ $t('text.name1')}} {{ $t('text.name2')}}
  nav-menu
  pluralization
</template>

<script>
import NavMenu from '@/components/Nav.vue'
import Pluralization from '@/components/Pluralization.vue'

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
      // let el = (document.querySelector('#app').clientHeight - document.querySelector('#app').parentElement.offsetHeight) - 180
      this.fixed = window.scrollY > 630
      this.fixedHide = window.scrollY > 600
      this.fixedFooter = !(this.oldScroll > window.scrollY)
      this.oldScroll = window.scrollY
      // if (window.innerWidth >= 800) {
      //   this.fixedFooter = !(this.oldScroll > window.scrollY)
      // }
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
