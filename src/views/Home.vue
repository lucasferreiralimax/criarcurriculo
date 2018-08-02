<template lang="pug">
  section.animate_intro
    .mark.text-center
      h2 {{ $t('text.text1') }}
      h2#start {{ $t('text.text2') }}
    form-curriculo
    notice
</template>

<script>
import FormCurriculo from '@/components/curriculo/FormCurriculo.vue'
import Notice from '@/components/Notice.vue'

export default {
  name: 'home',
  components: {
    FormCurriculo,
    Notice
  }
}
</script>
