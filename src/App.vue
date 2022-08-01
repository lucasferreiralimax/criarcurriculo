<script setup>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
</script>
<template lang="pug">
v-app
  Header
  v-main
    router-view
  Footer
</template>

<style lang="stylus">
@import '@/assets/base.css'

#app,
.v-application
  background transparent !important
  color var(--color-text) !important
  font-weight normal !important

#app
  max-width 960px
  min-height calc(100vh - 4rem)
  margin 0 auto
  padding 1rem

a
  text-decoration none
  color hsla(160, 100%, 37%, 1)
  transition 0.4s

@media (hover:hover)
  a:hover
    background-color hsla(160, 100%, 37%, 0.2)

@media (min-width 1024px)
  #app
    padding 2rem
</style>
