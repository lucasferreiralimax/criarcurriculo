<template lang="pug">
draggable(:list="user.exps"
  class="experiences"
  ghost-class="ghost"
  handle=".handle"
  @start="dragging = true"
  @end="dragging = false"
  @change="updateVuex('updateExp', $event)")
  box-curriculo(v-if="user.exps.length !== 0"
                :id="'exp-' + key"
                :key="key"
                title="true"
                type="exps"
                :value="{ id: key, parent: 'exps', child: 'experience' }"
                translate="exp"
                v-for="(exp, key) in user.exps")
    template(#action)
      .right.ml-1
        button.handle.btn.bullet.small.left(type="button" :aria-label="$t('aria-label.exp_remove') + ' ' + exp.experience.name")
          i =
      .right.ml-1
        button.btn.delete.bullet.small.left(type="button" @click="remove('exps', key)" :aria-label="$t('aria-label.exp_remove') + ' ' + exp.experience.name")
          i -
    .row
      label.exps_now(:for="'GET-expsnow-' + key" v-bind:class="{ active: exp.experience.now, 'display-n-print': !exp.experience.now }" @keyup.enter='exp.experience.now = !exp.experience.now')
        input(:id="'GET-expsnow-' + key" type="checkbox" v:name="'now' + key" v-model="exp.experience.now" @click="updateVuex('updateExpCheck', $event, key)")
        | {{ $t('form.exp_now')}}
    .row
      input-app(:index="key" :name="'company-' + key" :value="{ parent: 'exps', child: 'experience', content: 'name' }" type="text" translate="company" vuex="updateExp" :errors="errors")
      input-app(:index="key" :name="'exps-' + key" :value="{ parent: 'exps', child: 'experience', content: 'work' }" type="text" translate="office" vuex="updateExp" :errors="errors")
    .row
      label(:for="'GET-expsdata__start-' + key" v-bind:class="{ large: exp.experience.now }")
        p {{ $t('form.start')}}:
        el-date-picker(:id="'GET-expsdata__start-' + key" name="expsdata-start" type="month" v-model="exp.experience.data_start" :placeholder="$t('form.data_place')" @change="updateVuex('updateExp', $event, key)")
      label(:for="'GET-expsdata__finish' + key" v-if="!exp.experience.now")
        p(v-show="!exp.experience.now") {{ $t('form.finish')}}:
        el-date-picker(:id="'GET-expsdata__finish-' + key" name="expsdata-finish" type="month" v-model="exp.experience.data_end" :placeholder="$t('form.data_place')" @change="updateVuex('updateExp', $event, key)")
    .row
      textarea-app(:index="key" :name="'expsabout-' + key" :value="{ parent: 'exps', child: 'experience' }" translate="activities" vuex="updateExp")
  box-curriculo
    button.btn.plus.large(v-scroll-to="'#exp-' + user.exps.length" type="button" @click="newComponent('exps')" :aria-label="$t('aria-label.exp_add')")
      svg.icon(viewBox="0 -31 512 512" xmlns="http://www.w3.org/2000/svg" width="20")
        path(d="M497.094 60.004c-.031 0-.063-.004-.094-.004H361V45c0-24.813-20.188-45-45-45H196c-24.813 0-45 20.188-45 45v15H15C6.648 60 0 66.844 0 75v330c0 24.813 20.188 45 45 45h422c24.813 0 45-20.188 45-45V75.316v-.058c-.574-9.852-6.633-15.2-14.906-15.254zM181 45c0-8.27 6.73-15 15-15h120c8.27 0 15 6.73 15 15v15H181zm295.188 45l-46.583 139.742A14.975 14.975 0 0 1 415.38 240H331v-15c0-8.285-6.715-15-15-15H196c-8.285 0-15 6.715-15 15v15H96.621a14.975 14.975 0 0 1-14.226-10.258L35.813 90zM301 240v30h-90v-30zm181 165c0 8.27-6.73 15-15 15H45c-8.27 0-15-6.73-15-15V167.434l23.934 71.796A44.935 44.935 0 0 0 96.62 270H181v15c0 8.285 6.715 15 15 15h120c8.285 0 15-6.715 15-15v-15h84.379a44.935 44.935 0 0 0 42.687-30.77L482 167.434zm0 0")
      span +
      | {{ $t('form.exp') }}
</template>

<script>
import { mixinUpdateStore } from '@/mixins/mixinUpdateStore.js'
import { scrollTo } from '@/directive/scroll.js'

import BoxCurriculo from '@/components/curriculo/BoxCurriculo'
import InputApp from '@/components/forms/InputApp'
import TextareaApp from '@/components/forms/TextareaApp'

export default {
  name: 'experiencies',
  props: ['errors'],
  mixins: [mixinUpdateStore],
  components: { BoxCurriculo, InputApp, TextareaApp },
  directives: { 'scroll-to': scrollTo },
  data () {
    return {
      dragging: false
    }
  }
}
</script>
