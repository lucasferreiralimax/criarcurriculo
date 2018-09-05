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
    article.hitech
      h2 {{ $t('view.about.hitech')}}
      a.credits_logo(href="https://github.com/lucasferreiralimax/curriculogratis" target="_blank" title="Github")
        img(src="./../assets/github.svg" alt="Logo Github" width="60")
      a.credits_logo(href="https://www.heroku.com" target="_blank" title="Heroku")
        img(src="./../assets/heroku.svg" alt="Logo Heroku" width="40")
      a.credits_logo(href="https://google.com" target="_blank" title="Google")
        img(src="./../assets/google.svg" alt="Logo Google" width="60")
      a.credits_logo(href="https://firebase.google.com" target="_blank" title="Firebase")
        img(src="./../assets/firebase.svg" alt="Logo Firebase" width="45")
      a.credits_logo(href="https://developer.mozilla.org/pt-BR/docs/Web/HTML/HTML5" target="_blank" title="HTML5")
        img(src="./../assets/html-5.svg" alt="Logo HTML5" width="45")
      a.credits_logo(href="https://developer.mozilla.org/pt-BR/docs/Web/CSS/CSS3" target="_blank" title="CSS3")
        img(src="./../assets/css-3.svg" alt="Logo CSS3" width="45")
      a.credits_logo(href="https://developer.mozilla.org/pt-BR/docs/Aprender/JavaScript" target="_blank" title="Javascript")
        img(src="./../assets/javascript.svg" alt="Logo Javascript" width="55")
      a.credits_logo(href="https://pugjs.org/api/getting-started.html" target="_blank" title="Pug.js")
        img(src="./../assets/pug.svg" alt="Logo Pug" width="55")
      a.credits_logo(href="http://stylus-lang.com" target="_blank" title="Stylus.js")
        img(src="./../assets/stylus.svg" alt="Logo Stylus" width="85")
      a.credits_logo(href="https://babeljs.io" target="_blank" title="Babel.js")
        img(src="./../assets/babel.svg" alt="Logo Babel" width="100")
      a.credits_logo(href="https://nodejs.org" target="_blank" title="Node.js")
        img(src="./../assets/nodejs.svg" alt="Logo node.js" width="85")
      a.credits_logo(href="https://git-scm.com" target="_blank" title="Git")
        img(src="./../assets/git-icon.svg" alt="Logo Git" width="50")
      a.credits_logo(href="https://vuejs.org" target="_blank" title="Vue.js")
        img(src="./../assets/vue.svg" alt="Logo Vue.js" width="55")
      a.credits_logo(href="https://www.cypress.io" target="_blank" title="Cypress")
        img(src="./../assets/cypress.svg" alt="Logo Cypress" width="50")
      a.credits_logo(href="https://codepen.io/lucaslimax" target="_blank" title="Feito com Coração")
        img(src="./../assets/love.svg" alt="Love" width="50")
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
