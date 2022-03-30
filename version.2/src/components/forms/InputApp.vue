<template lang="pug">
  label(:for="`GET-${name}`")
    template(v-if="value.parent")
      | {{ $t(`form.${translate}`) }}:
      template(v-if="value.content")
        input(:id="`GET-${name}`"
              :class="{ error: !user[value.parent][index][value.child][value.content] && errors ? errors.length : false }"
              :name="name"
              :type="type"
              :placeholder="$t(`form.${translate}_place`)"
              v-focus-label
              v-model="user[value.parent][index][value.child][value.content]"
              @input="updateVuex(vuex, $event)")
        p.error-msg(v-if="!user[value.parent][index][value.child][value.content] && errors ? errors.length : false")
          | {{ $t(`form.errors.${translate}`) }}
      template(v-else)
        input(:id="`GET-${name}`"
              :class="{ error: !user[value.parent][value.child] && errors ? errors.length : false }"
              :name="name"
              :type="type"
              :placeholder="$t(`form.${translate}_place`)"
              v-focus-label
              v-model="user[value.parent][value.child]"
              @input="updateVuex(vuex, $event)")
        p.error-msg(v-if="!user[value.parent][value.child] && errors ? errors.length : false")
          | {{ $t(`form.errors.${translate}`) }}
    template(v-else)
      | {{ $t(`form.${translate}`) }}:
      input(:id="`GET-${name}`"
            :class="{ error: !user[value] && errors ? errors.length : false }"
            :name="name"
            :type="type"
            :placeholder="$t(`form.${translate}_place`)"
            v-focus-label
            v-model="user[value]"
            @input="updateVuex(vuex, $event)")
      p.error-msg(v-if="!user[value] && errors ? errors.length : false")
        | {{ $t(`form.errors.${translate}`) }}
      p.error-msg.top(v-if="user[value] && user[value] < 14 && errors ? errors.length : false")
        | {{ $t(`form.errors.${translate}-min`) }}
</template>

<script>
import { mixinUpdateStore } from '@/mixins/mixinUpdateStore.js'
import { focusLabel } from '@/directive/focus.js'

export default {
  name: 'input-app',
  props: ['index', 'name', 'value', 'type', 'vuex', 'translate', 'errors'],
  mixins: [mixinUpdateStore],
  directives: { 'focus-label': focusLabel },
  mounted () {
    if(this.type == 'number') {
      document.querySelector("[name='dataofbirth']").setAttribute("min", "14")
    }
  },
}
</script>
