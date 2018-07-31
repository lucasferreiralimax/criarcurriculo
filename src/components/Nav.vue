<template lang="pug">
.nav
  button.btn.menu(@click="menuShow")
    span
    span
    span
  nav.nav-menu(v-bind:class="{ active: menu_show }" @click="menuShow")
    h1.title Menu
    router-link(to="/") {{ $t('nav.home')}} |
    router-link(to="/sobre") {{ $t('nav.about')}} |
    router-link(to="/contato") {{ $t('nav.contact')}}
</template>

<script>
export default {
  name: 'nav-menu',
  data () {
    return {
      menu_show: false
    }
  },
  methods: {
    menuShow () {
      this.menu_show = !this.menu_show
      // document.body.classList.toggle('active-menu')
    }
  }
}
</script>
