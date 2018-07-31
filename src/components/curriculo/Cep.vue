<template lang="pug">
  label(for="GET-cep" v-bind:class="{ error: !user.cep && err.length }")
    p CEP:
    input#GET-cep(name="cep" type="tel" maxlength="8" placeholder="00000-000" :value="user.cep" @keyup="search_cep" @input="updateVuex('updateCep', $event)")
</template>

<script>
import axios from 'axios'
import { mapState } from 'vuex'

const HTTP = axios.create({ baseURL: 'https://viacep.com.br/ws/' })

export default {
  name: 'cep',
  props: ['err'],
  computed: mapState({
    user: state => state.user
  }),
  data () {
    return {
      errors: []
    }
  },
  methods: {
    updateVuex (name, e) {
      if (e.target.value.length === 8) {
        this.$store.commit(name, e.target.value)
        window.localStorage.setItem('store', JSON.stringify(this.user))
      }
    },
    search_cep (e) {
      if (e.target.value.length === 8) {
        HTTP.get(this.user.cep + '/json/')
        .then(response => {
          this.user.end = response.data
        })
        .catch(e => {
          this.errors.push(e)
        })
      } else {
        this.user.end = {
          localidade: null,
          logradouro: null
        }
      }
    }
  }
}
</script>
