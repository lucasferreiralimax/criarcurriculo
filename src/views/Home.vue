<template lang="pug">
  section.home.content
    .mark.center
      figure.user-banner
        img(v-if="theme_app !== 'rose' && theme_app !== 'classic' && theme_app !== 'gold'" src="../assets/banner_boy.svg" alt="User banner")
        img(v-else src="../assets/banner_girl.svg" alt="User banner")
      div
        h2 {{ $t('view.home.text1') }}
        h2#start {{ $t('view.home.text2') }}
    .container
      form-curriculo
      render
      actions-curriculo
        font-select
        layout-app
        accounts
</template>

<script>
import { mapState } from 'vuex'

import FormCurriculo from '@/components/curriculo/FormCurriculo'
import ActionsCurriculo from '@/components/curriculo/ActionsCurriculo'
import Render from '@/components/curriculo/Render'
import FontSelect from '@/components/FontSelect'
import LayoutApp from '@/components/Layout'
import Accounts from '@/components/Accounts'

export default {
  name: 'home',
  computed: mapState({ theme_app: state => state.theme_app }),
  components: {
    FormCurriculo,
    ActionsCurriculo,
    Render,
    FontSelect,
    LayoutApp,
    Accounts
  }
}
</script>

<style lang="stylus">
.home.content .mark
  display flex
  justify-content center
  align-items center
  flex-direction column
  +tablet()
    flex-direction row
.user-banner
  float left
  width 100%
  max-width 330px
  display flex
  justify-content center
  img
    width 100%
  +tablet()
    width 330px
    min-width 330px
    margin-right 2em
.center
  text-align center
  +tablet()
    display flex
    justify-content center
    align-items center
</style>
