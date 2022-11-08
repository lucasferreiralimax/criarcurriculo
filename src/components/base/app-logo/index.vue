<template lang="pug">
.logo
  IconLogo
  template(v-if="type")
    router-link(to="/" custom v-slot="{ navigate }")
      h1(@click="navigate" v-scroll-to="'#curriculo'" role="link")
        | {{ `${$t('view.home.name1')}\n${$t('view.home.name2')}` }}
  template(v-else)
    small
      | {{ $t('view.home.name1') }}
      br
      | {{ $t('view.home.name2') }}
</template>

<script>
import { scrollTo } from '@/directive/scroll.js'
import IconLogo from '@/components/icons/icon-logo'

export default {
  name: 'app-logo',
  props: ['type'],
  directives: { 'scroll-to': scrollTo },
  components: { IconLogo }
}
</script>

<style lang="stylus">
.logo
  color color1 + 10
  cursor pointer
  width 200px
  text-shadow 0 2px 10px rgba(#000, .5), 0 2px 40px color2, 0 2px 80px color2
  text-align left
  float left
  box-sizing border-box
  h1
    white-space break-spaces
  h1, small
    font-size 20px
    line-height 30px
    font-weight 400
  svg
    float left
    margin-right 10px
  +break(370px)
    width 100%
      h1, small
        font-size 15px
      svg
        width 40px
</style>
