<template lang="pug">
  section.home.content
    .mark.center
      figure.user-banner
        img(src="../assets/banner.png" alt="User banner")
      div
        h2 {{ $t('view.home.text1') }}
        h2#start {{ $t('view.home.text2') }}
    .container
      form-curriculo
        font-select
        layout-app
      render
      actions-curriculo
        accounts
</template>

<script>
import FormCurriculo from '@/components/curriculo/FormCurriculo'
import ActionsCurriculo from '@/components/curriculo/ActionsCurriculo'
import Render from '@/components/curriculo/Render'
import FontSelect from '@/components/FontSelect'
import LayoutApp from '@/components/Layout'
import Accounts from '@/components/Accounts'

export default {
  name: 'home',
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
.user-banner
  float left
  width 100%
  display flex
  justify-content center
  +tablet()
    width auto
    margin-right 2em
.center
  text-align center
  +tablet()
    display flex
    justify-content center
    align-items center
</style>
