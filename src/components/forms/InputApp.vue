<template lang="pug">
  label(:for="`GET-${name}`" v-bind:class="{ error: !user[value] && errors ? errors.length : false }")
    | {{ $t(`form.${translate}`) }}
    input(:id="`GET-${name}`" :name="name" :type="type" :placeholder="$t(`form.${translate}_place`)" :value="user[value]" @input="updateVuex(vuex, $event)")
    p.error-msg(v-if="!user[value] && errors ? errors.length : false") {{ $t(`form.errors.${translate}`) }}
</template>

<script>
import { mixinUpdateStore } from '../../mixins/mixinUpdateStore.js'

export default {
  name: 'input-app',
  props: ['name', 'value', 'type', 'vuex', 'translate', 'errors'],
  mixins: [mixinUpdateStore]
}
</script>
