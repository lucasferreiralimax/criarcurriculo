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
      a.credits_logo(href="https://www.cypress.io" target="_blank")
        img(src="./../assets/firefox.svg" alt="Logo Firefox" width="50")
        p Firefox
      a.credits_logo(href="https://codepen.io/lucaslimax" target="_blank")
        img(src="./../assets/love.svg" alt="Love" width="50")
        p {{ $t('view.about.work') }}
    article.colab
      h1 {{ $t('view.about.colab')}}
      .flexbox
        a.people(:href="user.html_url" target="_blank" v-for="(user, key, index)  in contributors")
          figure
            img(:src="user.avatar_url")
            p.contributor__score
              svg.icon(viewBox="-40 0 512 512" width="30px" xmlns="http://www.w3.org/2000/svg")
                path(d="M402.258 231.082l-66.23-94.73a10 10 0 0 0-8.196-4.27H106.348a10 10 0 0 0-8.196 4.27l-66.23 94.73c-.027.04-3.852 6.168-.106 11.3l176.887 265.063c.027.04 3.617 4.551 8.086 4.551l.32.004c4.754 0 8.344-4.516 8.368-4.555l90.105-135.015c3.063-4.594 1.824-10.805-2.77-13.871-4.593-3.063-10.8-1.829-13.867 2.77l-52.629 78.858 39.86-131.214 18.883-62.164h70.308l-32.566 48.804c-3.067 4.594-1.828 10.801 2.765 13.867 4.594 3.067 10.805 1.829 13.868-2.765l42.93-64.332c.07-.102 3.581-5.977-.106-11.301zM217.09 467.594l-67.067-220.785h134.133zm-58.91-240.781l58.91-69.293L276 226.812zm-46.621-74.731h83.902l-63.531 74.73H59.312zm17.562 94.727l58.742 193.379-129.05-193.38zm173.129-19.996l-63.531-74.731h83.902l52.246 74.73zm0 0")
                path(d="M330.66 343.156a9.968 9.968 0 0 1-7.07-2.93l-.535-.535c-3.907-3.906-3.907-10.238 0-14.144 3.902-3.902 10.234-3.902 14.14 0l.54.539c3.902 3.906 3.902 10.238 0 14.14a9.976 9.976 0 0 1-7.075 2.93zm0 0M217.09 113.074c-5.442 0-10.211-3.734-11.594-9.078a50.02 50.02 0 0 0-35.867-35.863c-5.344-1.387-9.074-6.153-9.074-11.598 0-5.441 3.73-10.207 9.074-11.594a50.02 50.02 0 0 0 35.867-35.863C206.88 3.73 211.648 0 217.09 0s10.21 3.73 11.594 9.074c4.554 17.574 18.296 31.317 35.863 35.867h.004c5.344 1.383 9.074 6.153 9.074 11.594s-3.73 10.211-9.074 11.598a50.021 50.021 0 0 0-35.863 35.863c-1.387 5.344-6.157 9.078-11.598 9.078zm-23.942-56.539a70.106 70.106 0 0 1 23.942 23.942 70.106 70.106 0 0 1 23.941-23.942 70.061 70.061 0 0 1-23.941-23.937 70.061 70.061 0 0 1-23.942 23.937zm0 0M379.695 157.09c-5.351 0-10.035-3.664-11.394-8.91a43.789 43.789 0 0 0-31.387-31.39c-5.25-1.356-8.914-6.044-8.914-11.395 0-5.352 3.664-10.036 8.91-11.395a43.787 43.787 0 0 0 31.39-31.39c1.36-5.247 6.044-8.91 11.395-8.91 5.352 0 10.04 3.663 11.399 8.91A43.776 43.776 0 0 0 422.48 94c5.247 1.36 8.915 6.043 8.915 11.395 0 5.347-3.665 10.035-8.91 11.394a43.774 43.774 0 0 0-31.391 31.39c-1.364 5.247-6.047 8.91-11.399 8.91zm-19.476-51.695a63.893 63.893 0 0 1 19.476 19.476 63.893 63.893 0 0 1 19.477-19.476 63.893 63.893 0 0 1-19.477-19.477 63.893 63.893 0 0 1-19.476 19.477zm57.234 7.96c.004.004.008.004.012.004-.004 0-.008 0-.012-.004zm0 0M51.695 157.09c-5.347 0-10.035-3.664-11.394-8.91a43.789 43.789 0 0 0-31.387-31.39C3.664 115.433 0 110.745 0 105.394 0 100.043 3.664 95.359 8.91 94A43.787 43.787 0 0 0 40.3 62.61c1.36-5.247 6.048-8.91 11.395-8.91 5.352 0 10.04 3.663 11.399 8.91A43.782 43.782 0 0 0 94.48 94c5.25 1.36 8.915 6.043 8.915 11.395 0 5.347-3.665 10.035-8.91 11.394a43.774 43.774 0 0 0-31.391 31.39c-1.36 5.247-6.047 8.91-11.399 8.91zM32.22 105.395a63.85 63.85 0 0 1 19.476 19.476 63.863 63.863 0 0 1 19.48-19.476 63.906 63.906 0 0 1-19.48-19.477 63.85 63.85 0 0 1-19.476 19.477zm57.234 7.96c.004.004.008.004.016.004-.008 0-.012 0-.016-.004zm0 0")
              | {{ user.contributions }} {{ user.contributions > 1 ? $t('view.about.contributions') : $t('view.about.contribution') }}
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
      })
      .catch(e => {
        this.errors.push(e)
      })
    }
  }
}
</script>
