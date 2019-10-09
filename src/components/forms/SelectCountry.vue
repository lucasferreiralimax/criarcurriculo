<template lang='pug'>
  label(for="GET-nationality")
    p Nacionalidade:
    select#GET-nationality(name='nationality' v-on:mouseover.once="createdList" :value="user.countrystatus" @input="updateVuex('updateCountryStatus', $event)")
      option(value='') Seu país de origem
      option(v-for='(item, key) in countrys' :key='key') {{ item.country }}
</template>

<script>
import axios from 'axios'
import { api } from '@/api'
import { mixinUpdateStore } from '@/mixins/mixinUpdateStore.js'

const HTTP = axios.create({ baseURL: api.firebase })

export default {
  name: 'select-country',
  props: ['errors'],
  mixins: [mixinUpdateStore],
  data () {
    return {
      erros: [],
      countrys: [],
      countrystatus: ''
    }
  },
  methods: {
    createdList () {
      HTTP.get(`countrys.json`)
      .then(response => {
        this.countrys = response.data
        this.updateStore()
      })
      .catch(e => {
        this.errors.push(e)
      })
    }
  }
}
</script>
