<template lang="pug">
  label(for="`GET-${name}`")
    p {{ (id >= 0) ? $t('form.about') : $t(`form.${name}_me`) }}:
    textarea(v-if="id >= 0"
            :id="`GET-${name}`"
            :ref="`GET_${name}`"
            :placeholder="$t(`form.${translate}_place`)"
            v-model="user[value.parent][id][value.child].about"
            @click="resizeTextArea(`GET_${name}`)"
            @input="resizeTextArea(`GET_${name}`), updateVuex(vuex, $event)")
    textarea(v-else
            :id="`GET-${name}`"
            :ref="`GET_${name}`"
            :placeholder="$t(`form.${translate}_place`)"
            v-model="user[value]"
            @click="resizeTextArea(`GET_${name}`)"
            @input="resizeTextArea(`GET_${name}`), updateVuex(vuex, $event)")
</template>

<script>
import { mixinUpdateStore } from '@/mixins/mixinUpdateStore.js'
import { mixinResizeTextArea } from '@/mixins/mixinResizeTextArea.js'

export default {
  name: 'textarea-app',
  props: ['name', 'value', 'id', 'translate', 'vuex'],
  mixins: [mixinUpdateStore, mixinResizeTextArea]
}
</script>
