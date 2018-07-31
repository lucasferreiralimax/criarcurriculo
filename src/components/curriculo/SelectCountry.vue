<template lang='pug'>
  label(for="GET-nationality" v-bind:class="{ error: !user.countrystatuss && errors.length }")
    p.text.text-left Nacionalidade:
    select#GET-nationality(name='nationality' v-on:mouseover.once="createdList" :value="user.countrystatus" @input="updateVuex('updateCountryStatus', $event)")
      option(value='') Seu país de origem
      option(v-for='(item, key) in countrys' :key='key') {{ item.country }}
</template>

<script>
import axios from 'axios'
import { mapState } from 'vuex'
import { url } from './api'

const HTTP = axios.create({ baseURL: url })

export default {
  name: 'select-country',
  props: ['errors'],
  computed: mapState({
    user: state => state.user
  }),
  data () {
    return {
      erros: [],
      countrys: [],
      countrystatus: ''
    }
  },
  methods: {
    updateVuex (name, e) {
      this.$store.commit(name, e.target.value)
      window.localStorage.setItem('store', JSON.stringify(this.user))
    },
    createdList () {
      HTTP.get(`countrys.json`)
      .then(response => {
        this.countrys = response.data
      })
      .catch(e => {
        this.errors.push(e)
      })
    }
  }
}
</script>
