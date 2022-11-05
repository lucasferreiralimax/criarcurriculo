<template lang="pug">
label.btn.icon-render(@click.prevent="iconToggle" role="button" type="button" :aria-label="$t('aria-label.icones')")
  svg(xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="30" fill="#fff")
    path(d="M508.177 245.995C503.607 240.897 393.682 121 256 121S8.394 240.897 3.823 245.995a15.002 15.002 0 000 20.01C8.394 271.103 118.32 391 256 391s247.606-119.897 252.177-124.995a15.004 15.004 0 000-20.01zM256 361c-57.891 0-105-47.109-105-105s47.109-105 105-105 105 47.109 105 105-47.109 105-105 105z")
    path(d="M271 226c0-15.09 7.491-28.365 18.887-36.53C279.661 184.235 268.255 181 256 181c-41.353 0-75 33.647-75 75s33.647 75 75 75c37.024 0 67.668-27.034 73.722-62.358C299.516 278.367 271 255.522 271 226z")
  | {{ $t('layout.icones') }}
  el-switch(
    :value="icon_render"
    active-color="#13ce66"
    inactive-color="#ff4949"
    :aria-label="$t('aria-label.icones')"
    :aria-checked="icon_render ? true : false")
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'app-icon-render',
  computed: mapState({ icon_render: state => state.icon_render }),
  mounted () {
    let icon_render_app = JSON.parse(localStorage.getItem("icon_render_app"))
    typeof icon_render_app === 'object' || icon_render_app ? this.iconSet(true) : this.iconSet(false)
  },
  methods: {
    iconToggle () { this.icon_render ? this.iconSet(false) : this.iconSet(true) },
    iconSet(status) {
      if(status) {
        this.$store.commit("updateIconRender", true)
        localStorage.setItem("icon_render_app", true)
      } else {
        this.$store.commit("updateIconRender", false)
        localStorage.setItem("icon_render_app", false)
      }
    }
  }
}
</script>

<style lang="stylus">
.icon-render
  border-radius 100px
  width 100%
  margin-bottom 2em
  display block
  .el-switch
    margin-left 10px
    pointer-events none
</style>
