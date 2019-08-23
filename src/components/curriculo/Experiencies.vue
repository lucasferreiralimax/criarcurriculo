<template lang="pug">
  .box.experiences
    button.btn.plus.large(type="button" v-if="user.exps.length == 0" @click='newComponent()' :aria-label="$t('aria-label.exp_add')")
      span +
      | {{ $t('form.exp')}}
    fieldset.experience(v-for="(exp, key, index) in user.exps" :id="'exp-' + exp.id" :key="key")
      legend
        svg.icon(viewBox="0 -31 512 512" xmlns="http://www.w3.org/2000/svg" width="20")
          path(d="M497.094 60.004c-.031 0-.063-.004-.094-.004H361V45c0-24.813-20.188-45-45-45H196c-24.813 0-45 20.188-45 45v15H15C6.648 60 0 66.844 0 75v330c0 24.813 20.188 45 45 45h422c24.813 0 45-20.188 45-45V75.316v-.058c-.574-9.852-6.633-15.2-14.906-15.254zM181 45c0-8.27 6.73-15 15-15h120c8.27 0 15 6.73 15 15v15H181zm295.188 45l-46.583 139.742A14.975 14.975 0 0 1 415.38 240H331v-15c0-8.285-6.715-15-15-15H196c-8.285 0-15 6.715-15 15v15H96.621a14.975 14.975 0 0 1-14.226-10.258L35.813 90zM301 240v30h-90v-30zm181 165c0 8.27-6.73 15-15 15H45c-8.27 0-15-6.73-15-15V167.434l23.934 71.796A44.935 44.935 0 0 0 96.62 270H181v15c0 8.285 6.715 15 15 15h120c8.285 0 15-6.715 15-15v-15h84.379a44.935 44.935 0 0 0 42.687-30.77L482 167.434zm0 0")
        span {{ $t('form.exp')}} {{ exp.experience.work }}
        .right.ml-1
          button.btn.delete.bullet.small.left(type="button" @click="removeComponent(key)" :aria-label="$t('aria-label.exp_remove')")
            i -
          button.btn.plus.bullet.small.left(type="button" @click="newComponent(key)" v-scroll-to="'#exp-' + exp.id_sibiling" :aria-label="$t('aria-label.exp_add_new')")
            i +
      // Experiência atual?
      // The exps Now?
      label.exps_now(:for="'GET-expsnow-' + exp.id" v-bind:class="{ active: exp.experience.now, 'display-n-print': !exp.experience.now }" @keyup.enter='exp.experience.now = !exp.experience.now')
        input(:id="'GET-expsnow-' + exp.id" type="checkbox" v:name="'now' + exp.id" v-model="exp.experience.now")
        | {{ $t('form.exp_now')}}

      // Compania
      // The Company
      label(:for="'GET-company-' + exp.id" v-bind:class="{ error: !exp.experience.name && errors.length }")
        p {{ $t('form.company')}}:
        input(:id="'GET-company-' + exp.id" name="company" type="text" :placeholder="$t('form.company_place')" placeholder="" v-model="exp.experience.name")
        p.error-msg(v-show="!exp.experience.name && errors.length") {{ $t('form.errors.company') }}

      // Experiência
      // The experience
      label(:for="'GET-exps-' + exp.id" v-bind:class="{ error: !exp.experience.work && errors.length }")
        p {{ $t('form.office')}}:
        input(:id="'GET-exps-' + exp.id" name="exps" type="text" :placeholder="$t('form.office_place')" v-model="exp.experience.work")
        p.error-msg(v-show="!exp.experience.work && errors.length") {{ $t('form.errors.exp') }}

      // Data da experiência
      // The experience data
      label(:for="'GET-expsdata__start-' + exp.id")
        p {{ $t('form.start')}}:
        input(:id="'GET-expsdata__start-' + exp.id" name="expsdata-start" type="month" v-model="exp.experience.data_start")
      label(:for="'GET-expsdata__finish' + exp.id" v-if="!exp.experience.now")
        p(v-show="!exp.experience.now") {{ $t('form.finish')}}:
        input(:id="'GET-expsdata__finish-' + exp.id" name="expsdata-finish" type="month" v-model="exp.experience.data_end")
      // Sobre a experiência
      // The exps About
      label(:for="'GET-expsabout-' + exp.id")
        p {{ $t('form.about')}}:
        textarea(:id="'GET-expsabout-' + exp.id" ref="GET_expsabout" :placeholder="$t('form.activities_place')" placeholder="" @input="updatetextAreaHeight(key)" @click="updatetextAreaHeight(key)" v-model="exp.experience.about")
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
