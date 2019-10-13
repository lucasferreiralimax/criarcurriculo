<template lang="pug">
  section.mark.text-center
    h1 {{ $t('nav.about') }}
    p {{ $t('view.about.text1') }}
    p {{ $t('view.about.text2') }}
    p {{ $t('view.about.credits') }}
    p {{ $t('view.about.text3') }}
      a(href='https://github.com/lucaslimax/curriculogratis' target='_blank' rel="noopener")  {{ $t('view.about.text4') }}
      | {{ $t('view.about.contact') }}
    h3 {{ $t('view.about.thanks') }}
    hitech
    colab
</template>

<script>
import Hitech from '@/components/Hitech'
import Colab from '@/components/Colab'

export default {
  name: 'about',
  head: {
    title: {
      inner: 'Sobre'
    }
  },
  components: { Hitech, Colab }
}
</script>
