<template lang="pug">
  .box.coursers
    button.btn.plus.large(type="button" v-if="user.coursers.length == 0" @click='newComponent()' :aria-label="$t('aria-label.course_add')")
      span +
      | {{ $t('form.cademy')}}
    fieldset.course(:id="'course-' + course.id" v-for="(course, key, index) in user.coursers" :key="key")
      legend
        svg.icon(viewBox="0 -35 512 512" width="20" xmlns="http://www.w3.org/2000/svg")
          path(d="M512 135.5c0-13.242-8.941-25.305-24.531-33.102L302.074 9.703C289.56 3.445 273.195 0 255.996 0c-17.203 0-33.57 3.445-46.086 9.703L24.531 102.398C8.941 110.195 0 122.262 0 135.504s8.941 25.305 24.531 33.098l40.383 20.191V293.98c0 29.883 20.934 63.758 47.66 77.125l97.348 48.668c12.922 6.461 29.5 9.692 46.082 9.692s33.164-3.23 46.086-9.692l97.332-48.668c26.726-13.367 47.664-47.242 47.664-77.125V188.797l34.91-17.457v254.707c0 8.285 6.715 15 15 15s15-6.715 15-15V135.57c0-.023.004-.047.004-.07zm-481.965 0c.34-.805 2.25-3.441 7.914-6.273l185.38-92.688C231.636 32.383 243.542 30 255.995 30c12.45 0 24.356 2.383 32.664 6.535L456.59 120.5H312.328c-7.515-20.387-29.922-35.215-56.332-35.215-32.539 0-59.02 22.528-59.02 50.215 0 27.691 26.477 50.219 59.02 50.219 26.41 0 48.82-14.832 56.332-35.219h144.27l-167.926 83.96c-8.313 4.157-20.215 6.54-32.664 6.54h-.004c-12.45 0-24.356-2.383-32.664-6.535L37.95 141.77c-5.665-2.833-7.575-5.465-7.915-6.27zm254.985 0c0 10.96-13.29 20.219-29.024 20.219-15.726 0-29.02-9.258-29.02-20.219 0-10.957 13.294-20.215 29.02-20.215 15.734 0 29.024 9.258 29.024 20.215zm132.066 158.48c0 18.512-14.524 42.012-31.082 50.293l-97.332 48.668c-17.402 8.7-47.934 8.7-65.332 0l-97.348-48.668c-16.555-8.28-31.082-31.78-31.082-50.293v-90.187l115.012 57.504C222.437 267.555 238.8 271 256.004 271s33.566-3.45 46.082-9.707l115-57.5zm0 0")
        span {{ $t('form.cademy')}} {{ course.formation.name }}
        .right.ml-1
          button.btn.delete.bullet.small.left(type="button" @click='removeComponent(key)' :aria-label="$t('aria-label.course_remove')")
            i -
          button.btn.plus.bullet.small.left(type="button" @click='newComponent(key)' v-scroll-to="'#course-' + course.id_sibiling" :aria-label="$t('aria-label.course_add_new')")
            i +
      // Curso atual?
      // The Course Now?
      label.course_now(:for="'GET-coursenow-' + course.id" v-bind:class="{ 'display-n-print': !course.formation.now }" @keyup.enter='course.formation.now = !course.formation.now')
        input(:id="'GET-coursenow-' + course.id" name="'now' + course.id" type="checkbox" v-model="course.formation.now" @click="updateVuex('updateCourserCheck', $event, course.id)")
        | {{ $t('form.cademy_now')}}

      // Escola
      // The School
      label(:for="'GET-school-' + course.id" v-bind:class="{ error: !course.formation.school && errors.length }")
        p {{ $t('form.school')}}:
        input(:id="'GET-school-' + course.id" name="school" type="text" :placeholder="$t('form.school_place')" v-model="course.formation.school" @input="updateVuex('updateCourser', $event)")
        p.error-msg(v-show="!course.formation.school && errors.length") {{ $t('form.errors.school') }}

      // Curso
      // The Course
      label(:for="'GET-course-' + course.id" v-bind:class="{ error: !course.formation.name && errors.length }")
        p {{ $t('form.course')}}:
        input(:id="'GET-course-' + course.id" name="course" type="text" :placeholder="$t('form.course_place')" v-model='course.formation.name' @input="updateVuex('updateCourser', $event)")
        p.error-msg(v-show="!course.formation.name && errors.length") {{ $t('form.errors.course') }}
      // Data do curso
      // The Course data
      label(:for="'GET-coursedata__start-' + course.id")
        p {{ $t('form.start')}}:
        input(:id="'GET-coursedata__start-' + course.id" name="coursedata-start" type="month" v-model="course.formation.data_start" @input="updateVuex('updateCourser', $event)")
      label(:for="'GET-coursedata__finish-' + course.id")
        p {{ $t('form.finish')}}:
        input(:id="'GET-coursedata__finish-' + course.id" name="coursedata-finish" type="month" v-model="course.formation.data_end" @input="updateVuex('updateCourser', $event)")
      // Sobre o curso
      // The Course About
      label(:for="'GET-courseabout-' + course.id")
        p {{ $t('form.about')}}:
        textarea(:id="'GET-courseabout-' + course.id" ref="GET_courseabout" :placeholder="$t('form.about_course_place')" v-model="course.formation.about" @input="resizeTextArea('GET_courseabout', key), updateVuex('updateCourser', $event)" @click="resizeTextArea('GET_courseabout', key)")
</template>

<script>
import { mixinUpdateStore } from '../../mixins/mixinUpdateStore.js'
import { mixinResizeTextArea } from '../../mixins/mixinResizeTextArea.js'

export default {
  name: 'experiencies-data',
  props: ['errors'],
  mixins: [mixinUpdateStore, mixinResizeTextArea],
  data () {
    return {
      coursers_now: false
    }
  },
  methods: {
    removeComponent (key) {
      this.$delete(this.user.coursers, key)
      this.updateStore()
    },
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
