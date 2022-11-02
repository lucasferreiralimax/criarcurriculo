<template lang="pug">
section.layout
  h2 {{ $t('layout.title') }}
  .options
    button.btn.m-0(
      v-for="(layout, index) of layouts" :key="index"
      :class="[ layout_render == layout.name ? 'actived' : '' ]"
      role="checkbox"
      :aria-checked="layout_render == layout.name"
      @click="setLayout(layout.name)"
      type="button"
    )
      | {{ $t(`layout.${layout.type}`) }}
      .layout-grid(:class="`layout-${++index}`")
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'layout',
  computed: mapState({ layout_render: state => state.layout_render }),
  data() {
    return {
      layouts: [
        { name: 'layout-default',        type: 'default' },
        { name: 'layout-circle',         type: 'circle'  },
        { name: 'layout-mirror',         type: 'mirror'  },
        { name: 'layout-sidebar',        type: 'sidebar' },
        { name: 'layout-sidebar-circle', type: 'circle'  },
        { name: 'layout-sidebar-mirror', type: 'mirror'  }
      ]
    }
  },
  mounted () {
    let layoutType = localStorage.getItem('layoutType')
    if(layoutType) {
      this.setLayout(layoutType)
    } else {
      this.setLayout('layout-sidebar-circle')
    }
  },
  methods: {
    setLayout (type) {
      localStorage.setItem('layoutType', type ? type : 'layout-default')
      this.$store.commit("updateLayout", type ? type : 'layout-default')
    }
  }
}
</script>

<style lang="stylus">
.options .actived
  filter invert(1)
  opacity .5

.layout-grid
  background repeating-linear-gradient(to top, #999 15%, #999 18%,  transparent  18%, transparent 25%)
  width 100%
  height 100px
  margin-top 1em
  display flex
  position relative
  pointer-events none
  +break(370px)
    height
    margin-top 0
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
    +break(370px)
      width 20%
.layout
  background transparent
  padding 0 0 1em
  margin 0 auto
  h2
    color #fff
    font-size 1em
    margin-bottom 1em
    text-shadow 0 2px 1px rgba(0,0,0,0.4)
    text-align center
  .options
    display grid
    grid-template-columns repeat(3, 1fr)
    grid-column-gap 1em
    grid-row-gap 1em
    button:nth-of-type(4),
    button:nth-of-type(5),
    button:nth-of-type(6)
      position relative
    +break(300px)
      grid-template-columns 1fr
  .btn
    background #fff
    &:hover
      background #fff
    +break(370px)
      padding 6px
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
.layout-4,
.layout-5,
.layout-6
  &:before
    position absolute
    border 3px solid #999
    top 0
  &:after
    top 0
    left 36px
    width 10px
    height 100px
.layout-5
  &:before
    border-radius 100%
    box-shadow 0 0 0 6px #fff
.layout-6
  &:before
    right 0
  &:after
    top 0
    left auto
    right 36px
    width 10px
    height 100px

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
  .languages,
  .hobby,
  label[for="GET-about"]
    text-align right
  .contact-personal,
  .contact-address
    float right
    text-align right
    justify-content flex-end
  .contact-info
    float right
  .figure
    right 2rem
  .info.photo
    padding-left 0
    padding-right 140px
  label
    &[for^='GET-telephone'],
    &[for^='GET-email'],
    &[for^='GET-site']
      margin-right 0
      margin-left 1em
  .btn.handle.move
    left 0
    right auto
.layout-sidebar.content
.layout-sidebar-circle.content
  .figure
    width 140px
    height 140px
    img
      height 140px
  .info
    transform translateX(188px)
    padding-left 0
    border 0
    &.photo
      max-width calc(100% - 188px)
  [for="GET-about"],
  .languages,
  .hobby,
  .cademy,
  .exps
    padding-left 188px
    position relative
    border 0
    margin-top 1em
    padding-top 1em
    border-top 1px solid #ccc
    h2
      font-size 1em
      position absolute
      left 0px
      margin 0
      width 170px
      text-align right
      display block
.layout-sidebar-mirror.content
  .figure
    width 140px
    height 140px
    position absolute
    right 2em
    img
      height 140px
  label
    &[for^='GET-telephone'],
    &[for^='GET-email'],
    &[for^='GET-site']
      margin-right 0
      margin-left 1em
  .contact-personal,
  .contact-address
    float right
    text-align right
    justify-content flex-end
  .contact-info
    float right
  .info
    transform translateX(0)
    padding-left 0
    border 0
    text-align right
    max-width calc(100% - 188px)
  [for="GET-about"],
  .languages,
  .hobby,
  .cademy,
  .exps
    padding-right 188px
    position relative
    border 0
    margin-top 1em
    padding-top 1em
    border-top 1px solid #ccc
    text-align right
    h2
      font-size 1em
      position absolute
      right 0
      margin 0
      width 170px
      text-align left
      display block
  .btn.handle.move
    left 0
    right auto
.layout-sidebar-circle
  .figure
    border-radius 100%
    .btn
      bottom 0
      transform translateY(calc(-100% - 26px)) scale(.9)

+htmlDir()
  .layout-grid
    &:after
      right auto
      left 0
  .layout-default
    .btn.handle.move
      left 0
      right auto
  .layout-circle
    .info.photo
      padding-right 140px
    .btn.handle.move
      left 0
      right auto
  .layout-mirror
    text-align left
    .info,
    .exps,
    .cademy,
    .languages,
    .hobby,
    label[for="GET-about"]
      text-align left
    .contact-personal,
    .contact-address
      float right
      text-align right
      justify-content flex-end
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
    .btn.handle.move
      left 0
      left auto
  .layout-3
    &:before
      right auto
      left 0
    &:after
      left auto
      right 0
  .layout-4,
  .layout-5,
  .layout-6
    &:after
      right 36px
  .layout-6
    &:before
      right auto
      left 0
    &:after
      right auto
      left 36px
  .layout-sidebar.content,
  .layout-sidebar-circle.content
    .info
      transform translateX(-188px)
      padding-left 0
      padding-right 0
      &.photo
        max-width calc(100% - 188px)
    [for="GET-about"],
    .languages,
    .hobby,
    .cademy,
    .exps
      padding-left 0
      padding-right 188px
      text-align right
      h2
        right 0
        text-align left
    .btn.handle.move
      left 0
      right auto
  .layout-sidebar-mirror.content
    .figure
      left 2em
      right auto
    .contact-personal,
    .contact-address
      float right
      text-align right
      justify-content flex-end
    .contact-info
      float left
      label
        margin-left 0
        margin-right 1rem
    .info
      transform translateX(0)
      padding-left 0
      text-align left
      max-width calc(100% - 188px)
    [for="GET-about"],
    .languages,
    .hobby,
    .cademy,
    .exps
      padding-left 188px
      padding-right 0
      text-align left
      h2
        left 0
        right auto
        text-align right
    .btn.handle.move
      right 0
      left auto
</style>
