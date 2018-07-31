<template lang='pug'>
  footer.footer.animate_intro.display-n-print
    a.link_open(href='https://gitlab.com/lucaslimax/curriculogratis' target='_blank' rel="noopener")
      | Link código fonte do projeto
      svg(width="60" height="60" viewBox="0 0 36 36")
        path(fill="#e24329" d="M2 14l9.38 9v-9l-4-12.28c-.205-.632-1.176-.632-1.38 0z")
        path(fill="#e24329" d="M34 14l-9.38 9v-9l4-12.28c.205-.632 1.176-.632 1.38 0z")
        path(fill="#e24329" d="M18,34.38 3,14 33,14 Z")
        path(fill="#fc6d26" d="M18,34.38 11.38,14 2,14 6,25Z")
        path(fill="#fc6d26" d="M18,34.38 24.62,14 34,14 30,25Z")
        path(fill="#fca326" d="M2 14L.1 20.16c-.18.565 0 1.2.5 1.56l17.42 12.66z")
        path(fill="#fca326" d="M34 14l1.9 6.16c.18.565 0 1.2-.5 1.56L18 34.38z")
    scroll-top
</template>

<script>
import ScrollTop from '@/components/ScrollTop.vue'

export default {
  name: 'footer-page',
  components: {
    ScrollTop
  }
}
</script>

<style lang='stylus'>
  .link_open
    font-size 0
    margin 0 auto
    clear both
    width 60px
    margin-bottom 50px
    transition .5s all
    position relative
    line-height 0
    display block
    filter grayscale(100%)
    &:after, &:before
      box-sizing border-box
      opacity 0
      pointer-events none
      display block
    &:after
      content 'Projeto Open Source GitLab'
      transition .5s opacity, 2s color, .5s transform
      width 60px
      background #666
      border-radius 4px
      padding 6px 6px 8px
      font-size 7px
      line-height 9px
      color #fff
      position absolute
      bottom 80px
      left calc(50% - 30px)
      transform scale(0)
    &:before
      content ''
      transition .1s all
      width 1px
      height 1px
      border 5px solid transparent
      border-top 5px solid #666
      position relative
      top -11px
      left calc(50% - 5px)
    &:hover
      transform scale(1.3)
      filter grayscale(0%)
      animation .5s tanuki infinite alternate
      &:after, &:before
        opacity 1
        color #fff
        transition 1s opacity
        transform scale(1)
        pointer-events all
      &:before
        transition 1.3s all
</style>
