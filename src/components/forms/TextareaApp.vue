<template lang="pug">
  label(for="`GET-${name}`")
    p {{ (id >= 0) ? $t('form.about') : $t(`form.${name}_me`) }}:
    textarea(v-if="id >= 0"
            :id="`GET-${name}`"
            :placeholder="$t(`form.${translate}_place`)"
            v-resize-text-area
            v-model="user[value.parent][id][value.child].about"
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
  props: ['name', 'value', 'id', 'translate', 'vuex'],
  mixins: [mixinUpdateStore],
  directives: { 'resize-text-area': resizeTextArea }
}
</script>
