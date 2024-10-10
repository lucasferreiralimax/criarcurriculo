<template lang="pug">
section.home.content
  .mark
    .content-banner
      figure.user-banner
        img(v-if="theme_app !== 'rose' && theme_app !== 'classic' && theme_app !== 'gold'" src="@/assets/banner_boy.svg" alt="User banner" width="300" height="300")
        img(v-else src="@/assets/banner_girl.svg" alt="User banner" width="300" height="300")
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
    app-actions
      app-font-select
      app-icon-render
      app-theme(:actions="true")
      app-layout
      app-accounts
    app-render
    app-render-print
</template>

<script>
import { mapState } from 'vuex'

import FormCurriculo from '@/components/form-curriculo'
import AppActions from '@/components/lab/app-actions'
import AppRender from '@/components/lab/app-render'
import AppRenderPrint from '@/components/lab/app-render-print'
import AppFontSelect from '@/components/lab/app-font-select'
import AppIconRender from '@/components/lab/app-icon-render'
import AppLayout from '@/components/lab/app-layout'
import AppTheme from '@/components/lab/app-theme'
import AppAccounts from '@/components/lab/app-accounts'

export default {
  name: 'home',
  computed: mapState({
    theme_app: state => state.theme_app,
    home_app: state => state.home_app
  }),
  components: {
    FormCurriculo,
    AppActions,
    AppRender,
    AppRenderPrint,
    AppFontSelect,
    AppIconRender,
    AppLayout,
    AppTheme,
    AppAccounts
  },
  mounted () { this.$store.commit("updateHome", true) },
  destroyed () { this.$store.commit("updateHome", false) }
}
</script>

<style lang="stylus">
.home.content
  .mark
    border-radius 20px
    display flex
    max-width 100%
    +tablet()
      flex-direction row
      margin 1rem auto 0
      border-radius 0
    +desktop()
      margin 0 auto 0
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
      max-width 70%

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
