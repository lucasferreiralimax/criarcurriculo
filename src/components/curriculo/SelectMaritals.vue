<template lang="pug">
.radio.select-maritals(v-bind:class="{ error: !user.maritalstatus && errors.length }")
  // Get the marital status
  p {{ $t('form.marital_status')}}:

  label(for="GET-maritalstatus-s" v-bind:class="{ 'display-n-print': user.maritalstatus !== 's' }")
    input#GET-maritalstatus-s(name="maritalstatus" type="radio" :value="$t('form.single')" @input="updateVuex('updateMaritalStatus', $event)" v-model="user.maritalstatus")
    span(v-if="user.genero == ''") {{ $t('form.single') }}
    span(v-if="user.genero == 'h'") {{ $t('form.single') }}
    span(v-if="user.genero == 'm'") {{ $t('form.single') }}

  label(for="GET-maritalstatus-c" v-bind:class="{ 'display-n-print': user.maritalstatus !== 'c'}")
    input#GET-maritalstatus-c(name="maritalstatus" type="radio" :value="$t('form.divorced')" @input="updateVuex('updateMaritalStatus', $event)" v-model="user.maritalstatus")
    span(v-if="user.genero == ''") {{ $t('form.divorced') }}
    span(v-if="user.genero == 'h'") {{ $t('form.divorced') }}
    span(v-if="user.genero == 'm'") {{ $t('form.divorced') }}

  label(for="GET-maritalstatus-d" v-bind:class="{ 'display-n-print': user.maritalstatus !== 'd'}")
    input#GET-maritalstatus-d(name="maritalstatus" type="radio" :value="$t('form.widowed')" @input="updateVuex('updateMaritalStatus', $event)" v-model="user.maritalstatus")
    span(v-if="user.genero == ''") {{ $t('form.widowed') }}
    span(v-if="user.genero == 'h'") {{ $t('form.widowed') }}
    span(v-if="user.genero == 'm'") {{ $t('form.widowed') }}

  label(for="GET-maritalstatus-v" v-bind:class="{ 'display-n-print': user.maritalstatus !== 'v'}")
    input#GET-maritalstatus-v(name="maritalstatus" type="radio" :value="$t('form.married')" @input="updateVuex('updateMaritalStatus', $event)" v-model="user.maritalstatus")
    span(v-if="user.genero == ''") {{ $t('form.married') }}
    span(v-if="user.genero == 'h'") {{ $t('form.married') }}
    span(v-if="user.genero == 'm'") {{ $t('form.married') }}
  p.error-msg(v-show="!user.maritalstatus && errors.length") {{ $t('form.errors.maritals') }}
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'select-maritals',
  props: ['errors'],
  computed: mapState({ user: state => state.user }),
  methods: {
    updateVuex (name, e) {
      this.$store.commit(name, e.target.value)
      window.localStorage.setItem('store', JSON.stringify(this.user))
    }
  }
}
</script>
