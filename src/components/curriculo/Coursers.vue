<template lang="pug">
  .box.coursers
    button.btn.plus.large(type="button" v-if="user.coursers.length == 0" @click='newComponent()')
      span +
      | {{ $t('form.cademy')}}
    fieldset.course(:id="'course-' + course.id" v-for="(course, key, index) in user.coursers" :key="key")
      legend
        | {{ $t('form.cademy')}} {{ course.formation.name }}
        .right.ml-1
          button.btn.delete.bullet.small.left(type="button" @click='removeComponent(key)')
            i -
          button.btn.plus.bullet.small.left(type="button" @click='newComponent(key)' v-scroll-to="'#course-' + course.id_sibiling")
            i +
      // Curso atual?
      // The Course Now?
      label.course_now(v:for="'GET-coursenow' + course.id" v-bind:class="{ 'display-n-print': !course.formation.now }" @keyup.enter='course.formation.now = !course.formation.now')
        input(:id="'GET-coursenow' + course.id" name="'now' + course.id" type="checkbox" v-model="course.formation.now")
        | {{ $t('form.cademy_now')}}

      // Escola
      // The School
      label(:for="'GET-school' + course.id" v-bind:class="{ error: !course.formation.school && errors.length }")
        p {{ $t('form.school')}}:
        input(:id="'GET-school' + course.id" name="school" type="text" :placeholder="$t('form.school_place')" v-model="course.formation.school" @input="updateVuex('updateCoursers')")
        p.error-msg(v-show="!course.formation.school && errors.length") {{ $t('form.errors.scholl') }}

      // Curso
      // The Course
      label(:for="'GET-course' + course.id" v-bind:class="{ error: !course.formation.name && errors.length }")
        p {{ $t('form.course')}}:
        input(:id="'GET-course' + course.id" name="course" type="text" :placeholder="$t('form.course_place')" v-model='course.formation.name')
        p.error-msg(v-show="!course.formation.name && errors.length") {{ $t('form.errors.course') }}
      // Data do curso
      // The Course data
      label(:for="'GET-coursedata__start' + course.id")
        p {{ $t('form.start')}}:
        input(:id="'GET-coursedata__start' + course.id" name="coursedata-start" type="date" placeholder="00/00/0000" v-model="course.formation.data_start")
      label(:for="'GET-coursedata__finish' + course.id")
        p {{ $t('form.finish')}}:
        input(:id="'GET-coursedata__finish' + course.id" name="coursedata-finish" type="date" placeholder="00/00/0000" v-model="course.formation.data_end")
      // Sobre o curso
      // The Course About
      label(:for="'GET-courseabout' + course.id")
        p {{ $t('form.about')}}:
        textarea(:id="'GET-courseabout' + course.id" ref="GET_courseabout" :placeholder="$t('form.about_course_place')" v-model="course.formation.about" @input="updatetextAreaHeight(key)")
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'experiencies-data',
  props: ['errors'],
  computed: mapState({ user: state => state.user }),
  data () {
    return {
      coursers_now: false
    }
  },
  methods: {
    updatetextAreaHeight (key) { this.$refs.GET_courseabout[key].style.height = this.$refs.GET_courseabout[key].scrollHeight + 'px' },
    updateVuex (name) {
      this.$store.commit(name, this.user.coursers)
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
