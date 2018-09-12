<template lang="pug">
  .box.experiences
    button.btn.plus(type="button" v-if="user.exps == 0" @click='newComponent()')
      span +
      | {{ $t('form.exp')}}
    transition-group(name="fade" tag="div")
      fieldset.experience(v-for="(exp, key, index) in user.exps" :id="'exp-' + exp.id" :key="key")
        legend(@click='toggleBox($event)')
          | {{ $t('form.exp')}} {{ exp.experience.work }}
          button.btn.delete.right.bullet(type="button" @click="removeComponent(key)")
            i -
          button.btn.plus.right.bullet(type="button" @click="newComponent(key)" v-scroll-to="'#exp-' + exp.id_sibiling")
            i +
        .flexbox
          // Experiência atual?
          // The exps Now?
          label.exps_now(v:for="'GET-expsnow' + exp.id" v-bind:class="{ active: exp.experience.now, 'display-n-print': !exp.experience.now }" @keyup.enter='exp.experience.now = !exp.experience.now')
            input(:id="'GET-expsnow' + exp.id" type="checkbox" v:name="'now' + exp.id" v-model="exp.experience.now")
            | {{ $t('form.exp_now')}}

          // Compania
          // The Company
          label(for="GET-company" v-bind:class="{ error: !exp.experience.name && errors.length }")
            p {{ $t('form.company')}}:
            input#GET-company(name="company" type="text" :placeholder="$t('form.company_place')" placeholder="" v-model="exp.experience.name")
            p.error-msg(v-show="!exp.experience.name && errors.length") {{ $t('form.errors.company') }}

          // Experiência
          // The experience
          label(for="GET-exps" v-bind:class="{ error: !exp.experience.work && errors.length }")
            p {{ $t('form.office')}}:
            input#GET-exps(name="exps" type="text" :placeholder="$t('form.office_place')" v-model="exp.experience.work")
            p.error-msg(v-show="!exp.experience.work && errors.length") {{ $t('form.errors.exp') }}

          // Data da experiência
          // The experience data
          label(for="GET-expsdata" v-bind:class="{ error: !exp.experience.data_start && errors.length }")
            p {{ $t('form.start')}}:
            input#GET-expsdata-start(name="expsdata-start" type="date" placeholder="00/00/0000" v-model="exp.experience.data_start")
            p.error-msg(v-show="!exp.experience.data_start && errors.length") {{ $t('form.errors.data_start') }}
          label(for="GET-expsdata" v-bind:class="{ error: !exp.experience.data_end && errors.length && !exp.experience.now }")
            p(v-show="!exp.experience.now") {{ $t('form.finish')}}:
            input#GET-expsdata-finish(name="expsdata-finish" type="date" placeholder="00/00/0000" v-model="exp.experience.data_end" v-show="!exp.experience.now")
            p.error-msg(v-show="!exp.experience.data_end && errors.length && !exp.experience.now") {{ $t('form.errors.data_end') }}
          // Sobre a experiência
          // The exps About
          label(for="GET-expsabout" v-bind:class="{ error: !exp.experience.about && errors.length }")
            p {{ $t('form.about')}}:
            textarea#GET-expsabout(ref="GET_expsabout" :placeholder="$t('form.activities_place')" placeholder="" @input="updatetextAreaHeight(key)" v-model="exp.experience.about")
            p.error-msg(v-show="!exp.experience.about && errors.length") {{ $t('form.errors.about') }}
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'experiencies-data',
  props: ['errors'],
  computed: mapState({ user: state => state.user }),
  data () {
    return {
      exps_now: false
    }
  },
  methods: {
    toggleBox (e) { e.target.parentElement.classList.toggle('active') },
    updatetextAreaHeight (key) { this.$refs.GET_expsabout[key].style.height = this.$refs.GET_expsabout[key].scrollHeight + 'px' },
    updateVuex (name, e) {
      this.$store.commit(name, e.target.value)
      window.localStorage.setItem('store', JSON.stringify(this.user))
    },
    removeComponent (key) { this.$delete(this.user.exps, key) },
    newComponent (key = -1) {
      this.user.exps.push({
        id: ++key,
        id_sibiling: ++key,
        name: this.$i18n.t('form.course'),
        experience: {
          name: '',
          work: '',
          data_start: '',
          data_end: '',
          about: '',
          now: false
        }
      })
    }
  }
}
</script>
