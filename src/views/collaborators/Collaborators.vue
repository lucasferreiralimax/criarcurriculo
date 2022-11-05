<template lang="pug">
section.mark.text-center
  app-colab
  p {{ $t('view.about.text3') }}
    a(href='https://github.com/lucasferreiralimax/criarcurriculo' target='_blank' rel="noopener")  {{ $t('view.about.text4') }}
  p {{ $t('view.about.contact') }}
  h3 {{ $t('view.about.thanks') }}
</template>

<script>
import AppColab from '@/components/lab/app-colab'

export default {
  name: 'collaborators',
  head: {
    title: function () {
      return {
        inner: this.$t('view.about.colab')
      }
    }
  },
  components: { AppColab }
}
</script>
