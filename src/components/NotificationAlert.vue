<template lang="pug">
section.notification(v-if="notification")
  h2 {{ $t('form.errors.attention') }}
  button.btn.delete.bullet.small(type="button" @click="closeNotification" :aria-label="$t('aria-label.notification_remove')")
    svg(viewBox="0 0 329.269 329" xmlns="http://www.w3.org/2000/svg")
      path(d="M194.8 164.77L323.013 36.555c8.343-8.34 8.343-21.825 0-30.164-8.34-8.34-21.825-8.34-30.164 0L164.633 134.605 36.422 6.391c-8.344-8.34-21.824-8.34-30.164 0-8.344 8.34-8.344 21.824 0 30.164l128.21 128.215L6.259 292.984c-8.344 8.34-8.344 21.825 0 30.164a21.266 21.266 0 0015.082 6.25c5.46 0 10.922-2.09 15.082-6.25l128.21-128.214 128.216 128.214a21.273 21.273 0 0015.082 6.25c5.46 0 10.922-2.09 15.082-6.25 8.343-8.34 8.343-21.824 0-30.164zm0 0")
  .error
    p(v-for="item of errors") {{ item }}
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'notification-alert',
  computed: mapState({ errors: state => state.errors }),
  data () {
    return {
      notification: false
    }
  },
  watch: {
    errors(newValue) { this.notification = newValue == '' ?  false : true },
  },
  methods: {
    closeNotification () { this.notification = false }
  }
}
</script>

<style lang="stylus">
.notification
  background #fff
  padding 1em
  border-radius 25px
  position fixed
  bottom 1em
  left 1em
  right 1em
  z-index 99
  box-shadow 0 0 0 3px rgba(#000, .2)
  +tablet()
    left auto
  h2
    font-size 1.2em
    margin-bottom .8em
  svg
    pointer-events none
  .delete
    position absolute
    top 10px
    right 10px
  .error
    font-size 1em
    color color3
    max-height 300px
    overflow-y auto
    p
      border-top 1px solid #aeaeae
      padding-top .5em
      margin-top .5em
+htmlDir()
  .notification .delete
    left 10px
    right auto
</style>
