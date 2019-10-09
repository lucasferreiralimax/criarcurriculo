<template lang="pug">
// Form get the data info person
form#curriculo(:class="{ renderActive: user.name}")
  // Box Personal
  box-curriculo(title="true" type="personal" translate="h1")
    input-app(name="name" value="name" type="text" translate="name" vuex="updateName" :errors="errors")
    input-photo
    select-genre(:errors="errors")
    input-app(name="dataofbirth" value="age" type="number" translate="age" vuex="updateAge" :errors="errors")
    select-maritals(:errors="errors")
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
    input-cep(v-bind:errors="errors")
    input-app(name="address-number" value="addressNumber" type="text" translate="number" vuex="updateAddressNumber")
    input-app(name="address" :value="{ parent: 'end', child: 'logradouro'}" type="text" translate="end" vuex="updateEndLogradouro" :errors="errors")
    input-app(name="state" :value="{ parent: 'end', child: 'localidade'}" type="text" translate="city" vuex="updateEndLocalidade" :errors="errors")
    select-travel(:errors="errors")

  // Coursers
  coursers(:errors="errors")

  // Experiencies
  experiencies(:errors="errors")

  // Actions
  .text-center
    button#reset.btn.delete(type="button" v-on:click="resetForm" :aria-label="$t('aria-label.delete_form')")
      svg(xmlns="http://www.w3.org/2000/svg" viewBox="0 0 858 858")
        path(d="M162.2 858h533.7c11 0 20-9 20-20V283.2H142.2V838c0 11.1 8.9 20 20 20zm382-467.2c0-18 14.6-32.7 32.7-32.7h.699c18 0 32.7 14.6 32.7 32.7v359.7c0 18-14.6 32.699-32.7 32.699h-.699c-18 0-32.7-14.6-32.7-32.699V390.8zm-148.2 0c0-18 14.6-32.7 32.7-32.7h.7c18 0 32.699 14.6 32.699 32.7v359.7c0 18-14.6 32.699-32.699 32.699h-.7c-18 0-32.7-14.6-32.7-32.699V390.8zm-148.2 0c0-18 14.601-32.7 32.7-32.7h.7c18 0 32.7 14.6 32.7 32.7v359.7c0 18-14.601 32.699-32.7 32.699h-.7c-18 0-32.7-14.6-32.7-32.699V390.8zM556.9 95V50c0-27.6-22.4-50-50-50H351.1c-27.6 0-50 22.4-50 50v45h40V60c0-11 9-20 20-20h135.7c11 0 20 9 20 20v35h40.1zM117.2 155v68.2c0 11 9 20 20 20h583.6c11 0 20-9 20-20V155c0-11-9-20-20-20H137.2c-11 0-20 8.9-20 20z")
      | {{ $t('view.home.delete') }}
    button#print.btn(type="button" v-on:click="printRender" :aria-label="$t('aria-label.print_curriculum')")
      svg(xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32")
        path(d="M10 24h10v2H10v-2zM8 2h16v4h2V2c0-1.103-.896-2-2-2H8C6.896 0 6 .896 6 2v4h2V2zm2 18h12v2H10v-2z")
        path(d="M30 8H2c-1.104 0-2 .896-2 2v12c0 1.105.896 2 2 2h4v6c0 1.105.896 2 2 2h16c1.104 0 2-.895 2-2v-6h4c1.104 0 2-.895 2-2V10c0-1.104-.897-2-2-2zm-6 22H8V18h16v12zm4-16c-1.104 0-2-.895-2-2 0-1.104.896-2 2-2s2 .896 2 2c0 1.105-.897 2-2 2z")
      | {{ $t('view.home.print') }}
</template>

<script>
import { mixinUpdateStore } from '@/mixins/mixinUpdateStore.js'
import { mixinRender } from '@/mixins/mixinRender.js'

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
  mixins: [mixinUpdateStore, mixinRender],
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
      form: this,
      errors: []
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
