<template lang="pug">
header.header.animate_intro
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
  }
}
</script>
