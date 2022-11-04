<template lang="pug">
.select-hobby
  h2.title {{ user.hobbies.length <= 1 ? $tc('form.hobby', 1) : $tc('form.hobby', 2) }}:
  el-tag(:key='tag' v-for='tag in dynamicTags' closable :disable-transitions='false'  @close='handleClose(tag)')
    | {{ tag }}
  el-input.input-new-tag(v-if='inputVisible' v-model='inputValue' ref='saveTagInput' size='mini' @keyup.enter.native='handleInputConfirm' @blur="handleInputConfirm")
  button.btn.plus(v-else :class="{'small bullet': user.hobbies.length, 'large': !user.hobbies.length }" type="button" @click="showInput" :aria-label="$t('aria-label.hobby')")
    i +
    |   {{ user.hobbies.length == 0 ? $t('aria-label.hobby') : '' }}
</template>

<script>
import { mixinUpdateStore } from '@/mixins/mixinUpdateStore.js'

export default {
  name: 'app-select-hobby',
  props: ['errors'],
  mixins: [mixinUpdateStore],
  created () { this.setHobbies() },
  data() {
    return {
      dynamicTags: [],
      inputVisible: false,
      inputValue: ''
    };
  },
  methods: {
    handleClose(tag) {
      this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1)
      this.updateVuex('updateHobbies', this.dynamicTags)
    },
    showInput() {
      this.inputVisible = true;
      this.$nextTick(() => this.$refs.saveTagInput.$refs.input.focus());
    },
    handleInputConfirm() {
      let inputValue = this.inputValue;
      if ( !this.dynamicTags.includes(inputValue) && inputValue ) {
        this.dynamicTags.push(inputValue);
        this.updateVuex('updateHobbies', this.dynamicTags)
      }
      this.inputVisible = false;
      this.inputValue = '';
    },
    setHobbies () {
      this.setLocalStore()
      this.dynamicTags = this.user.hobbies
    }
  }
}
</script>

<style lang="stylus">
.select-hobby
  padding 10px
  color #fff
  position relative
  cursor default
  border-top 1px solid rgba(255,255,255,0.3)
  h2
    font-size 1em
    color #000

  .el-tag,
  .button-new-tag,
  .input-new-tag input
    height auto !important
    padding 0.5em 1em !important
    border-radius 100px !important
  .el-tag
    color #000
    font-size 0.8em
    margin-top 10px
    margin-right 10px
  .el-tag__close
    color #000
    transition .3s all
    &:hover
      background color3
  .btn.plus
    margin 10px 0 5px
    transition .3s background
    &.bullet.small
      line-height 30px
      padding-top 0 !important
      padding-bottom 0 !important
      display inline-block
      transform translateY(4px)

  .input-new-tag
    width 90px !important
    vertical-align bottom
    margin-top 10px
+htmlDir()
  .select-hobby
    .el-tag
      margin-left 15px
      margin-right auto
      .el-icon-close
        left -5px
        right auto
</style>
