<template lang="pug">
  section.render(v-if="user.name" :class="{ 'active' : render, 'fixed' : fixed, 'fixedH': fixedHide, 'fixedFooter': fixedFooter }" @click="minimizeRender")
    h1
      label {{ user.name }}
    hr
    p(v-if="user.maritalstatus") {{ user.age }} {{ user.age ? 'anos ' : '' }}
      span(v-if="user.maritalstatus")  {{ user.maritalstatus }}
    p(v-if="user.end.logradouro") Endereço: {{ user.end.logradouro }}, {{ user.addressNumber }}{{ user.addressNumber ? ',' : '' }} {{ user.end.localidade }} - {{ user.end.uf }} - {{ user.cep }}
    p(v-if="user.travel") {{ user.travel ? 'Disponível para viagens' : '' }}
    h2(v-if="user.about") Sobre mim
    p(v-if="user.about") {{ user.about }}
    h2(v-if="user.coursers[0]") Formação Acadêmica
    .coursers(v-for="(course, key, index) in user.coursers")
      p(v-if="course.formation.school") Instituição: {{ course.formation.school }}
      p(v-if="course.formation.name") Formação: {{ course.formation.name }}
      p(v-if="course.formation.about") Atividades: {{ course.formation.about }}
      p(v-if="course.formation.about") De {{ course.formation.data_start }} até {{ course.formation.data_start }}
      p(v-if="course.formation.now") {{ course.formation.now ? 'Cursando' : '' }}
    h2(v-if="user.exps[0]") Experiência
    .experiencies(v-for="(exp, key, index) in user.exps")
      p(v-if="exp.experience.name") Empresa: {{ exp.experience.name }}
      p(v-if="exp.experience.work") Cargo: {{ exp.experience.work }}
      p(v-if="exp.experience.about") {{ exp.experience.about }}
      p(v-if="exp.experience.about") De {{ exp.experience.data_start }} até {{ exp.experience.data_start }}
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
      this.oldScroll = window.scrollY
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
