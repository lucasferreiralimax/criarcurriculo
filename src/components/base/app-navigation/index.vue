<template lang="pug">
.nav(:class="{ active: menu_show }" @click="checkLang")
  button.btn.menu(:class="{ active: menu_show }" @click="menuShow" role="button" type="button" :aria-label="$t('nav.menu')")
    span
    span
    span
  nav.nav-menu(:class="{ active: menu_show }" @click="menuShow")
    h1.title {{ $t('nav.menu') }}
    router-link(to="/" v-scroll-to="'#curriculo'").btn
      IconHome
      | {{ $t('nav.home')}}
    router-link(to="/contributors").btn
      IconContributors
      | {{ $t('view.about.colab')}}
    router-link(to="/about").btn
      IconInfo
      | {{ $t('nav.about')}}
</template>

<script>
import { scrollTo } from '@/directive/scroll.js'
import { mixinUpdateStore } from '@/mixins/mixinUpdateStore.js'

import IconHome from '@/components/icons/icon-home'
import IconContributors from '@/components/icons/icon-contributors'
import IconInfo from '@/components/icons/icon-info'

export default {
  name: 'app-navigation',
  directives: { 'scroll-to': scrollTo },
  mixins: [mixinUpdateStore],
  components: {
    IconHome,
    IconContributors,
    IconInfo
  },
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
  backdrop-filter blur(5px)
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
    backdrop-filter blur(0)
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
