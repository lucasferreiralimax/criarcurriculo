<template lang="pug">
.radio.select-maritals(v-bind:class="{ error: !user.maritalstatus && errors.length }")
  // Get the marital status
  p {{ $t('form.marital_status')}}:

  label(for="GET-maritalstatus-s" v-bind:class="{ 'display-n-print': user.maritalstatus !== 's' }")
    input#GET-maritalstatus-s(v-if="user.genero == '' || user.genero == 'u'" name="maritalstatus" type="radio" :value="$t('form.single')" @input="updateVuex('updateMaritalStatus', $event)" v-model="user.maritalstatus")
    input#GET-maritalstatus-s(v-if="user.genero == 'h'" name="maritalstatus" type="radio" :value="$t('form.single_m')" @input="updateVuex('updateMaritalStatus', $event)" v-model="user.maritalstatus")
    input#GET-maritalstatus-s(v-if="user.genero == 'm'" name="maritalstatus" type="radio" :value="$t('form.single_w')" @input="updateVuex('updateMaritalStatus', $event)" v-model="user.maritalstatus")
    span(v-if="user.genero == '' || user.genero == 'u'") {{ $t('form.single') }}
    span(v-if="user.genero == 'h'") {{ $t('form.single_m') }}
    span(v-if="user.genero == 'm'") {{ $t('form.single_w') }}

  label(for="GET-maritalstatus-c" v-bind:class="{ 'display-n-print': user.maritalstatus !== 'c'}")
    input#GET-maritalstatus-c(v-if="user.genero == '' || user.genero == 'u'" name="maritalstatus" type="radio" :value="$t('form.divorced')" @input="updateVuex('updateMaritalStatus', $event)" v-model="user.maritalstatus")
    input#GET-maritalstatus-c(v-if="user.genero == 'h'" name="maritalstatus" type="radio" :value="$t('form.divorced_m')" @input="updateVuex('updateMaritalStatus', $event)" v-model="user.maritalstatus")
    input#GET-maritalstatus-c(v-if="user.genero == 'm'" name="maritalstatus" type="radio" :value="$t('form.divorced_w')" @input="updateVuex('updateMaritalStatus', $event)" v-model="user.maritalstatus")
    span(v-if="user.genero == '' || user.genero == 'u'") {{ $t('form.divorced') }}
    span(v-if="user.genero == 'h'") {{ $t('form.divorced_m') }}
    span(v-if="user.genero == 'm'") {{ $t('form.divorced_w') }}

  label(for="GET-maritalstatus-d" v-bind:class="{ 'display-n-print': user.maritalstatus !== 'd'}")
    input#GET-maritalstatus-d(v-if="user.genero == '' || user.genero == 'u'" name="maritalstatus" type="radio" :value="$t('form.widowed')" @input="updateVuex('updateMaritalStatus', $event)" v-model="user.maritalstatus")
    input#GET-maritalstatus-d(v-if="user.genero == 'h'" name="maritalstatus" type="radio" :value="$t('form.widowed_m')" @input="updateVuex('updateMaritalStatus', $event)" v-model="user.maritalstatus")
    input#GET-maritalstatus-d(v-if="user.genero == 'm'" name="maritalstatus" type="radio" :value="$t('form.widowed_w')" @input="updateVuex('updateMaritalStatus', $event)" v-model="user.maritalstatus")
    span(v-if="user.genero == '' || user.genero == 'u'") {{ $t('form.widowed') }}
    span(v-if="user.genero == 'h'") {{ $t('form.widowed_m') }}
    span(v-if="user.genero == 'm'") {{ $t('form.widowed_w') }}

  label(for="GET-maritalstatus-v" v-bind:class="{ 'display-n-print': user.maritalstatus !== 'v'}")
    input#GET-maritalstatus-v(v-if="user.genero == '' || user.genero == 'u'" name="maritalstatus" type="radio" :value="$t('form.married')" @input="updateVuex('updateMaritalStatus', $event)" v-model="user.maritalstatus")
    input#GET-maritalstatus-v(v-if="user.genero == 'h'" name="maritalstatus" type="radio" :value="$t('form.married_m')" @input="updateVuex('updateMaritalStatus', $event)" v-model="user.maritalstatus")
    input#GET-maritalstatus-v(v-if="user.genero == 'm'" name="maritalstatus" type="radio" :value="$t('form.married_w')" @input="updateVuex('updateMaritalStatus', $event)" v-model="user.maritalstatus")
    span(v-if="user.genero == '' || user.genero == 'u'") {{ $t('form.married') }}
    span(v-if="user.genero == 'h'") {{ $t('form.married_m') }}
    span(v-if="user.genero == 'm'") {{ $t('form.married_w') }}
  p.error-msg(v-show="!user.maritalstatus && errors.length") {{ $t('form.errors.maritals') }}
</template>

<script>
import { mixinUpdateStore } from '../../mixins/mixinUpdateStore.js'

export default {
  name: 'select-maritals',
  props: ['errors'],
  mixins: [mixinUpdateStore],
}
</script>
