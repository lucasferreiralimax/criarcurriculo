<template lang="pug">
// Form get the data info person
form#curriculo(:class="{ renderActive: user.name}")
  // Box Personal
  box-curriculo(title="true" type="personal" translate="h1")
    .row
      input-app(name="name" value="name" type="text" translate="name" vuex="updateName" :errors="errors")
      input-photo
    .row
      select-genre(:errors="errors")
      input-app(name="dataofbirth" value="age" type="number" translate="age" vuex="updateAge" :errors="errors")
    .row
      select-maritals(:errors="errors")
    .row
      textarea-app(name="about" value="about" translate="about" vuex="updateAbout")
  // Box Telephone
  box-curriculo(v-if="user.telephones.length !== 0")
    input-crud(name="telephone" value="telephones" type="number" translate="phone" vuex="updateTelephone" :errors="errors")
  box-curriculo(v-if="user.telephones.length == 0")
    button#newTelephone.btn.plus.large(type="button" @click="newInput('telephones', 'updateTelephone')" :aria-label="$t('aria-label.telephone_add')")
      span +
      | {{ $t('form.phone') }}
  // Box Email
  box-curriculo(v-if="user.emails.length !== 0")
    input-crud(name="email" value="emails" type="email" translate="email" vuex="updateEmail" :errors="errors")
  box-curriculo(v-if="user.emails.length == 0")
    button#newEmail.btn.plus.large(type="button" @click="newInput('emails', 'updateEmail')" :aria-label="$t('aria-label.email_add')")
      span +
      | {{ $t('form.email') }}
  // Box Site
  box-curriculo(v-if="user.sites.length !== 0")
    input-crud(name="site" value="sites" type="text" translate="site" vuex="updateSite" :errors="errors")
  box-curriculo(v-if="user.sites.length == 0")
    button#newSite.btn.plus.large(type="button" @click="newInput('sites', 'updateSite')" :aria-label="$t('aria-label.site_add')")
      span +
      | {{ $t('form.site') }}
  // Box Address
  box-curriculo(title="true" type="address" translate="end")
    .row
      input-cep(v-bind:errors="errors")
      input-app(name="address-number" value="addressNumber" type="text" translate="number" vuex="updateAddressNumber")
    .row
      input-app(name="address" :value="{ parent: 'end', child: 'logradouro'}" type="text" translate="end" vuex="updateEndLogradouro" :errors="errors")
    .row
      input-app(name="state" :value="{ parent: 'end', child: 'localidade'}" type="text" translate="city" vuex="updateEndLocalidade" :errors="errors")
    .row
      select-travel(:errors="errors")
  // Coursers
  coursers(:errors="errors")
  // Experiencies
  experiencies(:errors="errors")
</template>

<script>
import { mapState } from 'vuex'
import { mixinUpdateStore } from '@/mixins/mixinUpdateStore.js'

import BoxCurriculo from '@/components/curriculo/BoxCurriculo'
import Coursers from '@/components/curriculo/Coursers'
import Experiencies from '@/components/curriculo/Experiencies'
import InputApp from '@/components/forms/InputApp'
import InputCep from '@/components/forms/InputCep'
import InputCrud from '@/components/forms/InputCrud'
import InputPhoto from '@/components/forms/InputPhoto'
import SelectCountry from '@/components/forms/SelectCountry'
import SelectGenre from '@/components/forms/SelectGenre'
import SelectMaritals from '@/components/forms/SelectMaritals'
import SelectTravel from '@/components/forms/SelectTravel'
import TextareaApp from '@/components/forms/TextareaApp'

export default {
  name: 'form-curriculo',
  mixins: [mixinUpdateStore],
  computed: mapState({ errors: state => state.errors }),
  components: {
    BoxCurriculo,
    Coursers, Experiencies,
    InputApp, InputCep, InputCrud, InputPhoto,
    SelectCountry, SelectGenre, SelectMaritals, SelectTravel,
    TextareaApp
  },
  created () {
    this.setLocalStore()
  },
  mounted () { document.querySelector('.footer').classList.add('home') },
  destroyed () { document.querySelector('.footer').classList.remove('home') },
  data () {
    return {
      form: this
    }
  },
  methods: {
    setLocalStore () {
      let store = localStorage.getItem('store')

      if(store) {
        // Store Update
        store = JSON.parse(store)
        this.$store.commit("updateUser", store)
      }
    }
  }
}
</script>
