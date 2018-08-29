<template lang="pug">
  section.popup.animate_intro(v-if='notice' @click='close_notice()')
    article.notice
      button(type="button") X
      p {{ $t('text.message') }}
      .time
    .overlay
</template>

<script>
export default {
  name: 'notice-page',
  data () {
    return {
      notice: false
    }
  },
  created () {
    setTimeout(() => {
      this.close_notice()
    }, 16000)
    let notice = window.localStorage.getItem('notice')
    if(!notice || notice == "y") {
      window.localStorage.setItem('notice', 'y')
      this.notice = window.localStorage.getItem('notice') == 'y' ? true : false
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
    width 100vw
    height 100vh
    position fixed
    top 0
    bottom 0
    left 0
    right 0
    z-index 99
.notice
  background red - 30
  text-align center
  position fixed
  top calc(50% - 54px)
  left calc(50% - 130px)
  width 260px
  padding 30px
  z-index 9999
  border-radius 6px
  border 1px solid rgba(#fff, .5)
  box-shadow 0 6px 13px red - 90, 0 7px 0 0px #fff
  cursor pointer
  box-sizing border-box
  transition all .3s
  &:hover
    transform scale(1.1)
    button
      transform scale(1.5)
  button
    border 1px solid #fff
    border-radius 50%
    background rgba(#000, .6)
    color #fff
    padding 5px 8px
    position absolute
    top -10px
    right -10px
    transition all .3s
    cursor pointer
    outline none
    &:hover
      background #fff
      color rgba(#000, .6)
  p
    color #fff
</style>
