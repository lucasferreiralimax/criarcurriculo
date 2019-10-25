<template lang="pug">
.nav(:class="{ active: menu_show }")
  button.btn.menu(@click="menuShow" role="button" type="button" :aria-label="$t('nav.menu')")
    span
    span
    span
  nav.nav-menu(:class="{ active: menu_show }" @click="menuShow")
    h1.title {{ $t('nav.menu') }}
    router-link(to="/").btn
      svg(xmlns="http://www.w3.org/2000/svg" viewBox="0 0 511.92 511.92")
        path(d="M505.77 46.551a16.889 16.889 0 0 0-17.109-2.697L56.482 218.293a8.538 8.538 0 0 0 6.4 15.83l412.86-166.588-204.8 241.545a8.534 8.534 0 1 0 13.022 11.034L491.861 74.899l-27.785 139.469-27.989 187.025a8.536 8.536 0 0 1-4.267 6.204 8.066 8.066 0 0 1-7.194.333l-116.369-45.756-55.842-23.381a8.533 8.533 0 0 0-11.17 4.565 8.19 8.19 0 0 0-.358 1.801h-.205l-27.725 107.059-39.782-138.965L380.535 158.8a8.533 8.533 0 1 0-10.189-13.653L161.92 300.324 11.682 239.507a8.534 8.534 0 0 0-6.4 15.821l151.04 61.116 40.277 140.612a16.921 16.921 0 0 0 16.316 12.228h.196a16.768 16.768 0 0 0 11.093-4.463c.298-.179.583-.379.853-.597l82.483-84.343 110.592 43.853a24.865 24.865 0 0 0 21.939-1.229 25.524 25.524 0 0 0 12.86-18.526l27.913-186.675 30.72-154.121a17.16 17.16 0 0 0-5.794-16.632zM236.877 427.786l18.014-69.436 28.211 11.844 7.27 2.884-53.495 54.708z")
      | {{ $t('nav.home')}}
    router-link(to="/sobre").btn
      svg(xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512")
        circle(cx="256" cy="378.5" r="25")
        path(d="M256 0C114.516 0 0 114.497 0 256c0 141.484 114.497 256 256 256 141.484 0 256-114.497 256-256C512 114.516 397.503 0 256 0zm0 472c-119.377 0-216-96.607-216-216 0-119.377 96.607-216 216-216 119.377 0 216 96.607 216 216 0 119.377-96.607 216-216 216z")
        path(d="M256 128.5c-44.112 0-80 35.888-80 80 0 11.046 8.954 20 20 20s20-8.954 20-20c0-22.056 17.944-40 40-40s40 17.944 40 40-17.944 40-40 40c-11.046 0-20 8.954-20 20v50c0 11.046 8.954 20 20 20s20-8.954 20-20v-32.531c34.466-8.903 60-40.26 60-77.469 0-44.112-35.888-80-80-80z")
      | {{ $t('nav.about')}}
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
    menuShow () { this.menu_show = !this.menu_show }
  }
}
</script>
<style lang="stylus">
.nav
  position relative
.nav-menu
  background linear-gradient(color4, rgba(color4, .6))
  bottom 0
  box-sizing border-box
  filter blur(100px)
  left 0
  padding 20px 10px
  position fixed
  right 0
  top 0
  transform translate(150vw)
  transition all .35s
  z-index 991
  &.active
    filter blur(0px)
    transform translate(0)
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
    filter blur(0px)
    margin 0  auto
    position relative
    transform translate(0)
    width 70%
    .btn
      border-radius 0
      float left
      margin 0
      width 50%
      &:first-of-type
        border-radius 6px 0 0 6px
        border-right 0
      &:last-of-type
        border-radius 0 6px 6px 0
  +desktop()
    width 40%
.menu
  height 50px
  right 10px
  padding 10px 0
  position fixed
  top 10px
  width 50px
  z-index 999
  &:hover span
    background color4 - 80
    transform scale(1.3)
  span
    background color4 - 80
    border-radius 4px
    display block
    height 2px
    margin 0 auto 6px
    transition .3s transform
    width 50%
    &:last-of-type
      margin 0 auto
  +tablet()
    transform translateX(100px)
    transition .3s transform
</style>
