<template lang="pug">
  section.mark.text-center.animate_intro
    h1 {{ $t('nav.about') }}
    p {{ $t('view.about.text1') }}
    p {{ $t('view.about.text2') }}
    p {{ $t('view.about.text3') }}
      a(href='https://github.com/lucaslimax/curriculogratis' target='_blank' rel="noopener")  {{ $t('view.about.text4') }}
      | {{ $t('view.about.contact') }}
    br
    h2 {{ $t('view.about.thanks') }}
</template>

<script>
  export default {
    name: 'about',
    head: {
      title: {
        inner: 'Sobre'
      }
    }
  }
</script>
