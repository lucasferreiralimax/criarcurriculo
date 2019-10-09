<template lang="pug">
  label(:for="`GET-${name}`")
    template(v-if="value.parent")
      | {{ $t(`form.${translate}`) }}
      input(v-if="value.parent" :id="`GET-${name}`" :name="name" :type="type" :placeholder="$t(`form.${translate}_place`)" v-model="user[value.parent][value.child]" @input="updateVuex(vuex, $event)" :class="{ error: !user[value.parent][value.child] && errors ? errors.length : false }")
      p.error-msg(v-if="!user[value.parent][value.child] && errors ? errors.length : false") {{ $t(`form.errors.${translate}`) }}
    template(v-else)
      | {{ $t(`form.${translate}`) }}
      input( :id="`GET-${name}`" :name="name" :type="type" :placeholder="$t(`form.${translate}_place`)" v-model="user[value]" @input="updateVuex(vuex, $event)" :class="{ error: !user[value] && errors ? errors.length : false }")
      p.error-msg(v-if="!user[value] && errors ? errors.length : false") {{ $t(`form.errors.${translate}`) }}
</template>

<script>
import { mixinUpdateStore } from '@/mixins/mixinUpdateStore.js'

export default {
  name: 'input-app',
  props: ['name', 'value', 'type', 'vuex', 'translate', 'errors'],
  mixins: [mixinUpdateStore]
}
</script>
