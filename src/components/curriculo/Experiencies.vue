<template lang="pug">
  .box.experiences
    button.btn.plus.large(type="button" v-if="user.exps.length == 0" @click='newComponent()')
      span +
      | {{ $t('form.exp')}}
    fieldset.experience(v-for="(exp, key, index) in user.exps" :id="'exp-' + exp.id" :key="key")
      legend
        | {{ $t('form.exp')}} {{ exp.experience.work }}
        .right.ml-1
          button.btn.delete.bullet.small.left(type="button" @click="removeComponent(key)")
            i -
          button.btn.plus.bullet.small.left(type="button" @click="newComponent(key)" v-scroll-to="'#exp-' + exp.id_sibiling")
            i +
      // Experiência atual?
      // The exps Now?
      label.exps_now(v:for="'GET-expsnow' + exp.id" v-bind:class="{ active: exp.experience.now, 'display-n-print': !exp.experience.now }" @keyup.enter='exp.experience.now = !exp.experience.now')
        input(:id="'GET-expsnow' + exp.id" type="checkbox" v:name="'now' + exp.id" v-model="exp.experience.now")
        | {{ $t('form.exp_now')}}

      // Compania
      // The Company
      label(:for="'GET-company' + exp.id" v-bind:class="{ error: !exp.experience.name && errors.length }")
        p {{ $t('form.company')}}:
        input(:id="'GET-company' + exp.id" name="company" type="text" :placeholder="$t('form.company_place')" placeholder="" v-model="exp.experience.name")
        p.error-msg(v-show="!exp.experience.name && errors.length") {{ $t('form.errors.company') }}

      // Experiência
      // The experience
      label(:for="'GET-exps' + exp.id" v-bind:class="{ error: !exp.experience.work && errors.length }")
        p {{ $t('form.office')}}:
        input(:id="'GET-exps' + exp.id" name="exps" type="text" :placeholder="$t('form.office_place')" v-model="exp.experience.work")
        p.error-msg(v-show="!exp.experience.work && errors.length") {{ $t('form.errors.exp') }}

      // Data da experiência
      // The experience data
      label(:for="'GET-expsdata__start' + exp.id")
        p {{ $t('form.start')}}:
        input(:id="'GET-expsdata__start' + exp.id" name="expsdata-start" type="date" placeholder="00/00/0000" v-model="exp.experience.data_start")
      label(:for="'GET-expsdata__finish' + exp.id" v-if="!exp.experience.now")
        p(v-show="!exp.experience.now") {{ $t('form.finish')}}:
        input(:id="'GET-expsdata__finish' + exp.id" name="expsdata-finish" type="date" placeholder="00/00/0000" v-model="exp.experience.data_end")
      // Sobre a experiência
      // The exps About
      label(:for="'GET-expsabout' + exp.id")
        p {{ $t('form.about')}}:
        textarea(:id="'GET-expsabout' + exp.id" ref="GET_expsabout" :placeholder="$t('form.activities_place')" placeholder="" @input="updatetextAreaHeight(key)" v-model="exp.experience.about")
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
