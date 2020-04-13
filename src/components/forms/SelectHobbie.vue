<template lang="pug">
.select-hobbie
  h2.title Hobbies
  el-tag(:key='tag' v-for='tag in dynamicTags' closable :disable-transitions='false'  @close='handleClose(tag)')
    | {{ tag }}
  el-input.input-new-tag(v-if='inputVisible' v-model='inputValue' ref='saveTagInput' size='mini' @keyup.enter.native='handleInputConfirm' @blur="handleInputConfirm")
  button.btn.plus.bullet.small(v-else type="button" @click="showInput")
    i +
</template>

<script>
import { mixinUpdateStore } from '@/mixins/mixinUpdateStore.js'

export default {
  name: 'select-hobbie',
  props: ['errors'],
  mixins: [mixinUpdateStore],
  data() {
    return {
      dynamicTags: ['Ajudar'],
      inputVisible: false,
      inputValue: ''
    };
  },
  methods: {
    handleClose(tag) {
      this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
    },

    showInput() {
      this.inputVisible = true;
      this.$nextTick(() => this.$refs.saveTagInput.$refs.input.focus());
    },

    handleInputConfirm() {
      let inputValue = this.inputValue;
      if ( !this.dynamicTags.includes(inputValue) && inputValue ) {
        this.dynamicTags.push(inputValue);
      }
      this.inputVisible = false;
      this.inputValue = '';
    }
  }
}
</script>

<style lang="stylus">
.select-hobbie
  padding 10px
  color #fff
  position relative
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
    font-size 0.8em
    margin-top 10px
    margin-right 10px

  .btn.plus.bullet.small
    line-height 30px
    padding-top 0 !important
    padding-bottom 0 !important
    margin 10px 0 5px
    display inline-block
    transform translateY(4px)

  .input-new-tag
    width 90px !important
    vertical-align bottom
    margin-top 10px
</style>
