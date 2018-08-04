<template lang="pug">
.nav
  button.btn.menu(@click="menuShow")
    span
    span
    span
  nav.nav-menu(v-bind:class="{ active: menu_show }" @click="menuShow")
    h1.title Menu
    router-link(to="/inicio" v-scroll-to="'#start'").btn {{ $t('nav.home')}}
    router-link(to="/sobre").btn {{ $t('nav.about')}}
    router-link(to="/contato").btn {{ $t('nav.contact')}}
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
