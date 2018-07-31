<template lang="pug">
article.notice.display-n-print(v-if='notice' @click='close_notice()')
  p {{ $t('text.message') }}
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
    }, 3000)
    setTimeout(() => {
      this.close_notice()
    }, 9000)
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
.notice
  background red
  position fixed
  top 0
  left 0
  width 260px
  padding 30px
  margin 20px
  z-index 9999
  border-radius 6px
  box-shadow 0 6px 13px red
  cursor pointer
  opacity .8
  p
    color #fff
</style>
