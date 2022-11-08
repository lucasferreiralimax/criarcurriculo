<template lang="pug">
article.hitech
  h1 {{ $t('view.about.hitech')}}
  .flexbox
    a.credits_logo(v-once v-for="tech of techs" :href="tech.url" target="_blank" rel="noopener")
      component(:is="tech.icon")
      p {{ tech.name }}
</template>

<script>
import IconJavascript from '@/components/icons/icon-javascript'
import IconHTML5 from '@/components/icons/icon-html5'
import IconCSS3 from '@/components/icons/icon-css3'
import IconVue from '@/components/icons/icon-vue'
import IconElement from '@/components/icons/icon-element'
import IconFirebase from '@/components/icons/icon-firebase'
import IconStylus from '@/components/icons/icon-stylus'
import IconGithub from '@/components/icons/icon-github'
import IconGit from '@/components/icons/icon-git'
import IconGoogle from '@/components/icons/icon-google'
import IconBabel from '@/components/icons/icon-babel'
import IconCypress from '@/components/icons/icon-cypress'
import IconFirefox from '@/components/icons/icon-firefox'
import IconPug from '@/components/icons/icon-pug'
import IconNode from '@/components/icons/icon-node'
import IconHeart from '@/components/icons/icon-heart'

export default {
  name: 'app-hitech',
  components: {
    IconJavascript,
    IconHTML5,
    IconCSS3,
    IconVue,
    IconElement,
    IconFirebase,
    IconStylus,
    IconGithub,
    IconGit,
    IconGoogle,
    IconBabel,
    IconCypress,
    IconFirefox,
    IconPug,
    IconNode
  },
  data () {
    return {
      techs: [
        { name: 'JavaScript',               icon: IconJavascript, url: 'https://developer.mozilla.org/pt-BR/docs/Aprender/JavaScript' },
        { name: 'HTML5',                    icon: IconHTML5,      url: 'https://developer.mozilla.org/pt-BR/docs/Web/HTML/HTML5'      },
        { name: 'CSS3',                     icon: IconCSS3,       url: 'https://developer.mozilla.org/pt-BR/docs/Web/CSS/CSS3'        },
        { name: 'Vue',                      icon: IconVue,        url: 'https://vuejs.org'                                            },
        { name: 'Element',                  icon: IconElement,    url: 'https://element.eleme.io'                                     },
        { name: 'Firebase',                 icon: IconFirebase,   url: 'https://firebase.google.com'                                  },
        { name: 'Pug.js',                   icon: IconPug,        url: 'https://pugjs.org'                                            },
        { name: 'Stylus',                   icon: IconStylus,     url: 'http://stylus-lang.com'                                       },
        { name: 'Github',                   icon: IconGithub,     url: 'https://github.com/lucasferreiralimax/criarcurriculo'         },
        { name: 'Git',                      icon: IconGit,        url: 'https://git-scm.com'                                          },
        { name: 'Google',                   icon: IconGoogle,     url: 'https://google.com'                                           },
        { name: 'Babel.js',                 icon: IconBabel,      url: 'https://babeljs.io'                                           },
        { name: 'Node.js',                  icon: IconNode,       url: 'https://nodejs.org'                                           },
        { name: 'Cypress',                  icon: IconCypress,    url: 'https://www.cypress.io'                                       },
        { name: 'Firefox',                  icon: IconFirefox,    url: 'https://www.mozilla.org'                                      },
        { name: this.$t('view.about.work'), icon: IconHeart,      url: 'https://github.com/lucasferreiralimax/criarcurriculo'         }
      ]
    }
  }
}
</script>
<style lang="stylus">
.hitech
  margin 2rem auto 0
  .flexbox
    align-items center
    display flex
    flex-wrap wrap
    justify-content center
    +tablet()
      justify-content flex-start

.credits_logo
  align-items center
  background #fff
  border-radius 20px
  color #000
  display inline-flex
  flex-direction column
  text-align center
  flex-wrap wrap
  height 120px
  justify-content center
  padding 5px
  text-shadow 0 2px 2px rgba(#000, .5)
  transform scale(.9)
  transition .5s all
  width 120px
  svg, img
    height 40px
  p, svg, img
    position relative
    transition .3s all
    will-change all
  p
    font-size 12px
    line-height 15px
    margin-top 1rem
  &:hover
    box-shadow 0 0 0 5px rgba(#fff, .5), 0 0 0 10px rgba(#fff, .5)
    svg, img
      filter grayscale(0)
      transform scale(1.2)
      z-index 9
    p
      transform translateY(10px)
</style>
