<template lang="pug">
label(for="GET-cep")
  p CEP:
  input#GET-cep(
    name="cep"
    type="tel"
    placeholder="00000-000"
    maxlength="9"
    :value="user.cep"
    v-mask="'#####-###'"
    @keyup="search_cep"
  )
</template>

<script>
import { api } from '@/api'
import { mixinUpdateStore } from '@/mixins/mixinUpdateStore.js'

export default {
  name: 'app-input-cep',
  props: ['errors'],
  mixins: [mixinUpdateStore],
  data () {
    return {
      error: []
    }
  },
  methods: {
    search_cep (e) {
      if (e.target.value.length === 9) {
        fetch(`${api.viacep}${e.target.value.replace(/\D+/g, '')}/json`)
          .then(response => response.json())
          .then(response => {
            this.user.end = response
            if(response.data.erro) {
              this.$store.commit('updateErrors', [])
              this.error = []
              this.error.push(this.$t('form.errors.cep_invalid'))
              this.$store.commit('updateErrors', this.error)
            } else {
              this.error = []
              this.$store.commit('updateErrors', [])
            }
            this.updateStore()
          })
          .catch(e => {
            this.$store.commit('updateErrors', [])
            this.error = []
            this.error.push(`${this.$t('form.errors.cep_erro')} - ${e}`)
            this.$store.commit('updateErrors', this.error)
          })
      }
    }
  }
}
</script>
