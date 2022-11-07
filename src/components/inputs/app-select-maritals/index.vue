<template lang="pug">
.radio.select-maritals(:class="{ error: !user.maritalstatus && errors ? errors.length : false }")
  // Get the marital status
  p {{ $t('form.marital_status')}}:
  .row
    label(for="GET-maritalstatus-s" v-bind:class="{ 'display-n-print': user.maritalstatus !== 's' }")
      input#GET-maritalstatus-s(
        name="maritalstatus"
        type="radio"
        v-model="user.maritalstatus"
        :value="(user.genero == 'h') ? $t('form.single_m') : (user.genero == 'm') ? $t('form.single_w') : $t('form.single')"
        @input="updateVuex('updateMaritalStatus', $event)"
      )
      span {{ (user.genero == 'h') ? $t('form.single_m') : (user.genero == 'm') ? $t('form.single_w') : $t('form.single') }}

    label(for="GET-maritalstatus-c" v-bind:class="{ 'display-n-print': user.maritalstatus !== 'c'}")
      input#GET-maritalstatus-c(
        name="maritalstatus"
        type="radio"
        v-model="user.maritalstatus"
        :value="(user.genero == 'h') ? $t('form.divorced_m') : (user.genero == 'm') ? $t('form.divorced_w') : $t('form.divorced')"
        @input="updateVuex('updateMaritalStatus', $event)"
      )
      span {{ (user.genero == 'h') ? $t('form.divorced_m') : (user.genero == 'm') ? $t('form.divorced_w') : $t('form.divorced') }}
  .row
    label(for="GET-maritalstatus-d" v-bind:class="{ 'display-n-print': user.maritalstatus !== 'd'}")
      input#GET-maritalstatus-d(
        name="maritalstatus"
        type="radio"
        v-model="user.maritalstatus"
        :value="(user.genero == 'h') ? $t('form.widowed_m') : (user.genero == 'm') ? $t('form.widowed_w') : $t('form.widowed')"
        @input="updateVuex('updateMaritalStatus', $event)"
      )
      span {{ (user.genero == 'h') ? $t('form.widowed_m') : (user.genero == 'm') ? $t('form.widowed_w') : $t('form.widowed') }}

    label(for="GET-maritalstatus-v" v-bind:class="{ 'display-n-print': user.maritalstatus !== 'v'}")
      input#GET-maritalstatus-v(
        name="maritalstatus"
        type="radio"
        v-model="user.maritalstatus"
        :value="(user.genero == 'h') ? $t('form.married_m') : (user.genero == 'm') ? $t('form.married_w') : $t('form.married')"
        @input="updateVuex('updateMaritalStatus', $event)"
      )
      span {{ (user.genero == 'h') ? $t('form.married_m') : (user.genero == 'm') ? $t('form.married_w') : $t('form.married') }}
  p.error-msg(v-if="!user.maritalstatus && errors.length")
    | {{ $t('form.errors.maritals') }}
</template>

<script>
import { mixinUpdateStore } from '@/mixins/mixinUpdateStore.js'

export default {
  name: 'app-select-maritals',
  props: ['errors'],
  mixins: [mixinUpdateStore],
}
</script>
