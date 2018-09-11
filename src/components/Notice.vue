<template lang="pug">
  section.popup.animate_intro(v-if='notice' @click='close_notice()')
    article.notice
      button(type="button") X
      p {{ $t('view.home.message') }}
      .time
    .overlay
</template>

<script>
export default {
  name: 'notice-page',
  created () {
    let notice = window.localStorage.getItem('notice')

    setTimeout(() => { this.close_notice() }, 16000)

    if(!notice || notice == "y") {
      window.localStorage.setItem('notice', 'y')
      this.notice = window.localStorage.getItem('notice') == 'y' ? true : false
    }
  },
  data () {
    return {
      notice: false
    }
  },
  methods: {
    close_notice () {
      this.notice = false
      window.localStorage.setItem('notice', 'n')
    }
  }
}
</script>
<style lang="stylus">
.popup
  position absolute
  z-index 999
  .overlay
    background rgba(#000, .7)
    bottom 0
    height 100vh
    left 0
    position fixed
    right 0
    top 0
    width 100vw
    z-index 99
.notice
  background red - 30
  border 1px solid rgba(#fff, .5)
  border-radius 6px
  box-shadow 0 6px 13px red - 90, 0 7px 0 0px #fff
  box-sizing border-box
  cursor pointer
  left calc(50% - 130px)
  padding 30px
  position fixed
  text-align center
  top calc(50% - 54px)
  transition all .3s
  width 260px
  z-index 9999
  &:hover
    transform scale(1.1)
    button
      transform scale(1.5)
  button
    background rgba(#000, .6)
    border 1px solid #fff
    border-radius 50%
    color #fff
    cursor pointer
    outline none
    padding 5px 8px
    position absolute
    right -10px
    top -10px
    transition all .3s
    &:hover
      background #fff
      color rgba(#000, .6)
  p
    color #fff
</style>
