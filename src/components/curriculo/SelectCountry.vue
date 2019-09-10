<template lang='pug'>
  label(for="GET-nationality" v-bind:class="{ error: !user.countrystatuss && errors.length }")
    p Nacionalidade:
    select#GET-nationality(name='nationality' v-on:mouseover.once="createdList" :value="user.countrystatus" @input="updateVuex('updateCountryStatus', $event)")
      option(value='') Seu país de origem
      option(v-for='(item, key) in countrys' :key='key') {{ item.country }}
</template>

<script>
import axios from 'axios'
import { url } from './api'
import { mixin } from '../../mixins/mixin.js'

const HTTP = axios.create({ baseURL: url })

export default {
  name: 'select-country',
  props: ['errors'],
  mixins: [mixin],
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
