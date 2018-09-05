<template lang="pug">
  section.render(v-if="user.name" :class="{ 'viewfixed' : viewfixed }" @click="viewMore")
    .view(:class="{ 'viewless' : viewless, 'viewblocked' : viewblocked }")
      h1
        label {{ user.name }}
      hr
      p(v-if="user.maritalstatus") {{ user.age }} {{ user.age ? 'anos ' : '' }}
        span(v-if="user.maritalstatus")  {{ user.maritalstatus }}
      p(v-if="user.end.logradouro") Endereço: {{ user.end.logradouro }}, {{ user.addressNumber }}{{ user.addressNumber ? ',' : '' }} {{ user.end.localidade }} - {{ user.end.uf }} - {{ user.cep }}
      p(v-if="user.travel") {{ user.travel ? $t('form.travel') : '' }}
      h2(v-if="user.about") {{ $t('form.about_me')}}
      p(v-if="user.about")
        pre {{ user.about }}
      h2(v-if="user.coursers[0]") {{ $t('form.cademy')}}
      .coursers(v-for="(course, key, index) in user.coursers")
        p(v-if="course.formation.school") {{ $t('form.school')}}: {{ course.formation.school }}
        p(v-if="course.formation.name") {{ course.formation.name }}
        p(v-if="course.formation.about")
          pre {{ $t('form.activities') }}: {{ course.formation.about }}
        p(v-if="course.formation.data_start") {{ course.formation.data_start | dateFormat }} {{ course.formation.data_end ? 'até' : '' }} {{ course.formation.data_end | dateFormat }}
        p(v-if="course.formation.now") {{ course.formation.now ? 'Cursando' : '' }}
        hr
      h2(v-if="user.exps[0]") {{ $t('form.exp')}}
      .experiencies(v-for="(exp, key, index) in user.exps")
        p(v-if="exp.experience.name") {{ $t('form.company')}}: {{ exp.experience.name }}
        p(v-if="exp.experience.work") {{ $t('form.office')}}: {{ exp.experience.work }}
        p(v-if="exp.experience.about")
          pre {{ exp.experience.about }}
        p(v-if="exp.experience.data_start && exp.experience.now") {{ $t('form.from')}} {{ exp.experience.data_start | dateFormat }}
        p(v-if="exp.experience.data_start && !exp.experience.now") {{ $t('form.from')}} {{ exp.experience.data_start | dateFormat }} {{ exp.experience.data_end ? $t('form.to') : '' }} {{ exp.experience.data_end | dateFormat}}
        p(v-if="exp.experience.now") {{ exp.experience.now ? 'Atual' : '' }}
        hr
      h2(v-if="user.telephone || user.email") {{ $t('form.contact')}}
      p(v-if="user.telephone") {{ $t('form.phone')}}: {{ user.telephone }}
      p(v-if="user.email") {{ $t('form.email')}}: {{ user.email }}
      hr
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'render',
  computed: mapState({ user: state => state.user }),
  created () { window.addEventListener('scroll', this.viewLess) },
  destroyed () { window.removeEventListener('scroll', this.viewLess) },
  data () {
    return {
      viewless: true,
      viewblocked: true,
      viewfixed: false
    }
  },
  methods: {
    viewMore () {
      this.viewless = !this.viewless
    },
    viewLess () {
      let el = (document.querySelector('#app').clientHeight - document.querySelector('#app').parentElement.offsetHeight)

      this.viewless = el > window.scrollY
      this.viewblocked = 300 > window.scrollY

      if (window.innerWidth >= 800) {
        this.viewfixed = 700 < window.scrollY
      }
    }
  },
  filters: {
    dateFormat (value) {
      if (!value) return ''
      value = value.split("-")
      switch (value[1]) {
        case "01":
          value[1] = "Janeiro"
          break
        case "02":
          value[1] = "Fevereiro"
          break
        case "03":
          value[1] = "Março"
          break
        case "04":
          value[1] = "Abril"
          break
        case "05":
          value[1] = "Maio"
          break
        case "06":
          value[1] = "Junho"
          break
        case "07":
          value[1] = "Julho"
          break
        case "08":
          value[1] = "Agosto"
          break
        case "09":
          value[1] = "Setembro"
          break
        case "10":
          value[1] = "Outubro"
          break
        case "11":
          value[1] = "Novembro"
          break
        case "12":
          value[1] = "Dezembro"
          break
      }
      value = value[1] + " dia " + value[2] + ", " + value[0]
      return value
    }
  }
}
</script>
