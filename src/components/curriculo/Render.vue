<template lang="pug">
  section.render(v-if="user.name" :class="{ 'active' : render, 'fixed' : fixed, 'fixedH': fixedHide, 'fixedFooter': fixedFooter }" @click="minimizeRender")
    h1
      label {{ user.name }}
    hr
    p(v-if="user.age") Idade: {{ user.age }} anos |
      span(v-if="user.maritalstatus") Estado Civil: {{ user.genero == 'h' ? 'Solteiro' : 'Solteira' }}
    p(v-if="user.end.logradouro") Endereço: {{ user.end.logradouro }}, {{ user.end.localidade }} - {{ user.cep }}.
    h2(v-if="user.about") Sobre mim
    p(v-if="user.about") {{ user.about }}
    h2(v-if="user.coursers[0]") Formação Acadêmica
    .coursers(v-for="(course, key, index) in user.coursers")
      p Instituição: {{ course.formation.school }} | Formação: {{ course.formation.name }}
      p {{ course.formation.about }}
      p(v-if="course.formation.now") {{ course.formation.now ? 'Cursando' : '' }}
    h2(v-if="user.exps[0]") Experiência
    .experiencies(v-for="(exp, key, index) in user.exps")
      p Empresa: {{ exp.experience.name }} | Cargo: {{ exp.experience.work }}
      p {{ exp.experience.about }}
      p(v-if="exp.experience.now") {{ exp.experience.now ? 'Atual' : '' }}
    h2(v-if="user.telephone || user.email") Contato
    p(v-if="user.telephone") Telefone: {{ user.telephone }}
    p(v-if="user.email") E-mail: {{ user.email }}
    hr
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'render',
  computed: mapState({
    user: state => state.user
  }),
  data () {
    return {
      render: false,
      fixed: false,
      fixedHide: true,
      fixedFooter: false
    }
  },
  methods: {
    minimizeRender () {
      this.render = !this.render
    },
    fixedRender () {
      let el = (document.querySelector('#app').clientHeight - document.querySelector('#app').parentElement.offsetHeight) - 180
      this.fixed = window.scrollY > 630
      this.fixedHide = window.scrollY < 200
      this.fixedFooter = window.scrollY > el
      this.render = !(this.oldScroll > window.scrollY)

      if (window.innerWidth >= 800) {
        this.fixedFooter = !(this.oldScroll > window.scrollY) && window.scrollY > 630
      }
      // console.log(el)
      // console.log(window.innerWidth, "window.outerWidth")
      // console.log(this.fixedFooter, "this.fixedFooter")
      // console.log(window.scrollY > el, "window.scrollY > el")
      // console.log(!(this.oldScroll > window.scrollY) && window.scrollY > 630, "!(this.oldScroll > window.scrollY) && window.scrollY > 630")
      // console.log(this.oldScroll > window.scrollY)
      this.oldScroll = window.scrollY

      // if(window.scrollY > el) {
      //   this.fixedFooter = true
      //   // window.scrollTo(0, el + 180)
      // } else {
      //   this.fixedFooter = false
      // }

      // console.log(document.querySelector('html').getBoundingClientRect())
      // console.log(el)
      // console.log(window.scrollY)
    }
  },
  created () {
    window.addEventListener('scroll', this.fixedRender)
  },
  destroyed () {
    window.removeEventListener('scroll', this.fixedRender)
  }
}
</script>
