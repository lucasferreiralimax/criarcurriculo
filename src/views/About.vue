<template lang="pug">
  section.mark.text-center.animate_intro
    h1 {{ $t('nav.about') }}
    p {{ $t('view.about.text1') }}
    p {{ $t('view.about.text2') }}
    p {{ $t('view.about.credits') }}
    p {{ $t('view.about.text3') }}
      a(href='https://github.com/lucaslimax/curriculogratis' target='_blank' rel="noopener")  {{ $t('view.about.text4') }}
      | {{ $t('view.about.contact') }}
    br
    h2 {{ $t('view.about.thanks') }}
    a.credits_logo(href="https://github.com/lucasferreiralimax/curriculogratis" target="_blank")
      img(src="./../assets/github.svg" alt="Logo Github" width="60")
    a.credits_logo(href="https://www.heroku.com" target="_blank")
      img(src="./../assets/heroku.svg" alt="Logo Heroku" width="40")
    a.credits_logo(href="https://google.com" target="_blank")
      img(src="./../assets/google.svg" alt="Logo Google" width="60")
    a.credits_logo(href="https://google.com" target="_blank")
      img(src="./../assets/firebase.svg" alt="Logo Firebase" width="45")
    article.colab
      h1 {{ $t('view.about.colab')}}
      .flexbox
        a.people(href="https://github.com/lucasferreiralimax" target="_blank")
          figure
            img(src="https://avatars2.githubusercontent.com/u/40927839")
            figcaption @lucasferreiralimax
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
