<template lang="pug">
  section.animate_intro
    img(src="../assets/logo.png")
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
