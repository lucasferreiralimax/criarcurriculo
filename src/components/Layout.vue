<template lang="pug">
section.layout
  h2 Layout
  .options
    button.btn.m-0(type="button" @click="setLayout('')")
      | Padrao
      .layout-grid.layout-example-1
    button.btn.m-0(type="button" @click="setLayout('layout_1')")
      | Circular
      .layout-grid.layout-example-2
    button.btn.m-0(type="button" @click="setLayout('layout_2')")
      | Espelho
      .layout-grid.layout-example-3
</template>

<script>
export default {
  name: 'layout',
  data () {
    return {
      layout: 'normal'
    }
  },
  methods: {
    setLayout (type) {
      // localStorage.setItem('layoutType', type)
      document.querySelector('.view .content').classList = 'content'
      document.querySelector('.view .content').classList.add(type)
    }
  }
}
</script>

<style lang="stylus" scoped>
.layout
  background transparent
  padding 0 0 1em
  margin 0 auto
  h2
    color #fff
    font-size 1em
    margin-bottom 1em
  .options
    display grid
    grid-template-columns repeat(3, 1fr)
    grid-column-gap 1em
    grid-row-gap 1em
.layout-grid
  background repeating-linear-gradient(to top, #000 15%, #000 18%,  transparent  18%, transparent 25%)
  width 100%
  height 100px
  margin-top 1em
  display flex
  position relative
  &:before,
  &:after
    background #7f7f7f
    content ''
    display flex
    width 30px
    height 30px
  &:after
    width calc(100% - 105px)
    height 40px
    position absolute
    right 0
    top 40px
.layout-example-1
  &:before
    border 3px solid #111
    outline 3px solid #7f7f7f
.layout-example-2
  &:before
    border 3px solid #111
    border-radius 100%
    box-shadow 0 0 0 6px #7f7f7f
  &:after
    height 30px
    top 0
.layout-example-3
  &:before
    border 3px solid #111
    box-shadow 0 0 0 6px #7f7f7f
    position absolute
    right 0
  &:after
    top 0
    left 0
    height 20px

</style>
