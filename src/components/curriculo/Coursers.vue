<template lang='pug'>
  .box.coursers
    button.btn.plus(type="button" v-if="user.coursers == 0" @click='newComponent()')
      span +
      | {{ $t('form.cademy')}}
    fieldset.course(:id="'course-' + course.id" v-for="(course, key, index) in user.coursers")
      legend(@click='toggleBox($event)')
        | {{ $t('form.cademy')}} {{ course.formation.name }}
        button.btn.delete.right.bullet(type="button" @click='removeComponent(key)')
          i -
        button.btn.plus.right.bullet(type="button" @click='newComponent(key)' v-scroll-to="'#course-' + course.id_sibiling")
          i +
      .flexbox
        // Curso atual?
        // The Course Now?
        label.course_now(v:for="'GET-coursenow' + course.id" v-bind:class="{ 'display-n-print': !course.formation.now }" @keyup.enter='course.formation.now = !course.formation.now')
          input(:id="'GET-coursenow' + course.id" name="'now' + course.id" type="checkbox" v-model="course.formation.now")
          | {{ $t('form.cademy_now')}}

        // Escola
        // The School
        label(for="GET-school")
          p {{ $t('form.school')}}:
          input#GET-school(name="school" type="text" placeholder="Escola, cursos, workshops..." v-model="course.formation.school")

        // Curso
        // The Course
        label(for="GET-course")
          p {{ $t('form.course')}}:
          input#GET-course(name="course" type="text" placeholder="Nome do curso..." v-model='course.formation.name')

        // Data do curso
        // The Course data
        label(for="GET-coursedata")
          p {{ $t('form.start')}}:
          input#GET-coursedata(name="coursedata" type="date" placeholder="00/00/0000" v-model="course.formation.data_start")
        label(for="GET-coursedata")
          p {{ $t('form.finish')}}:
          input#GET-coursedata(name="coursedata" type="date" placeholder="00/00/0000" v-model="course.formation.data_end")

        // Sobre o curso
        // The Course About
        label(for="GET-courseabout")
          p {{ $t('form.about')}}:
          textarea#GET-courseabout(ref="GET_courseabout" placeholder="Atividades ou grade curricular..." v-model="course.formation.about" @input="updatetextAreaHeight(key)")
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
      coursers_now: false
    }
  },
  methods: {
    toggleBox (e) { e.target.parentElement.classList.toggle('active') },
    updatetextAreaHeight (key) { this.$refs.GET_courseabout[key].style.height = this.$refs.GET_courseabout[key].scrollHeight + 'px' },
    updateVuex (name, e) {
      this.$store.commit(name, e.target.value)
      window.localStorage.setItem('store', JSON.stringify(this.user))
    },
    removeComponent (key) { this.$delete(this.user.coursers, key) },
    newComponent (key = -1) {
      this.user.coursers.push({
        id: ++key,
        id_sibiling: ++key,
        name: 'Formação Academica',
        formation: {
          name: '',
          school: '',
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
