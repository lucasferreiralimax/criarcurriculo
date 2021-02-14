<template lang="pug">
  section.home.content
    hooper.mark(:autoPlay="true" :infiniteScroll="true")
      slide(:index='0').center
        figure.user-banner
          img(v-if="theme_app !== 'rose' && theme_app !== 'classic' && theme_app !== 'gold'" src="../assets/banner_boy.svg" alt="User banner" width="300" height="300")
          img(v-else src="../assets/banner_girl.svg" alt="User banner" width="300" height="300")
        div
          h2 {{ $t('view.home.text1') }}
          h2#start {{ $t('view.home.text2') }}
      slide(:index='1').center.github
        h2 {{ $t('view.about.slide2') }}
      slide(:index='2').center.help
        svg(width="100" viewBox="0 0 512.001 512.001" xmlns="http://www.w3.org/2000/svg")
            path(d="M135.105 191.054L17.072 73.021c-3.906-3.903-10.237-3.904-14.143 0-3.905 3.905-3.905 10.237 0 14.143l115.099 115.097-.02 13.781c-.008 5.523 4.463 10.007 9.985 10.015h.015c5.516 0 9.992-4.468 10-9.985l.026-17.932a10 10 0 00-2.929-7.086zM225.871 117.994h-.015l-23.595.033L87.165 2.929c-3.905-3.904-10.237-3.904-14.143 0-3.905 3.905-3.905 10.237 0 14.143l118.033 118.032a10.003 10.003 0 007.071 2.929h.014l27.745-.039c5.523-.008 9.994-4.491 9.986-10.014-.008-5.519-4.483-9.986-10-9.986zM438.981 2.93c-1.86-1.86-4.44-2.93-7.07-2.93s-5.21 1.069-7.07 2.93c-1.86 1.861-2.93 4.44-2.93 7.07s1.07 5.21 2.93 7.069c1.86 1.861 4.44 2.931 7.07 2.931s5.21-1.07 7.07-2.931c1.86-1.859 2.93-4.439 2.93-7.069s-1.07-5.21-2.93-7.07zM409.692 32.216c-3.905-3.904-10.237-3.904-14.142 0l-85.811 85.811-13.782-.02h-.143c-26.456 0-51.325 10.3-70.036 29.01l-8.987 8.989c-3.905 3.906-3.905 10.237 0 14.143a9.972 9.972 0 007.071 2.929 9.97 9.97 0 007.071-2.929l8.988-8.989c14.934-14.934 34.779-23.152 55.894-23.152h.114l17.932.025h.014c2.652 0 5.196-1.054 7.071-2.929l88.746-88.745c3.905-3.905 3.905-10.237 0-14.143zM509.072 73.02c-3.904-3.904-10.237-3.904-14.142 0L376.897 191.054a10.003 10.003 0 00-2.929 7.086l.04 27.745c.008 5.518 4.483 9.985 10 9.985h.015c5.523-.008 9.994-4.491 9.986-10.015l-.034-23.595L509.072 87.163c3.905-3.905 3.905-10.237 0-14.143zM509.072 424.837L393.974 309.739l.02-13.782a98.526 98.526 0 00-7.558-38.088c-2.116-5.102-7.967-7.521-13.068-5.406-5.102 2.116-7.522 7.967-5.406 13.068a78.647 78.647 0 016.031 30.397l-.026 17.932a10 10 0 002.929 7.086L494.93 438.98c1.953 1.952 4.512 2.929 7.071 2.929s5.119-.977 7.071-2.929c3.905-3.906 3.906-10.238 0-14.143zM438.981 494.929L320.947 376.897a10.003 10.003 0 00-7.071-2.929h-.014l-27.745.039c-5.523.008-9.994 4.491-9.986 10.014.008 5.519 4.483 9.986 10 9.986h.015l23.595-.033 115.098 115.098c1.953 1.952 4.512 2.929 7.071 2.929s5.119-.977 7.071-2.929c3.905-3.905 3.905-10.237 0-14.143zM87.161 494.93c-1.86-1.861-4.44-2.93-7.07-2.93s-5.21 1.069-7.07 2.93c-1.86 1.86-2.93 4.44-2.93 7.07s1.07 5.21 2.93 7.069a10.077 10.077 0 007.07 2.931c2.63 0 5.21-1.07 7.07-2.931 1.87-1.859 2.93-4.439 2.93-7.069s-1.06-5.21-2.93-7.07z")
            path(d="M357.633 253.729a28.036 28.036 0 00-7.565-5.391 28.01 28.01 0 003.589-13.769c0-7.525-2.93-14.6-8.251-19.922a28.055 28.055 0 00-8.067-5.637c5.043-10.486 3.231-23.471-5.451-32.154-8.681-8.679-21.66-10.494-32.145-5.456a28.193 28.193 0 00-5.646-8.063c-10.986-10.984-28.858-10.982-39.843 0l-39.925 39.926c-.762-8.093-4.939-15.795-12.039-20.766-6.341-4.44-14.024-6.104-21.634-4.682-7.61 1.422-14.174 5.745-18.486 12.174l-27.393 40.85c-11.007 16.415-16.811 35.539-16.783 55.305l.034 23.594L2.93 424.837c-3.905 3.905-3.905 10.237 0 14.143 1.952 1.952 4.512 2.929 7.071 2.929s5.119-.977 7.071-2.929l118.033-118.033a10.005 10.005 0 002.929-7.086l-.04-27.744a78.773 78.773 0 0113.395-44.138l27.392-40.85a8.509 8.509 0 015.547-3.652 8.511 8.511 0 016.491 1.404c3.687 2.582 4.747 7.619 2.414 11.468l-10.704 17.656c-3.376 5.568-2.107 12.527 3.016 16.547 5.123 4.02 12.185 3.594 16.79-1.01l66.061-66.062c3.187-3.188 8.372-3.187 11.559 0a8.123 8.123 0 012.394 5.779 8.106 8.106 0 01-1.747 5.041l-39.094 39.185c-3.905 3.905-3.905 10.237 0 14.143 3.905 3.904 10.237 3.904 14.143 0l50.538-50.629c3.187-3.187 8.372-3.187 11.558-.001 3.187 3.188 3.187 8.372 0 11.559l-50.583 50.584c-3.905 3.905-3.905 10.237 0 14.143 1.953 1.952 4.512 2.929 7.071 2.929s5.119-.977 7.071-2.929l39.14-39.141c3.205-2.516 7.868-2.305 10.819.647a8.119 8.119 0 012.394 5.779c0 2.183-.85 4.234-2.394 5.778l-38.447 38.447c-3.905 3.905-3.905 10.237 0 14.143 1.953 1.952 4.512 2.929 7.071 2.929s5.119-.977 7.071-2.929l25.71-25.71c3.205-2.521 7.87-2.309 10.823.645 1.544 1.543 2.394 3.596 2.394 5.779s-.85 4.235-2.394 5.778l-71.41 71.411c-14.934 14.934-34.779 23.152-55.894 23.152h-.114l-17.932-.025h-.014a10.001 10.001 0 00-7.071 2.929l-92.912 92.912c-3.905 3.905-3.905 10.237 0 14.143a9.972 9.972 0 007.071 2.929 9.97 9.97 0 007.071-2.929l89.977-89.978 13.782.02h.143c26.456 0 51.325-10.3 70.036-29.01l71.407-71.411c10.984-10.984 10.984-28.858 0-39.843z")
        h2 {{ $t('view.about.slide3') }}
      hooper-navigation(slot="hooper-addons")
      hooper-pagination(slot="hooper-addons")
    .container
      form-curriculo
      actions-curriculo
        font-select
        icon-render
        theme-app(:actions="true")
        layout-app
        accounts
      render
</template>

<script>
import { mapState } from 'vuex'
import { Hooper, Slide, Pagination as HooperPagination, Navigation as HooperNavigation } from 'hooper';

import FormCurriculo from '@/components/curriculo/FormCurriculo'
import ActionsCurriculo from '@/components/curriculo/ActionsCurriculo'
import Render from '@/components/curriculo/Render'
import FontSelect from '@/components/FontSelect'
import IconRender from '@/components/IconRender'
import LayoutApp from '@/components/Layout'
import ThemeApp from '@/components/ThemeApp'
import Accounts from '@/components/Accounts'

export default {
  name: 'home',
  computed: mapState({
    theme_app: state => state.theme_app,
    home_app: state => state.home_app
  }),
  components: {
    FormCurriculo,
    ActionsCurriculo,
    Render,
    FontSelect,
    IconRender,
    LayoutApp,
    ThemeApp,
    Accounts,
    Hooper,
    Slide,
    HooperPagination,
    HooperNavigation
  },
  mounted () { this.$store.commit("updateHome", true) },
  destroyed () { this.$store.commit("updateHome", false) }
}
</script>

<style lang="stylus">
.home.content
  .hooper.mark
    border-radius 25px
    padding 0
    margin 1em auto 0
    max-width calc(100% - 1em)
    height 500px
    user-select none
    overflow hidden
    +tablet()
      height 300px
    +desktop()
      margin 1em auto 2em
      max-width 70%
  .hooper-track
    cursor grab
    &.is-dragging
      cursor grabbing
  .hooper-pagination
    bottom 10px
  .hooper-indicator
    width 20px
    height 20px
    border-radius 50px
    margin 0 10px
    outline none
    &:hover, &.is-active
      background green
      box-shadow 0 0 0 2px #fff
  .hooper-navigation
    button
      width 50px
      height 50px
      background rgba(#fff, .3)
      border-radius 150px
      border 2px solid #fff
      outline none
      display flex
      align-items center
      justify-content center
      transition .3s all
      &:active
        transform scale(.8)
      &.is-disabled
        pointer-events none
        opacity 0
    svg
      fill #fff
  .hooper-next
    right 10px
  .hooper-prev
    left 10px
  .hooper-slide
    border-radius 25px
    display flex
    flex-direction column
    justify-content center
    align-items center
    +tablet()
      flex-direction row
    &.github
    &.help
      background #fff
      display flex
      justify-content center
      align-items center
      background-size cover
      h2
        color #fff
    &.github
      background-image url('../assets/bg-grey.jpg')
      svg
        transform translateY(-10px)
      path
        fill #fff
    &.help
      background-image url('../assets/bg-rosa.jpg')
      svg
        fill #fff
        margin-bottom 2em
        animation world 7s infinite linear
  .mark
    display flex
    justify-content center
    align-items center
    flex-direction column
    max-width 100%
    margin 0
    +tablet()
      flex-direction row
.user-banner
  float left
  width 100%
  max-width 330px
  display flex
  justify-content center
  img
    width 100%
  +tablet()
    width 330px
    min-width 330px
    margin-right 2em
.center
  text-align center
  +tablet()
    display flex
    justify-content center
    align-items center
</style>
