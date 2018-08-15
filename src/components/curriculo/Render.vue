<template lang="pug">
  section.render(v-if="user.name" :class="{ 'active' : render, 'fixed' : fixed, 'fixedH': fixedHide, 'fixedFooter': fixedFooter }" @click="minimizeRender")
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
      p(v-if="course.formation.school") {{ $t('form.school')}} {{ course.formation.school }}
      p(v-if="course.formation.name") {{ course.formation.name }}
      p(v-if="course.formation.about") {{ $t('form.activities') }} {{ course.formation.about }}
      p(v-if="course.formation.data_start") De {{ course.formation.data_start }} {{ course.formation.data_end ? 'até' : '' }} {{ course.formation.data_end }}
      p(v-if="course.formation.now") {{ course.formation.now ? 'Cursando' : '' }}
      hr
    h2(v-if="user.exps[0]") {{ $t('form.exp')}}
    .experiencies(v-for="(exp, key, index) in user.exps")
      p(v-if="exp.experience.name") {{ $t('form.company')}} {{ exp.experience.name }}
      p(v-if="exp.experience.work") {{ $t('form.office')}}: {{ exp.experience.work }}
      p(v-if="exp.experience.about") {{ exp.experience.about }}
      p(v-if="exp.experience.data_start && exp.experience.now") {{ $t('form.from')}} {{ exp.experience.data_start }}
      p(v-if="exp.experience.data_start && !exp.experience.now") {{ $t('form.from')}} {{ exp.experience.data_start }} {{ exp.experience.data_end ? $t('form.to') : '' }} {{ exp.experience.data_end }}
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
