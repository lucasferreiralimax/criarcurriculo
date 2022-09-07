<script setup>
import Header from "@/components/Header.vue"
import Footer from "@/components/Footer.vue"
</script>

<template lang="pug">
v-app
  Header
  v-main
    router-view
  Footer
</template>

<style lang="stylus">
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

@media (hoverhover)
  a:hover
    color #fff
    background-color var(--vt-c-red)

@media (min-width 1024px)
  #app
    padding 2rem

/* color palette from <https://github.com/vuejs/theme> */
:root 
  --vt-c-white #ffffff
  --vt-c-white-soft #f8f8f8
  --vt-c-white-mute #f2f2f2

  --vt-c-black #181818
  --vt-c-black-soft #222222
  --vt-c-black-mute #282828

  --vt-c-red #ee2828
  --vt-c-red-light #421717
  --vt-c-indigo #f00

  --vt-c-divider-light-1 rgba(60, 60, 60, 0.29)
  --vt-c-divider-light-2 rgba(60, 60, 60, 0.12)
  --vt-c-divider-dark-1 rgba(84, 84, 84, 0.65)
  --vt-c-divider-dark-2 rgba(84, 84, 84, 0.48)

  --vt-c-text-light-1 var(--vt-c-indigo)
  --vt-c-text-light-2 rgba(60, 60, 60, 0.66)
  --vt-c-text-dark-1 var(--vt-c-white)
  --vt-c-text-dark-2 rgba(235, 235, 235, 0.64)

/* semantic color variables for this project */
/* :root 
  --color-background var(--vt-c-white)
  --color-background-soft var(--vt-c-white-soft)
  --color-background-mute var(--vt-c-white-mute)

  --color-border var(--vt-c-divider-light-2)
  --color-border-hover var(--vt-c-divider-light-1)

  --color-heading var(--vt-c-text-light-1)
  --color-text var(--vt-c-text-light-1)

  --section-gap 160px
 */

/* @media (prefers-color-scheme dark)  */
  :root
    --color-background var(--vt-c-black)
    --color-background-soft var(--vt-c-black-soft)
    --color-background-mute var(--vt-c-black-mute)

    --color-border var(--vt-c-divider-dark-2)
    --color-border-hover var(--vt-c-divider-dark-1)

    --color-heading var(--vt-c-text-dark-1)
    --color-text var(--vt-c-text-dark-2)
/*  */

*, *::before, *::after 
  box-sizing border-box
  margin 0
  position relative
  font-weight normal
  -webkit-tap-highlight-color transparent

body 
  min-height 100vh
  color var(--color-text)
  background var(--color-background)
  transition color 0.5s, background-color 0.5s
  line-height 1.6
  font-family Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
    Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif
  font-size 15px
  text-rendering optimizeLegibility
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale

.w-full 
  width: 100%

input[type="date" i]::-webkit-calendar-picker-indicator 
  opacity 0
  width: 100%
  height 100%
  position absolute
  top 0
  bottom 0
  right 0
  left 0
  cursor pointer

.v-application__wrap 
  min-height calc(100vh - 4rem)

.v-autocomplete__selection 
  padding .2rem .1rem

.ws-wrap 
  white-space pre-wrap

.wd-break 
  word-break break-word

.menu-active 
  overflow: hidden

.pointer
  cursor pointer

.center
  text-align center

strong
  color var(--vt-c-red)
  &:hover
    background-color var(--vt-c-red-light)
</style>
