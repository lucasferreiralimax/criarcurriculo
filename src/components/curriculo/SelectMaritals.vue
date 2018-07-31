<template lang="pug">
.select-maritals(v-bind:class="{ error: !user.maritalstatus && errors.length }")
  // Get the marital status
  p(v-bind:class="{ 'display-n-print': !user.maritalstatus }") Estado civil:

  label(for="GET-maritalstatus-s" v-bind:class="{ 'display-n-print': user.maritalstatus !== 's' }")
    input#GET-maritalstatus-s(name="maritalstatus" type="radio" value="s"  @input="updateVuex('updateMaritalStatus', $event)").display-n-print
    span(v-if="user.genero == ''") Solteiro(a)
    span(v-if="user.genero == 'h'") Solteiro
    span(v-if="user.genero == 'm'") Solteira

  label(for="GET-maritalstatus-c" v-bind:class="{ 'display-n-print': user.maritalstatus !== 'c'}")
    input#GET-maritalstatus-c(name="maritalstatus" type="radio" value="c"  @input="updateVuex('updateMaritalStatus', $event)").display-n-print
    span(v-if="user.genero == ''") Casado(a)
    span(v-if="user.genero == 'h'") Casado
    span(v-if="user.genero == 'm'") Casada

  label(for="GET-maritalstatus-d" v-bind:class="{ 'display-n-print': user.maritalstatus !== 'd'}")
    input#GET-maritalstatus-d(name="maritalstatus" type="radio" value="d"  @input="updateVuex('updateMaritalStatus', $event)").display-n-print
    span(v-if="user.genero == ''") Divorciado(a)
    span(v-if="user.genero == 'h'") Divorciado
    span(v-if="user.genero == 'm'") Divorciada

  label(for="GET-maritalstatus-v" v-bind:class="{ 'display-n-print': user.maritalstatus !== 'v'}")
    input#GET-maritalstatus-v(name="maritalstatus" type="radio" value="v"  @input="updateVuex('updateMaritalStatus', $event)").display-n-print
    span(v-if="user.genero == ''") Viúvo(a)
    span(v-if="user.genero == 'h'") Viúvo
    span(v-if="user.genero == 'm'") Viúva
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'select-maritals',
  props: ['errors'],
  computed: mapState({
    user: state => state.user
  }),
  methods: {
    updateVuex (name, e) {
      this.$store.commit(name, e.target.value)
      window.localStorage.setItem('store', JSON.stringify(this.user))
    }
  }
}
</script>
<style lang="stylus">
  .select-maritals .box
    padding padding 10px
</style>
