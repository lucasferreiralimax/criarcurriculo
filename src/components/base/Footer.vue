<template lang="pug">
footer#final(:class="{ 'home': home_app }")
  logo-app.credits.curriculo
</template>

<script>
import { mapState } from 'vuex'

import LogoApp from '@/components/base/Logo'

export default {
  name: 'footer-app',
  computed: mapState({ home_app: state => state.home_app }),
  components: { LogoApp },
}
</script>

<style lang="stylus">
#final
  font-weight normal
  padding 20px 0 100px
  text-align center
  position relative
  z-index 9
  pointer-events none
  display flex
  align-items center
  justify-content center
  +break(370px)
    flex-direction column
  &.home
    +tablet()
      padding 20px 0 50px
      width 50%
      transform translateX(100%)
      clear both
    +desktop()
      width 38%
      transform translateX(150%)
    +ultrawide()
      width 34.5%
+htmlDir()
  #final.home
    +tablet()
      transform translateX(0)
    +desktop()
      transform translateX(-50%)
</style>
