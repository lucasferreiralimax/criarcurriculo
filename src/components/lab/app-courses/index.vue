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
          IconDelete
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
      IconCourse
      span +
      | {{ $t('form.cademy') }}
</template>

<script>
import { mixinUpdateStore } from '@/mixins/mixinUpdateStore.js'
import { scrollTo } from '@/directive/scroll.js'

import AppBox from '@/components/lab/app-box'
import AppInput from '@/components/inputs/app-input'
import AppTextarea from '@/components/inputs/app-textarea'
import IconDelete from '@/components/icons/icon-delete'
import IconCourse from '@/components/icons/icon-course'

export default {
  name: 'app-courses',
  props: ['errors'],
  mixins: [mixinUpdateStore],
  components: { AppBox, AppInput, AppTextarea, IconDelete, IconCourse },
  directives: { 'scroll-to': scrollTo },
  data () {
    return {
      dragging: false
    }
  }
}
</script>
