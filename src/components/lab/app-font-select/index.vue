<template lang="pug">
section.fontType
  h2 {{ $t('layout.title_font') }}
  label.btn.fontSelect(for="fonttype")
    i.icon
      IconFont
    el-select#fonttype(v-model="fonttype" placeholder="Select" :popper-append-to-body="false")
      el-option(value="normal") Normal
      el-option(value="abel") Abel
      el-option(value="play") Play
      el-option(value="rajdhani") Rajdhani
</template>

<script>
import IconFont from '@/components/icons/icon-font'

export default {
  name: 'app-font-select',
  created () { this.setFont() },
  components: { IconFont },
  mounted () {
    let fontSelectNode = document.querySelector('.fontSelect')

    if(fontSelectNode) {
      for(let item of fontSelectNode.querySelectorAll('.el-select-dropdown__item')) {
        item.setAttribute('id', item.innerHTML.toLowerCase())
      }
    }
  },
  data () {
    return {
      fonts: [],
      fonttype: 'normal'
    }
  },
  methods: {
    clearRender () {
      document.querySelector('.view').classList = "view"
      document.querySelector('.fontSelect').classList = "btn fontSelect"
    },
    setFont () {
      let font = localStorage.getItem('fontSelect');
      !font ? localStorage.setItem('fontSelect', 'normal') : this.fonttype = font;
    }
  },
  watch: {
    fonttype (val) {
      this.clearRender()
      localStorage.setItem('fontSelect', val)
      document.querySelector('.view').classList.add(val)
      document.querySelector('.fontSelect').classList.add(val)
    }
  }
}
</script>

<style lang="stylus">
.fontType
  background transparent
  padding 0 0 1em
  margin 0 auto
  h2
    color #fff
    font-size 1em
    margin-bottom 1em
    text-shadow 0 2px 1px rgba(0,0,0,0.4)
    text-align center
.fontSelect
  border-radius 6px
  display flex
  position relative
  padding-bottom 0 !important
  z-index 9
  .el-select
    width 100%
  .el-input__inner
    border-radius 100px
  &.btn select
    width 100%
  .el-select-dropdown__item
    font-size 1.5em
  #abel,
  &.abel input
    font-family 'Abel', sans-serif
  #play,
  &.play input
    font-family 'Play', sans-serif
  #rajdhani,
  &.rajdhani input
    font-family 'Rajdhani', sans-serif
</style>
