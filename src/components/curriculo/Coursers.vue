<template lang="pug">
.coursers
  box-curriculo(v-if="user.coursers.length !== 0" :id="'course-' + key" :key="key" title="true" type="coursers" :value="{ id: key, parent: 'coursers', child: 'formation'}" translate="cademy" v-for="(course, key, index) in user.coursers")
    template(#action)
      .right.ml-1
        button.btn.delete.bullet.small.left(type="button" @click="removeComponent('coursers', key)" :aria-label="$t('aria-label.course_remove')")
          i -
    label.course_now(:for="'GET-coursenow-' + key" v-bind:class="{ 'display-n-print': !course.formation.now }" @keyup.enter='course.formation.now = !course.formation.now')
      input(:id="'GET-coursenow-' + key" name="'now' + key" type="checkbox" v-model="course.formation.now" @click="updateVuex('updateCourserCheck', $event, key)")
      | {{ $t('form.cademy_now')}}
    input-app(:id="key" :name="'school-' + key" :value="{ parent: 'coursers', child: 'formation', content: 'school' }" type="text" translate="school" vuex="updateCourser" :errors="errors")
    input-app(:id="key" :name="'course-' + key" :value="{ parent: 'coursers', child: 'formation', content: 'name' }" type="text" translate="course" vuex="updateCourser" :errors="errors")
    label(:for="'GET-coursedata__start-' + key")
      p {{ $t('form.start')}}:
      input(:id="'GET-coursedata__start-' + key" name="coursedata-start" type="month" v-model="course.formation.data_start" @input="updateVuex('updateCourser', $event)")
    label(:for="'GET-coursedata__finish-' + key")
      p {{ $t('form.finish')}}:
      input(:id="'GET-coursedata__finish-' + key" name="coursedata-finish" type="month" v-model="course.formation.data_end" @input="updateVuex('updateCourser', $event)")
    textarea-app(:id="key" :name="'courseabout-' + key" :value="{ parent: 'coursers', child: 'formation'}" translate="about_course" vuex="updateCourser")
  box-curriculo
    button.btn.plus.large(type="button" @click="newComponent('coursers')" :aria-label="$t('aria-label.course_add')")
      span +
      | {{ $t('form.cademy') }}
</template>

<script>
import { mixinUpdateStore } from '@/mixins/mixinUpdateStore.js'

import BoxCurriculo from '@/components/curriculo/BoxCurriculo'
import InputApp from '@/components/forms/InputApp'
import TextareaApp from '@/components/forms/TextareaApp'

export default {
  name: 'experiencies',
  props: ['errors'],
  mixins: [mixinUpdateStore],
  components: { BoxCurriculo, InputApp, TextareaApp }
}
</script>
