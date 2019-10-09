<template lang="pug">
  label(for="GET-cep")
    p CEP:
    input#GET-cep(name="cep"
                  type="tel"
                  placeholder="00000-000"
                  maxlength="8"
                  :value="user.cep"
                  @input="updateVuex('updateCep', $event)"
                  @keyup="search_cep")
</template>

<script>
import axios from 'axios'
import { api } from '@/api'
import { mixinUpdateStore } from '@/mixins/mixinUpdateStore.js'

const HTTP = axios.create({ baseURL: api.viacep })

export default {
  name: 'input-cep',
  props: ['errors'],
  mixins: [mixinUpdateStore],
  methods: {
    search_cep (e) {
      if (e.target.value.length === 8) {
        HTTP.get(this.user.cep + '/json/')
        .then(response => {
          this.user.end = response.data
          this.updateStore()
        })
        .catch(e => {
          this.errors.push(e)
        })
      }
    }
  }
}
</script>
