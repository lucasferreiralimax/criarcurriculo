<template lang="pug">
  div
    label.input__contato(:for="`GET-${name}-` + key" v-for="(email, key, index) in user[value]" v-bind:class="{ error: !user[value][key] && errors ? errors.length : false }")
      .right
        button.btn.delete.bullet.small.left(type="button" @click="removeInput(value, key)" :aria-label="$t('aria-label.email_remove')")
          i -
        button.btn.plus.bullet.small.left(type="button" @click="newInput(value, vuex)" :aria-label="$t('aria-label.email_add_new')")
          i +
      | {{ $t(`form.${translate}`) }}:
      input(:id="`GET-${name}-` + key" :name="`${name}-` + key" :type="type" :placeholder="$t(`form.${translate}_place`)" @input="updateVuex(vuex, $event)" v-model="user[value][key]")
      p.error-msg(v-if="!user[value][key] && errors ? errors.length : false") {{ $t(`form.errors.${translate}`) }}
</template>

<script>
import { mixinUpdateStore } from '../../mixins/mixinUpdateStore.js'

export default {
  name: 'input-crud',
  props: ['name', 'value', 'type', 'vuex', 'translate', 'errors'],
  mixins: [mixinUpdateStore]
}
</script>
