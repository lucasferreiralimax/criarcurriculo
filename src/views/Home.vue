<template lang="pug">
  section.content.animate_intro
    .mark.text-center
      h2 {{ $t('view.home.text1') }}
      h2#start {{ $t('view.home.text2') }}
    form-curriculo
    render
    font-select
</template>

<script>
import FormCurriculo from '@/components/curriculo/FormCurriculo'
import Render from '@/components/curriculo/Render'
import FontSelect from '@/components/FontSelect'

export default {
  name: 'home',
  components: {
    FormCurriculo,
    Render,
    FontSelect
  }
}
</script>
