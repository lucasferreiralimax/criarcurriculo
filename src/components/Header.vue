<template lang="pug">
header.header.animate_intro
  h1 {{ $t('text.name1')}} {{ $t('text.name2')}}
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
