<template lang="pug">
  label(:for="`GET-${name}`")
    p {{ (index >= 0) ? $t('form.about') : $t(`form.${name}_me`) }}:
    textarea(v-if="index >= 0"
            :id="`GET-${name}`"
            :placeholder="$t(`form.${translate}_place`)"
            v-resize-text-area
            v-model="user[value.parent][index][value.child].about"
            @input="updateVuex(vuex, $event)")
    textarea(v-else
            :id="`GET-${name}`"
            :placeholder="$t(`form.${translate}_place`)"
            v-resize-text-area
            v-model="user[value]"
            @input="updateVuex(vuex, $event)")
</template>

<script>
import { mixinUpdateStore } from '@/mixins/mixinUpdateStore.js'
import { resizeTextArea } from '@/directive/resize.js'

export default {
  name: 'textarea-app',
  props: ['name', 'value', 'index', 'translate', 'vuex'],
  mixins: [mixinUpdateStore],
  directives: { 'resize-text-area': resizeTextArea }
}
</script>
