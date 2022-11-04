<template lang="pug">
.flag
  template(v-for="flag in languages")
    img(v-if="type == flag[1]" :src="require(`@/assets/flags/${flag[1]}.svg`)" :alt="flag[0]" width="30")
</template>

<script>
import { list_languages } from '@/i18n/list_languages'

export default {
  name: 'flag',
  props: ['type'],
  data () {
    return {
      languages: list_languages
    }
  }
}
</script>

<style lang="stylus">
.flag
  width 30px
  height 22px
  background transparent
  padding 0
  margin 0
  display inline-block
  position relative
  img
    position absolute
    top 0
    right 0
    left 0
</style>
