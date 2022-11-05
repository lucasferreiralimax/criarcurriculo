<template lang="pug">
draggable(
  :list="user.coursers"
  class="coursers"
  ghost-class="ghost"
  handle=".handle"
  @start="dragging = true"
  @end="dragging = false"
  @change="updateVuex('updateCourser', $event)"
)
  app-box(
    v-if="user.coursers.length !== 0"
    :id="'course-' + key"
    :key="key"
    title="true"
    type="coursers"
    :value="{ id: key, parent: 'coursers', child: 'formation'}"
    translate="course"
    v-for="(course, key) in user.coursers"
  )
    template(#action)
      .actions
        button.handle.btn.bullet.small.left(type="button" :aria-label="$t('aria-label.move') + ' ' + course.formation.name")
          i =
        button.btn.delete.bullet.small.left(type="button" @click="remove('coursers', key)" :aria-label="$t('aria-label.course_remove') + ' ' + course.formation.name")
          svg(viewBox="0 0 329.269 329" xmlns="http://www.w3.org/2000/svg")
            path(d="M194.8 164.77L323.013 36.555c8.343-8.34 8.343-21.825 0-30.164-8.34-8.34-21.825-8.34-30.164 0L164.633 134.605 36.422 6.391c-8.344-8.34-21.824-8.34-30.164 0-8.344 8.34-8.344 21.824 0 30.164l128.21 128.215L6.259 292.984c-8.344 8.34-8.344 21.825 0 30.164a21.266 21.266 0 0015.082 6.25c5.46 0 10.922-2.09 15.082-6.25l128.21-128.214 128.216 128.214a21.273 21.273 0 0015.082 6.25c5.46 0 10.922-2.09 15.082-6.25 8.343-8.34 8.343-21.824 0-30.164zm0 0")
    .row
      label.course_now(:for="'GET-coursenow-' + key" v-bind:class="{ 'display-n-print': !course.formation.now }" @keyup.enter='course.formation.now = !course.formation.now')
        input(:id="'GET-coursenow-' + key" name="'now' + key" type="checkbox" v-model="course.formation.now" @click="updateVuex('updateCourserCheck', $event, key)" :aria-checked="course.formation.now")
        | {{ $t('form.cademy_now')}}
    .row
      app-input(:index="key" :name="'school-' + key" :value="{ parent: 'coursers', child: 'formation', content: 'school' }" type="text" translate="school" vuex="updateCourser" :errors="errors")
      app-input(:index="key" :name="'course-' + key" :value="{ parent: 'coursers', child: 'formation', content: 'name' }" type="text" translate="course" vuex="updateCourser" :errors="errors")
    .row
      label(:for="'GET-coursedata__start-' + key")
        p {{ $t('form.start')}}:
        el-date-picker(:id="'GET-coursedata__start-' + key" name="coursedata-start" v-model="course.formation.data_start" type="month" :placeholder="$t('form.data_place')" @change="updateVuex('updateCourser', $event, key)")
      label(:for="'GET-coursedata__finish-' + key")
        p {{ $t('form.finish')}}:
        el-date-picker(:id="'GET-coursedata__finish-' + key" name="coursedata-finish" type="month" v-model="course.formation.data_end" :placeholder="$t('form.data_place')" @change="updateVuex('updateCourser', $event, key)")
    .row
      app-textarea(:index="key" :name="'courseabout-' + key" :value="{ parent: 'coursers', child: 'formation'}" translate="about_course" vuex="updateCourser")
    .row
      app-input(:index="key" :name="'schoolLink-' + key" :value="{ parent: 'coursers', child: 'formation', content: 'link' }" type="text" translate="link" vuex="updateCourser")
  app-box
    button.btn.plus.large(v-scroll-to="'#course-' + user.coursers.length" type="button" @click="newComponent('coursers')" :aria-label="$t('aria-label.course_add')")
      svg.icon(viewBox="0 -35 512 512" width="20" xmlns="http://www.w3.org/2000/svg")
        path(d="M512 135.5c0-13.242-8.941-25.305-24.531-33.102L302.074 9.703C289.56 3.445 273.195 0 255.996 0c-17.203 0-33.57 3.445-46.086 9.703L24.531 102.398C8.941 110.195 0 122.262 0 135.504s8.941 25.305 24.531 33.098l40.383 20.191V293.98c0 29.883 20.934 63.758 47.66 77.125l97.348 48.668c12.922 6.461 29.5 9.692 46.082 9.692s33.164-3.23 46.086-9.692l97.332-48.668c26.726-13.367 47.664-47.242 47.664-77.125V188.797l34.91-17.457v254.707c0 8.285 6.715 15 15 15s15-6.715 15-15V135.57c0-.023.004-.047.004-.07zm-481.965 0c.34-.805 2.25-3.441 7.914-6.273l185.38-92.688C231.636 32.383 243.542 30 255.995 30c12.45 0 24.356 2.383 32.664 6.535L456.59 120.5H312.328c-7.515-20.387-29.922-35.215-56.332-35.215-32.539 0-59.02 22.528-59.02 50.215 0 27.691 26.477 50.219 59.02 50.219 26.41 0 48.82-14.832 56.332-35.219h144.27l-167.926 83.96c-8.313 4.157-20.215 6.54-32.664 6.54h-.004c-12.45 0-24.356-2.383-32.664-6.535L37.95 141.77c-5.665-2.833-7.575-5.465-7.915-6.27zm254.985 0c0 10.96-13.29 20.219-29.024 20.219-15.726 0-29.02-9.258-29.02-20.219 0-10.957 13.294-20.215 29.02-20.215 15.734 0 29.024 9.258 29.024 20.215zm132.066 158.48c0 18.512-14.524 42.012-31.082 50.293l-97.332 48.668c-17.402 8.7-47.934 8.7-65.332 0l-97.348-48.668c-16.555-8.28-31.082-31.78-31.082-50.293v-90.187l115.012 57.504C222.437 267.555 238.8 271 256.004 271s33.566-3.45 46.082-9.707l115-57.5zm0 0")
      span +
      | {{ $t('form.cademy') }}
</template>

<script>
import { mixinUpdateStore } from '@/mixins/mixinUpdateStore.js'
import { scrollTo } from '@/directive/scroll.js'

import AppBox from '@/components/lab/app-box'
import AppInput from '@/components/inputs/app-input'
import AppTextarea from '@/components/inputs/app-textarea'

export default {
  name: 'app-courses',
  props: ['errors'],
  mixins: [mixinUpdateStore],
  components: { AppBox, AppInput, AppTextarea },
  directives: { 'scroll-to': scrollTo },
  data () {
    return {
      dragging: false
    }
  }
}
</script>
