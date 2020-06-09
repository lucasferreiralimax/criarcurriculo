<template lang="pug">
section.layout
  h2 {{ $t('layout.title') }}
  .options
    button.btn.m-0(type="button" @click="setLayout()")
      | {{ $t('layout.default') }}
      .layout-grid.layout-1
    button.btn.m-0(type="button" @click="setLayout('layout-circle')")
      | {{ $t('layout.circle') }}
      .layout-grid.layout-2
    button.btn.m-0(type="button" @click="setLayout('layout-mirror')")
      | {{ $t('layout.mirror') }}
      .layout-grid.layout-3
</template>

<script>
export default {
  name: 'layout',
  mounted () {
    let layoutType = localStorage.getItem('layoutType')
    if(layoutType) { this.setLayout(layoutType) }
  },
  methods: {
    setLayout (type) {
      localStorage.removeItem('layoutType')
      document.querySelector('.view .content').classList = 'content'

      if(type) {
        localStorage.setItem('layoutType', type)
        document.querySelector('.view .content').classList.add(type)
      }
    }
  }
}
</script>

<style lang="stylus">
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
.layout-1,
.layout-2,
.layout-3
  &:before
    border 3px solid #999
    box-shadow 0 0 0 6px #fff
.layout-1
  &:before
    outline 3px solid #fff
.layout-2
  &:before
    border-radius 100%
  &:after
    height 30px
.layout-3
  &:before
    position absolute
    right 0
  &:after
    top 0
    left 0
    height 20px
.layout-circle
  .figure
    height 120px
    width 120px
    border-radius 100%
    .btn
      bottom 0
      transform translateY(calc(-100% - 15px)) scale(.9)
  .info.photo
    padding-left 140px
.layout-mirror
  .info,
  .exps,
  .cademy,
  .hobby,
  label[for="GET-about"]
    text-align right
  .contact-info
    float right
  .figure
    right 3em
  .info.photo
    padding-left 0
    padding-right 140px
  label
    &[for^='GET-telephone'],
    &[for^='GET-email'],
    &[for^='GET-site']
      margin-right 0
      margin-left 1em

+htmlDir()
  .layout-grid
    &:after
      right auto
      left 0
  .layout-1
    .info.photo
      padding-right 140px
  .layout-2
    text-align left
    .info,
    .exps,
    .cademy,
    .hobby,
    label[for="GET-about"]
      float left
      text-align left
    .contact-info
      float left
    .figure
      left 3em
      right auto
    .info.photo
      padding-left 120px
      padding-right 0
    label
      &[for^='GET-telephone'],
      &[for^='GET-email'],
      &[for^='GET-site']
        margin-right 1em !important
        margin-left 0 !important
  .layout-3
    &:before
      right auto
      left 0
    &:after
      left auto
      right 0
</style>
