<template lang="pug">
  label(:for="`GET-${name}`")
    template(v-if="value.parent")
      | {{ $t(`form.${translate}`) }}
      template(v-if="value.content")
        input(:id="`GET-${name}`"
              :class="{ error: !user[value.parent][id][value.child][value.content] && errors ? errors.length : false }"
              :name="name"
              :type="type"
              :placeholder="$t(`form.${translate}_place`)"
              v-model="user[value.parent][id][value.child][value.content]"
              @input="updateVuex(vuex, $event)")
        p.error-msg(v-if="!user[value.parent][id][value.child][value.content] && errors ? errors.length : false")
          | {{ $t(`form.errors.${translate}`) }}
      template(v-else)
        input(:id="`GET-${name}`"
              :class="{ error: !user[value.parent][value.child] && errors ? errors.length : false }"
              :name="name"
              :type="type"
              :placeholder="$t(`form.${translate}_place`)"
              v-model="user[value.parent][value.child]"
              @input="updateVuex(vuex, $event)")
        p.error-msg(v-if="!user[value.parent][value.child] && errors ? errors.length : false")
          | {{ $t(`form.errors.${translate}`) }}
    template(v-else)
      | {{ $t(`form.${translate}`) }}
      input(:id="`GET-${name}`"
            :class="{ error: !user[value] && errors ? errors.length : false }"
            :name="name"
            :type="type"
            :placeholder="$t(`form.${translate}_place`)"
            v-model="user[value]"
            @input="updateVuex(vuex, $event)")
      p.error-msg(v-if="!user[value] && errors ? errors.length : false")
        | {{ $t(`form.errors.${translate}`) }}
</template>

<script>
import { mixinUpdateStore } from '@/mixins/mixinUpdateStore.js'

export default {
  name: 'input-app',
  props: ['id', 'name', 'value', 'type', 'vuex', 'translate', 'errors'],
  mixins: [mixinUpdateStore]
}
</script>
