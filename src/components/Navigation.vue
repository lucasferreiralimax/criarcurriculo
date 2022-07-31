<script setup>
import { RouterLink } from "vue-router";
import { ref, watch } from "vue";

const menuStatus = ref(false);
</script>

<template lang="pug">
v-btn.nav-btn(color="primary" @click="menuStatus = !menuStatus")
  v-icon(v-if="!menuStatus") mdi-menu
  v-icon(v-if="menuStatus") mdi-close
nav.nav(:class="{ active: menuStatus }" @click="menuStatus = true")
  RouterLink(to="/about") Informações
  RouterLink(to="/hash") Hash
  RouterLink(to="/help") Ajude
</template>

<style scoped lang="stylus">
.nav-btn
  display none
.nav
  width 100%
  font-size 12px
  a
    display inline-block
    padding 1rem
    border-radius 10px
    margin .2rem
    border 1px solid var(--color-border)
    &:first-of-type
      margin-left 0
    &.router-link-exact-active
      color hsla(160, 100%, 37%, 1)
      background-color hsla(160, 100%, 37%, 0.2)
@media (max-width 640px)
  .nav-btn
    display block
    z-index 9999
    position absolute
    right 0
    top 0
  .nav
    background #fff
    position fixed
    top 0
    bottom 0
    right 0
    left 0
    z-index 999
    opacity 0
    transition .5s opacity
    filter blur(10px)
    padding 5rem 1rem 1rem
    a
      width 100%
    &.active
      opacity 1
      filter blur(0px)
</style>
