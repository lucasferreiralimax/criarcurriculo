<template lang="pug">
section.layout
  h2 {{ $t('layout.title') }}
  .options
    button.btn.m-0(type="button" @click="setLayout('')")
      | {{ $t('layout.default') }}
      .layout-grid.layout-example-1
    button.btn.m-0(type="button" @click="setLayout('layout_1')")
      | {{ $t('layout.circle') }}
      .layout-grid.layout-example-2
    button.btn.m-0(type="button" @click="setLayout('layout_2')")
      | {{ $t('layout.mirror') }}
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

<style lang="stylus">
.layout_1
  .figure
    height 120px
    width 120px
    border-radius 100%
    .btn
      bottom 0
      transform translateY(calc(-100% - 15px)) scale(.9)
.layout_2
  .info,
  .exps,
  .cademy,
  label[for="GET-about"]
    text-align right
  .figure
    float right
    margin 0 0 20px 20px
  label
    &[for^='GET-telephone'],
    &[for^='GET-email'],
    &[for^='GET-site']
      margin-right 0
      margin-left 1em
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
  .btn
    background #fff
    &:hover
      background #fff
.layout-grid
  background repeating-linear-gradient(to top, #999 15%, #999 18%,  transparent  18%, transparent 25%)
  width 100%
  height 100px
  margin-top 1em
  display flex
  position relative
  &:before,
  &:after
    background #fff
    content ''
    display flex
    width 30px
    height 30px
  &:after
    width 30%
    height 40px
    position absolute
    right 0
    top 0
.layout-example-1
  &:before
    border 3px solid #999
    outline 3px solid #fff
.layout-example-2
  &:before
    border 3px solid #999
    border-radius 100%
    box-shadow 0 0 0 6px #fff
  &:after
    height 30px
.layout-example-3
  &:before
    border 3px solid #999
    box-shadow 0 0 0 6px #fff
    position absolute
    right 0
  &:after
    top 0
    left 0
    height 20px
+htmlDir()
  .layout_2
    text-align left
    .info,
    .exps,
    .cademy,
    label[for="GET-about"]
      float left
      text-align left
    .figure
      margin 0 20px 20px 0
      float left
    label
      &[for^='GET-telephone'],
      &[for^='GET-email'],
      &[for^='GET-site']
        margin-right 1em !important
        margin-left 0 !important
  .layout-grid
    &:after
      right auto
      left 0
  .layout-example-3
    &:before
      right auto
      left 0
    &:after
      left auto
      right 0
</style>
