<template lang="pug">
  section.render(v-if="user.name" :class="{ 'viewfixed' : viewfixed }" @click="viewMore")
    .view(:class="{ 'viewless' : viewless, 'viewblocked' : viewblocked }")
      label.figure(for="GET-photo" v-if="user.photo")
        figure
          img#photo(:src="user.photo" :alt="user.name" width="auto")
        button.btn.small(type="button" @click="rotateFigure")
          svg(xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 481.95 481.95")
            path(d="M331.5 114.75L216.75 0v79.05C117.3 91.8 38.25 175.95 38.25 280.5s79.05 188.7 178.5 201.45v-51C145.35 418.2 89.25 357 89.25 280.5s56.1-137.7 127.5-150.45v99.45L331.5 114.75zM443.7 255c-5.101-35.7-17.851-68.85-40.8-99.45l-35.7 35.7c12.75 20.4 22.95 40.8 25.5 63.75h51zM267.75 430.95v51c35.7-5.101 68.85-17.851 99.45-40.8l-35.7-35.7c-20.4 12.75-40.8 22.95-63.75 25.5zm99.45-61.2l35.7 35.7c22.949-30.601 38.25-63.75 40.8-99.45h-51c-2.55 22.95-12.75 43.35-25.5 63.75z")
      .info
        label(for="GET-name")
          h1 {{ user.name }}
        p(v-if="user.maritalstatus") {{ user.age }} {{ user.age ? 'anos ' : '' }}
          span(v-if="user.maritalstatus")  {{ user.maritalstatus }}
        p(v-if="user.end.logradouro") {{ user.end.logradouro }}, {{ user.addressNumber }}{{ user.addressNumber ? ',' : '' }} {{ user.end.localidade }} - {{ user.end.uf }} - {{ user.cep }}
      hr
      p(v-if="user.travel") {{ user.travel ? $t('form.travel') : '' }}
      label(for="GET-about")
        h2(v-if="user.about") {{ $t('form.about_me') }}
        p(v-if="user.about")
          pre {{ user.about }}
      h2(v-if="user.coursers[0]") {{ $t('form.cademy')}}
      .coursers(v-for="(course, key, index) in user.coursers")
        p(v-if="course.formation.now") {{ course.formation.now ? $t('form.cademy_now') : '' }}
        label(for="GET-about")
          p(v-if="course.formation.school") {{ $t('form.school') }}: {{ course.formation.school }}
        label(for="GET-about")
          p(v-if="course.formation.name") {{ course.formation.name }}
        label(for="GET-about")
          p(v-if="course.formation.about")
            pre {{ $t('form.activities') }}: {{ course.formation.about }}
        label(for="GET-about")
          p(v-if="course.formation.data_start") {{ course.formation.data_start | dateFormat }} {{ course.formation.data_end ? $t('form.to') : '' }} {{ course.formation.data_end | dateFormat }}
        hr
      h2(v-if="user.exps[0]") {{ $t('form.exp')}}
      .experiencies(v-for="(exp, key, index) in user.exps")
        p(v-if="exp.experience.now") {{ exp.experience.now ? $t('form.exp_now') : '' }}
        p(v-if="exp.experience.name") {{ $t('form.company') }}: {{ exp.experience.name }}
        p(v-if="exp.experience.work") {{ $t('form.office') }}: {{ exp.experience.work }}
        p(v-if="exp.experience.about")
          pre {{ exp.experience.about }}
        p(v-if="exp.experience.data_start && exp.experience.now") {{ $t('form.from') }} {{ exp.experience.data_start | dateFormat }}
        p(v-if="exp.experience.data_start && !exp.experience.now") {{ $t('form.from') }} {{ exp.experience.data_start | dateFormat }} {{ exp.experience.data_end ? $t('form.to') : '' }} {{ exp.experience.data_end | dateFormat}}
        hr
      h2(v-if="user.telephones || user.emails || user.sites") {{ $t('form.contact') }}
      p(v-if="user.telephones" v-for="(telephone, key, index) in user.telephones") {{ $t('form.phone') }}: {{ telephone }}
      p(v-if="user.emails" v-for="(email, key, index) in user.emails") {{ $t('form.email') }}: {{ email }}
      p(v-if="user.sites" v-for="(site, key, index) in user.sites") {{ $t('form.site') }}: {{ site }}
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
    rotateFigure () {
      let photo = document.querySelector('#photo'),
          transform = photo.style.transform

      switch (transform) {
        case 'rotate(90deg)':
          photo.style.transform = "rotate(180deg)"
          break;
        case 'rotate(180deg)':
          photo.style.transform = "rotate(270deg)"
          break;
        case 'rotate(270deg)':
          photo.style.transform = ""
          break;
        default:
          photo.style.transform = "rotate(90deg)"
          break;
      }
    },
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
