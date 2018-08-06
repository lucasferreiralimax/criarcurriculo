<template lang='pug'>
  .box.experiences
    button.btn.plus(type="button" v-if="user.exps == 0" @click='new_component()')
      span +
      | {{ $t('form.exp')}}
    fieldset.experience(v-for="(exp, key, index) in user.exps" :id="'exp-' + exp.id")
      legend
        | {{ $t('form.exp')}} {{ exp.experience.work }}
        button.btn.delete.right.bullet(type="button" @click="remove_component(key)")
          i -
        button.btn.plus.right.bullet(type="button" @click="new_component(key)" v-scroll-to="'#exp-' + exp.id_sibiling")
          i +

      // Get the exps Now?
      label.exps_now(v:for="'GET-expsnow' + exp.id" v-bind:class="{ active: exp.experience.now, 'display-n-print': !exp.experience.now }" @keyup.enter='exp.experience.now = !exp.experience.now')
        input(:id="'GET-expsnow' + exp.id" type="checkbox" v:name="'now' + exp.id" v-model="exp.experience.now")
        | {{ $t('form.exp_now')}}

      // Get the School
      label(for="GET-school" v-bind:class="{ error: !exp.experience.name && errors.length }")
        p {{ $t('form.company')}}:
        input#GET-school(name="school" type="text" placeholder="Nome da empresa ou organização..." v-model="exp.experience.name")

      // Get the exps
      label(for="GET-exps" v-bind:class="{ error: !exp.experience.work && errors.length }")
        p {{ $t('form.office')}}:
        input#GET-exps(name="exps" type="text" placeholder="Título ou cargo..." v-model="exp.experience.work")

      // Get the exps data
      label(for="GET-expsdata" v-bind:class="{ error: !exp.experience.data_start && errors.length }")
        p {{ $t('form.start')}}:
        input#GET-expsdata(name="expsdata" type="date" placeholder="00/00/0000" v-model="exp.experience.data_start")
      label(for="GET-expsdata" v-show="!exp.experience.now" v-bind:class="{ error: !exp.experience.data_end && errors.length }")
        p {{ $t('form.end')}}:
        input#GET-expsdata(name="expsdata" type="date" placeholder="00/00/0000" v-model="exp.experience.data_end")

      // Get the exps About
      label(for="GET-expsabout" v-bind:class="{ error: !exp.experience.about && errors.length }")
        p {{ $t('form.about')}}:
        textarea#GET-expsabout(ref="GET_expsabout" placeholder="Atividades do serviço..." @input="updatetextAreaHeight(key)" v-model="exp.experience.about")
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'experiencies-data',
  props: ['errors'],
  computed: mapState({
    user: state => state.user
  }),
  data () {
    return {
      erros: [],
      exps_now: false
    }
  },
  methods: {
    updateVuex (name, e) {
      this.$store.commit(name, e.target.value)
      window.localStorage.setItem('store', JSON.stringify(this.user))
    },
    updatetextAreaHeight (key) {
      this.$refs.GET_expsabout[key].style.height = this.$refs.GET_expsabout[key].scrollHeight + 'px'
    },
    new_component (key = -1) {
      this.user.exps.push({
        id: ++key,
        id_sibiling: ++key,
        name: 'Experiencia',
        experience: {
          name: '',
          work: '',
          data_start: '',
          data_end: '',
          about: '',
          now: false
        }
      })
    },
    remove_component (key) {
      this.$delete(this.user.exps, key)
    }
  }
}
</script>
