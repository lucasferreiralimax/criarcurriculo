<template lang="pug">
div
  button(v-scroll-to="'#app'" :class="{ 'active' : scrolledTop, 'center': !scrolledBottom && scrolledTop }" :aria-label="$t('aria-label.scroll_start')").btn.scroll-top
    svg(xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 280 280")
      path(d="M17.128 167.872c1.903 1.902 4.093 2.854 6.567 2.854s4.664-.952 6.567-2.854L142.466 55.666l112.208 112.206c1.902 1.902 4.093 2.854 6.563 2.854 2.478 0 4.668-.952 6.57-2.854l14.274-14.277c1.902-1.902 2.847-4.093 2.847-6.563 0-2.475-.951-4.665-2.847-6.567L149.028 7.419c-1.901-1.906-4.088-2.853-6.562-2.853s-4.665.95-6.567 2.853L2.856 140.464C.95 142.367 0 144.554 0 147.034c0 2.468.953 4.658 2.856 6.561l14.272 14.277z")
      path(d="M149.028 117.055c-1.901-1.906-4.088-2.856-6.562-2.856s-4.665.953-6.567 2.856L2.856 250.1C.95 252.003 0 254.192 0 256.67c0 2.472.953 4.661 2.856 6.564l14.272 14.276c1.903 1.903 4.093 2.848 6.567 2.848s4.664-.951 6.567-2.848l112.204-112.209L254.674 277.51c1.902 1.903 4.093 2.852 6.563 2.852 2.478 0 4.668-.948 6.57-2.852l14.274-14.276c1.902-1.903 2.847-4.093 2.847-6.564 0-2.478-.951-4.667-2.847-6.57L149.028 117.055z")
  button(v-scroll-to="'#final'" :class="{ 'active' : scrolledBottom, 'center': !scrolledTop && scrolledBottom }" :aria-label="$t('aria-label.scroll_end')").btn.scroll-bottom
    svg(xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 280 280")
      path(d="M17.128 167.872c1.903 1.902 4.093 2.854 6.567 2.854s4.664-.952 6.567-2.854L142.466 55.666l112.208 112.206c1.902 1.902 4.093 2.854 6.563 2.854 2.478 0 4.668-.952 6.57-2.854l14.274-14.277c1.902-1.902 2.847-4.093 2.847-6.563 0-2.475-.951-4.665-2.847-6.567L149.028 7.419c-1.901-1.906-4.088-2.853-6.562-2.853s-4.665.95-6.567 2.853L2.856 140.464C.95 142.367 0 144.554 0 147.034c0 2.468.953 4.658 2.856 6.561l14.272 14.277z")
      path(d="M149.028 117.055c-1.901-1.906-4.088-2.856-6.562-2.856s-4.665.953-6.567 2.856L2.856 250.1C.95 252.003 0 254.192 0 256.67c0 2.472.953 4.661 2.856 6.564l14.272 14.276c1.903 1.903 4.093 2.848 6.567 2.848s4.664-.951 6.567-2.848l112.204-112.209L254.674 277.51c1.902 1.903 4.093 2.852 6.563 2.852 2.478 0 4.668-.948 6.57-2.852l14.274-14.276c1.902-1.903 2.847-4.093 2.847-6.564 0-2.478-.951-4.667-2.847-6.57L149.028 117.055z")
</template>

<script>
import { scrollTo } from '@/directive/scroll.js'

export default {
  name: 'scroll-page',
  created () { window.addEventListener('scroll', this.handleScroll) },
  destroyed () { window.removeEventListener('scroll', this.handleScroll) },
  directives: { 'scroll-to': scrollTo },
  data () {
    return {
      scrolledTop: false,
      scrolledBottom: true
    }
  },
  methods: {
    handleScroll () {
      let positionScroll = window.scrollY

      this.scrolledTop = positionScroll > 265
      this.scrolledBottom = positionScroll < (document.documentElement.scrollHeight - window.innerHeight - 25)
    }
  }
}
</script>

<style lang="stylus">
.scroll-top,
.scroll-bottom
  bottom 20px
  box-sizing border-box
  opacity 0
  pointer-events none
  position fixed
  visibility hidden
  z-index 9999
  padding 25px
  &.active
    opacity 1
    pointer-events all
    visibility visible
  svg
    position absolute
    top calc(50% - 12.5px)
    left calc(50% - 12.5px)
.scroll-top
  left calc(50% - 80px)
  transform translateX(50%)
  &:hover
    animation .5s scroll_top infinite alternate
  &.center
    left calc(50% - 52px)
.scroll-bottom
  left calc(50% + 30px)
  transform rotate(180deg) translateX(50%)
  &:hover
    animation .5s scroll_bottom infinite alternate
  &.center
    left 50%
</style>
