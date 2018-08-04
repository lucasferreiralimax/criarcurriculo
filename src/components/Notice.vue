<template lang="pug">
  .popup.animate_intro(v-if='notice' @click='close_notice()')
    article.notice
      p {{ $t('text.message') }}
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
      this.open_notice()
    }, 9000)
    setTimeout(() => {
      this.close_notice()
    }, 16000)
  },
  methods: {
    open_notice () {
      this.notice = true
    },
    close_notice () {
      this.notice = false
    }
  }
}
</script>
<style lang="stylus">
.popup
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
  transform scale(1.15)
  z-index 9999
  border-radius 6px
  box-shadow 0 6px 13px red - 30
  cursor pointer
  box-sizing border-box
  p
    color #fff
</style>
