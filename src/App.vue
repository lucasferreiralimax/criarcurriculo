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

::selection
  background var(--vt-c-red)
  color #fff

::-webkit-scrollbar-track
	background #fff

::-webkit-scrollbar
	background-color rgba(#fff,0)
	width 6px

::-webkit-scrollbar-thumb
	background-color rgba(#000,.2)
	border-radius 10px
	box-shadow inset 0 0 6px rgba(0,0,0,0)

#app, .v-application
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
  color var(--vt-c-red)
  transition 0.4s

@media (hover:hover)
  a:hover
    color #fff
    background-color var(--vt-c-red)

@media (min-width 1024px)
  #app
    padding 2rem
</style>
