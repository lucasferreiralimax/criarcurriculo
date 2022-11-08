<template lang="pug">
draggable(:list="user.exps"
  class="experiences"
  ghost-class="ghost"
  handle=".handle"
  @start="dragging = true"
  @end="dragging = false"
  @change="updateVuex('updateExp', $event)"
)
  app-box(
    v-if="user.exps.length !== 0"
    :id="'exp-' + key"
    :key="key"
    title="true"
    type="exps"
    :value="{ id: key, parent: 'exps', child: 'experience' }"
    translate="exp"
    v-for="(exp, key) in user.exps"
  )
    template(#action)
      .actions
        button.handle.btn.bullet.small.left(type="button" :aria-label="$t('aria-label.move') + ' ' + exp.experience.name")
          i =
        button.btn.delete.bullet.small.left(type="button" @click="remove('exps', key)" :aria-label="$t('aria-label.exp_remove') + ' ' + exp.experience.name")
          IconDelete
    .row
      label.exps_now(:for="'GET-expsnow-' + key" v-bind:class="{ active: exp.experience.now, 'display-n-print': !exp.experience.now }" @keyup.enter='exp.experience.now = !exp.experience.now')
        input(:id="'GET-expsnow-' + key" type="checkbox" v:name="'now' + key" v-model="exp.experience.now" @click="updateVuex('updateExpCheck', $event, key)" :aria-checked="exp.experience.now")
        | {{ $t('form.exp_now')}}
    .row
      app-input(:index="key" :name="'company-' + key" :value="{ parent: 'exps', child: 'experience', content: 'name' }" type="text" translate="company" vuex="updateExp" :errors="errors")
      app-input(:index="key" :name="'exps-' + key" :value="{ parent: 'exps', child: 'experience', content: 'work' }" type="text" translate="office" vuex="updateExp" :errors="errors")
    .row
      label(:for="'GET-expsdata__start-' + key" v-bind:class="{ large: exp.experience.now }")
        p {{ $t('form.start')}}:
        el-date-picker(:id="'GET-expsdata__start-' + key" name="expsdata-start" type="month" v-model="exp.experience.data_start" :placeholder="$t('form.data_place')" @change="updateVuex('updateExp', $event, key)")
      label(:for="'GET-expsdata__finish' + key" v-if="!exp.experience.now")
        p(v-show="!exp.experience.now") {{ $t('form.finish')}}:
        el-date-picker(:id="'GET-expsdata__finish-' + key" name="expsdata-finish" type="month" v-model="exp.experience.data_end" :placeholder="$t('form.data_place')" @change="updateVuex('updateExp', $event, key)")
    .row
      app-textarea(:index="key" :name="'expsabout-' + key" :value="{ parent: 'exps', child: 'experience' }" translate="activities" vuex="updateExp")
    .row
      app-input(:index="key" :name="'companyLink-' + key" :value="{ parent: 'exps', child: 'experience', content: 'link' }" type="text" translate="link" vuex="updateExp")
  app-box
    button.btn.plus.large(v-scroll-to="'#exp-' + user.exps.length" type="button" @click="newComponent('exps')" :aria-label="$t('aria-label.exp_add')")
      IconExperiencies
      span +
      | {{ $t('form.exp') }}
</template>

<script>
import { mixinUpdateStore } from '@/mixins/mixinUpdateStore.js'
import { scrollTo } from '@/directive/scroll.js'

import AppBox from '@/components/lab/app-box'
import AppInput from '@/components/inputs/app-input'
import AppTextarea from '@/components/inputs/app-textarea'
import IconDelete from '@/components/icons/icon-delete'
import IconExperiencies from '@/components/icons/icon-experiencies'

export default {
  name: 'app-experiencies',
  props: ['errors'],
  mixins: [mixinUpdateStore],
  components: { AppBox, AppInput, AppTextarea, IconDelete, IconExperiencies },
  directives: { 'scroll-to': scrollTo },
  data () {
    return {
      dragging: false
    }
  }
}
</script>
