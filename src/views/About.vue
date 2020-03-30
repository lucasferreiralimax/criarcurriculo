<template lang="pug">
  section.mark.text-center
    h1 {{ $t('nav.about') }}
    p {{ $t('view.about.text1') }}
    p {{ $t('view.about.text2') }}
    p {{ $t('view.about.credits') }}
    hitech
    p {{ $t('view.about.text3') }}
      a(href='https://github.com/lucaslimax/curriculogratis' target='_blank' rel="noopener")  {{ $t('view.about.text4') }}
    p {{ $t('view.about.contact') }}
    h3 {{ $t('view.about.thanks') }}
</template>

<script>
import Hitech from '@/components/Hitech'

export default {
  name: 'about',
  head: {
    title: {
      inner: 'Sobre'
    }
  },
  components: { Hitech }
}
</script>
