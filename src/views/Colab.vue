<template lang="pug">
  section.mark.text-center
    colab
    p {{ $t('view.about.text3') }}
      a(href='https://github.com/lucaslimax/criarcurriculo' target='_blank' rel="noopener")  {{ $t('view.about.text4') }}
    p {{ $t('view.about.contact') }}
    h3 {{ $t('view.about.thanks') }}
</template>

<script>
import Colab from '@/components/Colab'

export default {
  name: 'about',
  head: {
    title: {
      inner: 'Colaboradores'
    }
  },
  components: { Colab }
}
</script>
