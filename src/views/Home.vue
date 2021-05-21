<template lang="pug">
  section.home.content
    .mark
      .content-banner
        figure.user-banner
          img(v-if="theme_app !== 'rose' && theme_app !== 'classic' && theme_app !== 'gold'" src="../assets/banner_boy.svg" alt="User banner" width="300" height="300")
          img(v-else src="../assets/banner_girl.svg" alt="User banner" width="300" height="300")
        div
          h2 {{ $t('view.home.text1') }}
          iframe.facebook(
            src="https://www.facebook.com/plugins/like.php?href=https%3A%2F%2Fwww.facebook.com%2Fcurriculonovo&width=233&layout=button_count&action=like&size=large&share=true&height=46&appId"
            width="250"
            height="30"
            scrolling="no"
            frameborder="0"
            allowfullscreen="true"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          )
          h2#start {{ $t('view.home.text2') }}
    .container
      form-curriculo
      actions-curriculo
        font-select
        icon-render
        theme-app(:actions="true")
        layout-app
        accounts
      render
</template>

<script>
import { mapState } from 'vuex'

import FormCurriculo from '@/components/curriculo/FormCurriculo'
import ActionsCurriculo from '@/components/curriculo/ActionsCurriculo'
import Render from '@/components/curriculo/Render'
import FontSelect from '@/components/FontSelect'
import IconRender from '@/components/IconRender'
import LayoutApp from '@/components/Layout'
import ThemeApp from '@/components/ThemeApp'
import Accounts from '@/components/Accounts'

export default {
  name: 'home',
  computed: mapState({
    theme_app: state => state.theme_app,
    home_app: state => state.home_app
  }),
  components: {
    FormCurriculo,
    ActionsCurriculo,
    Render,
    FontSelect,
    IconRender,
    LayoutApp,
    ThemeApp,
    Accounts
  },
  mounted () { this.$store.commit("updateHome", true) },
  destroyed () { this.$store.commit("updateHome", false) }
}
</script>

<style lang="stylus">
.home.content
  .mark
    border-radius 0
    display flex
    max-width 100%
    margin 1rem 0 0
    +desktop()
      margin 0
    +tablet()
      flex-direction row
  .facebook
    margin 1rem 0
    border 0
    overflow hidden
  .content-banner
    width 100%
    display flex    
    flex-direction column
    margin 0 auto
    h2
      margin 0
      padding 0
      width 100%
    +tablet()
      flex-direction row-reverse
      align-items center
    +desktop()
      max-width calc(70% - 10rem)

.user-banner
  float left
  width 100%
  display flex
  justify-content center
  img
    width 100%
  +tablet()
    width 330px
    min-width 330px
    margin 0 auto
</style>
