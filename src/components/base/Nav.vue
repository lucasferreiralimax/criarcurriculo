<template lang="pug">
.nav(:class="{ active: menu_show }" @click="checkLang")
  button.btn.menu(:class="{ active: menu_show }" @click="menuShow" role="button" type="button" :aria-label="$t('nav.menu')")
    span
    span
    span
  nav.nav-menu(:class="{ active: menu_show }" @click="menuShow")
    h1.title {{ $t('nav.menu') }}
    router-link(to="/" v-scroll-to="'#curriculo'").btn
      svg(xmlns="http://www.w3.org/2000/svg" viewBox="0 0 511.92 511.92")
        path(d="M505.77 46.551a16.889 16.889 0 0 0-17.109-2.697L56.482 218.293a8.538 8.538 0 0 0 6.4 15.83l412.86-166.588-204.8 241.545a8.534 8.534 0 1 0 13.022 11.034L491.861 74.899l-27.785 139.469-27.989 187.025a8.536 8.536 0 0 1-4.267 6.204 8.066 8.066 0 0 1-7.194.333l-116.369-45.756-55.842-23.381a8.533 8.533 0 0 0-11.17 4.565 8.19 8.19 0 0 0-.358 1.801h-.205l-27.725 107.059-39.782-138.965L380.535 158.8a8.533 8.533 0 1 0-10.189-13.653L161.92 300.324 11.682 239.507a8.534 8.534 0 0 0-6.4 15.821l151.04 61.116 40.277 140.612a16.921 16.921 0 0 0 16.316 12.228h.196a16.768 16.768 0 0 0 11.093-4.463c.298-.179.583-.379.853-.597l82.483-84.343 110.592 43.853a24.865 24.865 0 0 0 21.939-1.229 25.524 25.524 0 0 0 12.86-18.526l27.913-186.675 30.72-154.121a17.16 17.16 0 0 0-5.794-16.632zM236.877 427.786l18.014-69.436 28.211 11.844 7.27 2.884-53.495 54.708z")
      | {{ $t('nav.home')}}
    router-link(to="/contributors").btn
      svg(xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.001 512.001")
        path(d="M135.105 191.054L17.072 73.021c-3.906-3.903-10.237-3.904-14.143 0-3.905 3.905-3.905 10.237 0 14.143l115.099 115.097-.02 13.781c-.008 5.523 4.463 10.007 9.985 10.015h.015c5.516 0 9.992-4.468 10-9.985l.026-17.932a10 10 0 00-2.929-7.086zM225.871 117.994h-.015l-23.595.033L87.165 2.929c-3.905-3.904-10.237-3.904-14.143 0-3.905 3.905-3.905 10.237 0 14.143l118.033 118.032a10.003 10.003 0 007.071 2.929h.014l27.745-.039c5.523-.008 9.994-4.491 9.986-10.014-.008-5.519-4.483-9.986-10-9.986zM438.981 2.93c-1.86-1.86-4.44-2.93-7.07-2.93s-5.21 1.069-7.07 2.93c-1.86 1.861-2.93 4.44-2.93 7.07s1.07 5.21 2.93 7.069c1.86 1.861 4.44 2.931 7.07 2.931s5.21-1.07 7.07-2.931c1.86-1.859 2.93-4.439 2.93-7.069s-1.07-5.21-2.93-7.07zM409.692 32.216c-3.905-3.904-10.237-3.904-14.142 0l-85.811 85.811-13.782-.02h-.143c-26.456 0-51.325 10.3-70.036 29.01l-8.987 8.989c-3.905 3.906-3.905 10.237 0 14.143a9.972 9.972 0 007.071 2.929 9.97 9.97 0 007.071-2.929l8.988-8.989c14.934-14.934 34.779-23.152 55.894-23.152h.114l17.932.025h.014c2.652 0 5.196-1.054 7.071-2.929l88.746-88.745c3.905-3.905 3.905-10.237 0-14.143zM509.072 73.02c-3.904-3.904-10.237-3.904-14.142 0L376.897 191.054a10.003 10.003 0 00-2.929 7.086l.04 27.745c.008 5.518 4.483 9.985 10 9.985h.015c5.523-.008 9.994-4.491 9.986-10.015l-.034-23.595L509.072 87.163c3.905-3.905 3.905-10.237 0-14.143zM509.072 424.837L393.974 309.739l.02-13.782a98.526 98.526 0 00-7.558-38.088c-2.116-5.102-7.967-7.521-13.068-5.406-5.102 2.116-7.522 7.967-5.406 13.068a78.647 78.647 0 016.031 30.397l-.026 17.932a10 10 0 002.929 7.086L494.93 438.98c1.953 1.952 4.512 2.929 7.071 2.929s5.119-.977 7.071-2.929c3.905-3.906 3.906-10.238 0-14.143zM438.981 494.929L320.947 376.897a10.003 10.003 0 00-7.071-2.929h-.014l-27.745.039c-5.523.008-9.994 4.491-9.986 10.014.008 5.519 4.483 9.986 10 9.986h.015l23.595-.033 115.098 115.098c1.953 1.952 4.512 2.929 7.071 2.929s5.119-.977 7.071-2.929c3.905-3.905 3.905-10.237 0-14.143zM87.161 494.93c-1.86-1.861-4.44-2.93-7.07-2.93s-5.21 1.069-7.07 2.93c-1.86 1.86-2.93 4.44-2.93 7.07s1.07 5.21 2.93 7.069a10.077 10.077 0 007.07 2.931c2.63 0 5.21-1.07 7.07-2.931 1.87-1.859 2.93-4.439 2.93-7.069s-1.06-5.21-2.93-7.07z")
        path(d="M357.633 253.729a28.036 28.036 0 00-7.565-5.391 28.01 28.01 0 003.589-13.769c0-7.525-2.93-14.6-8.251-19.922a28.055 28.055 0 00-8.067-5.637c5.043-10.486 3.231-23.471-5.451-32.154-8.681-8.679-21.66-10.494-32.145-5.456a28.193 28.193 0 00-5.646-8.063c-10.986-10.984-28.858-10.982-39.843 0l-39.925 39.926c-.762-8.093-4.939-15.795-12.039-20.766-6.341-4.44-14.024-6.104-21.634-4.682-7.61 1.422-14.174 5.745-18.486 12.174l-27.393 40.85c-11.007 16.415-16.811 35.539-16.783 55.305l.034 23.594L2.93 424.837c-3.905 3.905-3.905 10.237 0 14.143 1.952 1.952 4.512 2.929 7.071 2.929s5.119-.977 7.071-2.929l118.033-118.033a10.005 10.005 0 002.929-7.086l-.04-27.744a78.773 78.773 0 0113.395-44.138l27.392-40.85a8.509 8.509 0 015.547-3.652 8.511 8.511 0 016.491 1.404c3.687 2.582 4.747 7.619 2.414 11.468l-10.704 17.656c-3.376 5.568-2.107 12.527 3.016 16.547 5.123 4.02 12.185 3.594 16.79-1.01l66.061-66.062c3.187-3.188 8.372-3.187 11.559 0a8.123 8.123 0 012.394 5.779 8.106 8.106 0 01-1.747 5.041l-39.094 39.185c-3.905 3.905-3.905 10.237 0 14.143 3.905 3.904 10.237 3.904 14.143 0l50.538-50.629c3.187-3.187 8.372-3.187 11.558-.001 3.187 3.188 3.187 8.372 0 11.559l-50.583 50.584c-3.905 3.905-3.905 10.237 0 14.143 1.953 1.952 4.512 2.929 7.071 2.929s5.119-.977 7.071-2.929l39.14-39.141c3.205-2.516 7.868-2.305 10.819.647a8.119 8.119 0 012.394 5.779c0 2.183-.85 4.234-2.394 5.778l-38.447 38.447c-3.905 3.905-3.905 10.237 0 14.143 1.953 1.952 4.512 2.929 7.071 2.929s5.119-.977 7.071-2.929l25.71-25.71c3.205-2.521 7.87-2.309 10.823.645 1.544 1.543 2.394 3.596 2.394 5.779s-.85 4.235-2.394 5.778l-71.41 71.411c-14.934 14.934-34.779 23.152-55.894 23.152h-.114l-17.932-.025h-.014a10.001 10.001 0 00-7.071 2.929l-92.912 92.912c-3.905 3.905-3.905 10.237 0 14.143a9.972 9.972 0 007.071 2.929 9.97 9.97 0 007.071-2.929l89.977-89.978 13.782.02h.143c26.456 0 51.325-10.3 70.036-29.01l71.407-71.411c10.984-10.984 10.984-28.858 0-39.843z")
      | {{ $t('view.about.colab')}}
    router-link(to="/about").btn
      svg(xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512")
        circle(cx="256" cy="378.5" r="25")
        path(d="M256 0C114.516 0 0 114.497 0 256c0 141.484 114.497 256 256 256 141.484 0 256-114.497 256-256C512 114.516 397.503 0 256 0zm0 472c-119.377 0-216-96.607-216-216 0-119.377 96.607-216 216-216 119.377 0 216 96.607 216 216 0 119.377-96.607 216-216 216z")
        path(d="M256 128.5c-44.112 0-80 35.888-80 80 0 11.046 8.954 20 20 20s20-8.954 20-20c0-22.056 17.944-40 40-40s40 17.944 40 40-17.944 40-40 40c-11.046 0-20 8.954-20 20v50c0 11.046 8.954 20 20 20s20-8.954 20-20v-32.531c34.466-8.903 60-40.26 60-77.469 0-44.112-35.888-80-80-80z")
      | {{ $t('nav.about')}}
</template>

<script>
import { scrollTo } from '@/directive/scroll.js'
import { mixinUpdateStore } from '@/mixins/mixinUpdateStore.js'

export default {
  name: 'nav-menu',
  directives: { 'scroll-to': scrollTo },
  mixins: [mixinUpdateStore],
  data () {
    return {
      menu_show: false
    }
  },
  mounted () {
    let nav_links = document.querySelectorAll('.nav-menu .btn')
    for(let item of nav_links) {
      item.addEventListener('focus', this.focusOpenMenu)
      item.addEventListener('focusout', this.focusExitMenu)
    }
  },
  methods: {
    menuShow () { this.menu_show = !this.menu_show },
    checkLang () { this.setLangParams(this.lang) },
    focusOpenMenu () { this.menu_show = true },
    focusExitMenu () { this.menu_show = false }
  }
}
</script>
<style lang="stylus">
.nav
  position absolute
  top 0
  left 0
  right 0
  +tablet()
    position relative
.nav-menu
  background linear-gradient(color4, rgba(color4, .6))
  bottom 0
  box-sizing border-box
  left 0
  padding 20px 10px
  position fixed
  right 0
  top 0
  transition all .3s
  z-index 991
  float left
  opacity 0
  pointer-events none
  &:after
    content ''
    display table
    clear both
  &.active
    pointer-events all
    opacity 1
  .title
    color color1
    font-size 1.5em
    +tablet()
      display none
  .title,
  .btn
    margin-bottom 1em
    margin-right 0
    text-align center
  .btn:last-of-type
    margin-bottom 0
  +tablet()
    background transparent
    opacity 1
    position relative
    padding 0
    pointer-events all
    .btn
      border-radius 0
      color #fff
      float left
      background transparent
      border 0
      box-shadow none
      margin 0
      text-shadow 0 2px 1px rgba(#000, .3)
      font-size 0.9em
      font-weight 400
      padding 1.2em 0.5em
      &:hover,
      &:active
        background transparent
      &:first-of-type
        border-radius 6px 0 0 6px
      &:first-of-type,
      &:nth-of-type(2)
        border-right 0
      &:last-of-type
        border-radius 0 6px 6px 0
      &.router-link-exact-active
        color color2
        background transparent
        &:hover
          color color2
        svg, path, circle
          fill color2
      svg, path, circle
        fill #fff
  +desktop()
    width 60%
    .btn
      font-size 1.2em
      font-weight 400
      padding 1em
.menu
  height 50px
  right 10px
  padding 10px 0
  position absolute
  top 10px
  width 50px
  z-index 999
  &:hover span
    background color4 - 80
    transform scale(1.3)
  &.active
    position fixed
    span
      &:nth-of-type(1)
        transform rotate(45deg) translate(6px, 5px)
      &:nth-of-type(2)
        opacity 0
      &:nth-of-type(3)
        transform rotate(-45deg) translate(6px, -5px)

  span
    background color4 - 80
    border-radius 4px
    display block
    height 2px
    margin 0 auto 6px
    transition .3s transform, .1s opacity
    width 50%
    &:last-of-type
      margin 0 auto
  +tablet()
    display none
</style>
