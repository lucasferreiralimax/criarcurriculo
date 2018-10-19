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
      a.credits_logo(href="https://github.com/lucasferreiralimax/curriculogratis" target="_blank")
        img(src="./../assets/github.svg" alt="Logo Github" width="60")
        p Github
      a.credits_logo(href="https://www.heroku.com" target="_blank")
        img(src="./../assets/heroku.svg" alt="Logo Heroku" width="40")
        p Heroku
      a.credits_logo(href="https://google.com" target="_blank")
        img(src="./../assets/google.svg" alt="Logo Google" width="60")
        p Google
      a.credits_logo(href="https://firebase.google.com" target="_blank")
        img(src="./../assets/firebase.svg" alt="Logo Firebase" width="45")
        p Firebase
      a.credits_logo(href="https://developer.mozilla.org/pt-BR/docs/Web/HTML/HTML5" target="_blank")
        img(src="./../assets/html-5.svg" alt="Logo HTML5" width="45")
        p HTML5
      a.credits_logo(href="https://developer.mozilla.org/pt-BR/docs/Web/CSS/CSS3" target="_blank")
        img(src="./../assets/css-3.svg" alt="Logo CSS3" width="45")
        p CSS3
      a.credits_logo(href="https://developer.mozilla.org/pt-BR/docs/Aprender/JavaScript" target="_blank")
        img(src="./../assets/javascript.svg" alt="Logo Javascript" width="55")
        p Javascript
      a.credits_logo(href="https://pugjs.org/api/getting-started.html" target="_blank")
        img(src="./../assets/pug.svg" alt="Logo Pug" width="55")
        p Pug.js
      a.credits_logo(href="http://stylus-lang.com" target="_blank")
        img(src="./../assets/stylus.svg" alt="Logo Stylus" width="85")
        p Stylus.js
      a.credits_logo(href="https://babeljs.io" target="_blank")
        img(src="./../assets/babel.svg" alt="Logo Babel" width="100")
        p Babel.js
      a.credits_logo(href="https://nodejs.org" target="_blank")
        img(src="./../assets/nodejs.svg" alt="Logo node.js" width="85")
        p Node.js
      a.credits_logo(href="https://git-scm.com" target="_blank")
        img(src="./../assets/git-icon.svg" alt="Logo Git" width="50")
        p Git
      a.credits_logo(href="https://vuejs.org" target="_blank")
        img(src="./../assets/vue.svg" alt="Logo Vue.js" width="55")
        p Vue.js
      a.credits_logo(href="https://www.cypress.io" target="_blank")
        img(src="./../assets/cypress.svg" alt="Logo Cypress" width="50")
        p Cypress
      a.credits_logo(href="https://codepen.io/lucaslimax" target="_blank")
        img(src="./../assets/love.svg" alt="Love" width="50")
        p {{ $t('view.about.work') }}
    article.colab
      h1 {{ $t('view.about.colab')}}
      .flexbox
        a.people(:href="user.html_url" target="_blank" v-for="(user, key, index)  in contributors")
          figure
            img(:src="user.avatar_url")
            figcaption @{{ user.login }}
</template>

<script>
import axios from 'axios'

const HTTP = axios.create({ baseURL: 'https://api.github.com/repos/lucasferreiralimax/curriculogratis/contributors' })

export default {
  name: 'about',
  head: {
    title: {
      inner: 'Sobre'
    }
  },
  data() {
    return {
      contributors: null
    }
  },
  created () {
    this.search_contributors()
  },
  methods: {
    search_contributors () {
      HTTP.get()
      .then(response => {
        this.contributors = response.data
        console.log(response.data)
      })
      .catch(e => {
        this.errors.push(e)
      })
    }
  }
}
</script>
