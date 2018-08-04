<template lang="pug">
  section.content.animate_intro
    .mark.text-center
      h2 {{ $t('text.text1') }}
      h2#start {{ $t('text.text2') }}
    form-curriculo
    render
    notice
</template>

<script>
import FormCurriculo from '@/components/curriculo/FormCurriculo'
import Render from '@/components/curriculo/Render'
import Notice from '@/components/Notice'

export default {
  name: 'home',
  components: {
    FormCurriculo,
    Render,
    Notice
  }
}
</script>
