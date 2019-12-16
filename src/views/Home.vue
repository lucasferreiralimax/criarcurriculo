<template lang="pug">
  section.home.content
    .mark.text-center
      h2 {{ $t('view.home.text1') }}
      h2#start {{ $t('view.home.text2') }}
    .container
      form-curriculo
      render
      actions-curriculo
        font-select
        accounts
</template>

<script>
import FormCurriculo from '@/components/curriculo/FormCurriculo'
import ActionsCurriculo from '@/components/curriculo/ActionsCurriculo'
import Render from '@/components/curriculo/Render'
import FontSelect from '@/components/FontSelect'
import Accounts from '@/components/Accounts'

export default {
  name: 'home',
  components: {
    FormCurriculo,
    ActionsCurriculo,
    Render,
    FontSelect,
    Accounts
  }
}
</script>
