<template lang="pug">
draggable(:list="user[value]"
          ghost-class="ghost"
          handle=".handle"
          @start="dragging = true"
          @end="dragging = false"
          @change="updateVuex(vuex, $event)")
  label.input__contato(:for="`GET-${name}-` + key" v-for="(item, key, index) in user[value]")
    .right
      button.btn.delete.bullet.small.left(type="button" @click="remove(value, key)" :aria-label="$t(`aria-label.${name}_remove`) + ' ' + user[value][key]")
        i -
      button.btn.plus.bullet.small.left.ml-1(type="button" @click="newInput(value, vuex)" :aria-label="$t(`aria-label.${name}_add_new`)")
        i +
      button.handle.btn.bullet.small.left.ml-1(type="button" :aria-label="$t('aria-label.move') + ' ' + user[value][key]")
        i =
    | {{ language ? $tc(`form.${translate}`, 1) : $t(`form.${translate}`) }}:
    template(v-if="type == 'tel'")
      input(:id="`GET-${name}-` + key"
            :class="{ error: !user[value][key] && errors ? errors.length : false }"
            :name="`${name}-` + key"
            :type="type"
            :placeholder="$t(`form.${translate}_place`)"
            v-focus-label
            v-mask="'(##) # #### ####'"
            v-model="user[value][key]"
            @input="updateVuex(vuex, $event)")
    template(v-else)
      input(:id="`GET-${name}-` + key"
            :class="{ error: !user[value][key] && errors ? errors.length : false }"
            :name="`${name}-` + key"
            :type="type"
            :placeholder="$t(`form.${translate}_place`)"
            v-focus-label
            v-model="user[value][key]"
            @input="updateVuex(vuex, $event)")
    p.error-msg(v-if="!user[value][key] && errors ? errors.length : false")
      | {{ $t(`form.errors.${translate}`) }}
</template>

<script>
import { mixinUpdateStore } from '@/mixins/mixinUpdateStore.js'
import { focusLabel } from '@/directive/focus.js'

export default {
  name: 'input-crud',
  props: ['name', 'value', 'type', 'vuex', 'translate', 'language', 'errors'],
  mixins: [mixinUpdateStore],
  directives: { 'focus-label': focusLabel },
  data () {
    return {
      dragging: false
    }
  }
}
</script>
