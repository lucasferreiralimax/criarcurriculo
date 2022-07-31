<script setup>
import { RouterLink } from "vue-router";
</script>

<template lang="pug">
nav
  RouterLink(to="/about") Informações
  RouterLink(to="/hash") Hash
  RouterLink(to="/help") Ajude
</template>

<style scoped lang="stylus">
nav
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
</style>
