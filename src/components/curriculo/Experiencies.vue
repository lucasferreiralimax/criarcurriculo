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
            input#GET-company(name="company" type="text" placeholder="Nome da empresa ou organização..." v-model="exp.experience.name")

          // Experiência
          // The experience
          label(for="GET-exps" v-bind:class="{ error: !exp.experience.work && errors.length }")
            p {{ $t('form.office')}}:
            input#GET-exps(name="exps" type="text" placeholder="Título ou cargo..." v-model="exp.experience.work")

          // Data da experiência
          // The experience data
          label(for="GET-expsdata" v-bind:class="{ error: !exp.experience.data_start && errors.length }")
            p {{ $t('form.start')}}:
            input#GET-expsdata-start(name="expsdata-start" type="date" placeholder="00/00/0000" v-model="exp.experience.data_start")
          label(for="GET-expsdata" v-show="!exp.experience.now" v-bind:class="{ error: !exp.experience.data_end && errors.length }")
            p {{ $t('form.finish')}}:
            input#GET-expsdata-finish(name="expsdata-finish" type="date" placeholder="00/00/0000" v-model="exp.experience.data_end")

          // Sobre a experiência
          // The exps About
          label(for="GET-expsabout" v-bind:class="{ error: !exp.experience.about && errors.length }")
            p {{ $t('form.about')}}:
            textarea#GET-expsabout(ref="GET_expsabout" placeholder="Atividades do serviço..." @input="updatetextAreaHeight(key)" v-model="exp.experience.about")
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'experiencies-data',
  props: ['errors'],
  computed: mapState({ user: state => state.user }),
  data () {
    return {
      erros: [],
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
