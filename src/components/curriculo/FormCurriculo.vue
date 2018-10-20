<template lang="pug">
// Form get the data info person
form#curriculo(:class="{ renderActive: user.name}")
  .box
    fieldset
      legend
        svg.icon(xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="20")
          path(d="M414.007 148.75c5.522 0 10-4.477 10-10V30c0-16.542-13.458-30-30-30h-364c-16.542 0-30 13.458-30 30v452c0 16.542 13.458 30 30 30h364c16.542 0 30-13.458 30-30v-73.672c0-5.523-4.478-10-10-10s-10 4.477-10 10V482c0 5.514-4.486 10-10 10h-364c-5.514 0-10-4.486-10-10V30c0-5.514 4.486-10 10-10h364c5.514 0 10 4.486 10 10v108.75c0 5.523 4.478 10 10 10z")
          path(d="M212.007 54c-50.729 0-92 41.271-92 92 0 26.317 11.11 50.085 28.882 66.869.333.356.687.693 1.074 1 16.371 14.979 38.158 24.13 62.043 24.13 23.885 0 45.672-9.152 62.043-24.13a9.993 9.993 0 0 0 1.074-1c17.774-16.784 28.884-40.552 28.884-66.869 0-50.729-41.271-92-92-92zm0 164c-16.329 0-31.399-5.472-43.491-14.668 8.789-15.585 25.19-25.332 43.491-25.332s34.702 9.747 43.491 25.332C243.405 212.528 228.336 218 212.007 218zm-16-76v-6.5c0-8.822 7.178-16 16-16s16 7.178 16 16v6.5c0 8.822-7.178 16-16 16s-16-7.178-16-16zm73.94 46.683a69.375 69.375 0 0 0-29.463-24.697c4.71-6.087 7.523-13.712 7.523-21.986v-6.5c0-19.851-16.149-36-36-36s-36 16.149-36 36v6.5c0 8.274 2.813 15.899 7.523 21.986a69.375 69.375 0 0 0-29.463 24.697c-8.829-11.953-14.06-26.716-14.06-42.683 0-39.701 32.299-72 72-72s72 32.299 72 72c0 15.967-5.231 30.73-14.06 42.683zM266.007 438h-54c-5.522 0-10 4.477-10 10s4.478 10 10 10h54c5.522 0 10-4.477 10-10s-4.478-10-10-10zM266.007 382h-142c-5.522 0-10 4.477-10 10s4.478 10 10 10h142c5.522 0 10-4.477 10-10s-4.478-10-10-10zM266.007 326h-142c-5.522 0-10 4.477-10 10s4.478 10 10 10h142c5.522 0 10-4.477 10-10s-4.478-10-10-10zM88.366 272.93a10.077 10.077 0 0 0-7.079-2.93c-2.631 0-5.211 1.07-7.07 2.93-1.86 1.86-2.93 4.44-2.93 7.07s1.069 5.21 2.93 7.07a10.092 10.092 0 0 0 7.07 2.93c2.64 0 5.21-1.07 7.079-2.93 1.86-1.86 2.931-4.44 2.931-7.07s-1.07-5.21-2.931-7.07zM88.366 328.93a10.095 10.095 0 0 0-7.079-2.93c-2.631 0-5.2 1.07-7.07 2.93-1.86 1.86-2.93 4.44-2.93 7.07s1.069 5.21 2.93 7.07a10.092 10.092 0 0 0 7.07 2.93c2.64 0 5.21-1.07 7.079-2.93 1.86-1.86 2.931-4.44 2.931-7.07s-1.07-5.21-2.931-7.07zM88.366 384.93a10.095 10.095 0 0 0-7.079-2.93c-2.631 0-5.2 1.07-7.07 2.93-1.86 1.86-2.93 4.44-2.93 7.07s1.069 5.21 2.93 7.07a10.072 10.072 0 0 0 7.07 2.93c2.64 0 5.22-1.07 7.079-2.93 1.86-1.86 2.931-4.44 2.931-7.07s-1.07-5.21-2.931-7.07zM266.007 270h-142c-5.522 0-10 4.477-10 10s4.478 10 10 10h142c5.522 0 10-4.477 10-10s-4.478-10-10-10zM491.002 130.32c-9.715-5.609-21.033-7.099-31.871-4.196-10.836 2.904-19.894 9.854-25.502 19.569L307.787 363.656a10.016 10.016 0 0 0-1.278 3.891l-8.858 79.344a10.004 10.004 0 0 0 9.937 11.11 9.99 9.99 0 0 0 5.931-1.948l64.284-47.344a9.983 9.983 0 0 0 2.73-3.052l125.841-217.963c11.58-20.056 4.684-45.794-15.372-57.374zM320.063 426.394l4.626-41.432 28.942 16.71-33.568 24.722zm48.15-39.398l-38.105-22 100.985-174.91 38.105 22-100.985 174.91zm120.841-209.303l-9.857 17.073-38.105-22 9.857-17.073a21.855 21.855 0 0 1 13.358-10.25 21.85 21.85 0 0 1 16.694 2.198 21.855 21.855 0 0 1 10.25 13.358 21.856 21.856 0 0 1-2.197 16.694z")
        span {{ $t('form.h1') }}
        // Nome
      // Name
      label(for="GET-name" v-bind:class="{ error: !user.name && errors.length }")
        p {{ $t('form.name') }}
        input#GET-name(name="name" type="text" :placeholder="$t('form.name_place')" :value="user.name" @input="updateVuex('updateName', $event)")
        p.error-msg(v-show="!user.name && errors.length") {{ $t('form.errors.name') }}
      // Foto
      // Photo
      label(for="GET-photo")
        .right
          button.btn.delete.bullet.small.photo.left(type="button" @click="removeImage($event)" v-if="user.photo")
            i -
        p {{ $t('form.photo') }}
        input#GET-photo(name="photo" type="file" @input="setImage($event)")

      // Gênero
      // Genre
      label(for="GET-genero" v-bind:class="{ error: !user.genero && errors.length }")
        p {{ $t('form.genre')}}
        select#GET-genero(name='genero' :value="user.genero" @input="updateVuex('updateGenero', $event)")
          option(value='') {{ $t('form.select_genre') }}
          option(value='m') {{ $t('form.woman') }}
          option(value='h') {{ $t('form.man') }}
        p.error-msg(v-show="!user.genero && errors.length") {{ $t('form.errors.genre') }}
      // Data de nascimento
      // Data of birth
      label(for="GET-dataofbirth" v-bind:class="{ error: !user.age && errors.length }")
        p {{ $t('form.born') }}
        input#GET-dataofbirth(name="dataofbirth" type="number" min="13" :value="user.age" @input="updateVuex('updateAge', $event)")
        p.error-msg(v-show="!user.age && errors.length") {{ $t('form.errors.age') }}

      // Estado Civil
      // Maristals
      select-maritals(v-bind:errors="errors")

      // Sobre
      // About
      label(for="GET-about")
        p {{ $t('form.about_me') }}:
        textarea#GET-about(ref="GET_about" :placeholder="$t('form.about_place')" :value="user.about" @input="updatetextAreaHeight, updateVuex('updateAbout', $event)")
  .box(v-if="user.telephones.length !== 0")
    // Telefone
    // Phone
    label.input__contato(:for="'GET-telephone-'+ key" v-for="(telephone, key, index) in user.telephones" v-bind:class="{ error: !user.telephones[key] && errors.length }")
      .right
        button.btn.delete.bullet.small.left(type="button" @click="removeTelephone(key)" v-show="key !== 0")
          i -
        button.btn.plus.bullet.small.left(type="button" @click="newTelephone(key)" v-scroll-to="'#GET-telephone-' + index")
          i +
      p {{ $t('form.phone') }}:
      input(:id="'GET-telephone-'+ key" v:name="'telephone-'+ key" type="number" placeholder="(011)00000-0000" maxlength="15" pattern="\([0-9]{2}\) [0-9]{4,6}-[0-9]{3,4}$" @input="updateVuex('updateTelephone', $event)" v-model="user.telephones[key]")
      p.error-msg(v-show="!user.telephones[key] && errors.length") {{ $t('form.errors.phone') }}
  .box(v-if="user.emails.length !== 0")
    // Email
    // The E-mail
    label.input__contato(:for="'GET-email-'+ key" v-for="(email, key, index) in user.emails" v-bind:class="{ error: !user.emails[key] && errors.length }")
      .right
        button.btn.delete.bullet.small.left(type="button" @click="removeEmail(key)")
          i -
        button.btn.plus.bullet.small.left(type="button" @click="newEmail(key)" v-scroll-to="'#GET-email-' + index")
          i +
      p {{ $t('form.email') }}:
      input(:id="'GET-email-'+ key" v:name="'email'+ key" type="email" :placeholder="$t('form.email_place')" @input="updateVuex('updateEmail', $event)" v-model="user.emails[key]")
      p.error-msg(v-show="!user.emails[key] && errors.length") {{ $t('form.errors.email') }}
  .box(v-if="user.emails.length == 0")
    button#newEmail.btn.plus.large(type="button" @click="newEmail" v-scroll-to="'#GET-telephone-0'")
      span +
      | E-mail
  .box
    fieldset
      legend
        svg.icon(xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.002 512.002" width="20")
          path(d="M502.001 492.002h-44v-79c0-5.523-4.478-10-10-10s-10 4.477-10 10v79h-120v-190c0-5.523-4.478-10-10-10h-104c-5.522 0-10 4.477-10 10v190h-120V266.001h3.848c2.652 0 5.195-1.054 7.071-2.929L256.001 91.991l171.081 171.081a10.003 10.003 0 0 0 7.071 2.929h3.848v75c0 5.523 4.478 10 10 10s10-4.477 10-10v-75h44a10.001 10.001 0 0 0 7.071-17.071l-246-246c-3.906-3.905-10.236-3.905-14.143 0l-94 94c-3.905 3.905-3.905 10.237 0 14.142 3.906 3.906 10.238 3.906 14.143 0l86.929-86.929 221.857 221.858h-39.563L263.072 70.778c-3.906-3.905-10.236-3.905-14.143 0L73.706 246.001H34.143l78.929-78.928c3.905-3.905 3.905-10.237 0-14.143-3.905-3.904-10.237-3.905-14.143 0l-96 96a10.002 10.002 0 0 0 7.072 17.071h44v226h-44c-5.522 0-10 4.477-10 10s4.478 10 10 10h492c5.522 0 10-4.477 10-10s-4.478-9.999-10-9.999zm-204 0h-84v-180h84v180z")
          path(d="M406.001 292.002h-56c-5.522 0-10 4.477-10 10v100c0 5.523 4.478 10 10 10h56c5.522 0 10-4.477 10-10v-100c0-5.523-4.478-10-10-10zm-10 100h-36v-80h36v80zM162.001 292.002h-56c-5.522 0-10 4.477-10 10v100c0 5.523 4.478 10 10 10h56c5.522 0 10-4.477 10-10v-100c0-5.523-4.478-10-10-10zm-10 100h-36v-80h36v80zM256.001 164.322c-25.364 0-46 20.636-46 46s20.636 46 46 46 46-20.636 46-46-20.636-46-46-46zm0 72c-14.337 0-26-11.664-26-26s11.663-26 26-26 26 11.664 26 26-11.663 26-26 26zM244.07 394.932a10.073 10.073 0 0 0-7.069-2.93c-2.63 0-5.21 1.07-7.07 2.93-1.86 1.86-2.93 4.44-2.93 7.07s1.069 5.21 2.93 7.07c1.861 1.86 4.44 2.93 7.07 2.93s5.21-1.07 7.069-2.93c1.86-1.86 2.931-4.44 2.931-7.07s-1.07-5.21-2.931-7.07zM140.07 125.932c-1.859-1.86-4.439-2.93-7.069-2.93s-5.21 1.07-7.07 2.93c-1.86 1.86-2.93 4.44-2.93 7.07s1.069 5.21 2.93 7.07c1.861 1.86 4.44 2.93 7.07 2.93s5.21-1.07 7.069-2.93c1.86-1.86 2.931-4.44 2.931-7.07s-1.07-5.21-2.931-7.07zM455.07 367.261a10.078 10.078 0 0 0-7.069-2.93c-2.63 0-5.21 1.07-7.07 2.93-1.86 1.87-2.93 4.44-2.93 7.07s1.069 5.21 2.93 7.08c1.86 1.86 4.44 2.92 7.07 2.92s5.21-1.06 7.069-2.92a10.1 10.1 0 0 0 2.931-7.08c0-2.63-1.07-5.21-2.931-7.07z")
        span {{ $t('form.end') }}
      // CEP
      // ZipCode
      cep(v-bind:errors="errors")
      // Número do Lar
      // Adress Number
      label(for="GET-address-number")
        p  {{ $t('form.number') }}
        input#GET-address-number(name="address-number" type="number" :placeholder="$t('form.number_place')" :value="user.addressNumber" @input="updateVuex('updateAddressNumber', $event)")

      // O Endereço
      // The Address
      label(for="GET-address" v-bind:class="{ error: !user.end.logradouro && errors.length }")
        p  {{ $t('form.end') }}:
        input#GET-address(name="address" type="text" :placeholder="$t('form.end_place')" :value="user.end.logradouro" @input="updateVuex('updateEndLogradouro', $event)")
        p.error-msg(v-show="!user.end.logradouro && errors.length") {{ $t('form.errors.end') }}
      // Estado
      // State
      label(for="GET-state" v-bind:class="{ error: !user.end.localidade && errors.length }")
        p  {{ $t('form.city') }}
        input#GET-state(name="state" type="text" :placeholder="$t('form.city_place')" :value="user.end.localidade" @input="updateVuex('updateEndLocalidade', $event)")
        p.error-msg(v-show="!user.end.localidade && errors.length") {{ $t('form.errors.city') }}
      // Viagem
      // Travel
      .radio
        label(for="GET-travel-yes")
          p {{ $t('form.travel') }}:
        label(for="GET-travel-yes")
          input#GET-travel-yes(name="travel" type="checkbox" :checked="user.travel" @input="updateVuex('updateTravel', $event)")
          span {{ user.travel ? $t('form.yes') : $t('form.no') }}
  // Cursos
  // Coursers
  coursers-data(v-bind:errors="errors")

  // Experiências
  // Experiencies
  experiencies-data(v-bind:errors="errors")

  .text-center
    button#reset.btn.delete(type="button" v-on:click="resetForm")
      svg(xmlns="http://www.w3.org/2000/svg" viewBox="0 0 858 858")
        path(d="M162.2 858h533.7c11 0 20-9 20-20V283.2H142.2V838c0 11.1 8.9 20 20 20zm382-467.2c0-18 14.6-32.7 32.7-32.7h.699c18 0 32.7 14.6 32.7 32.7v359.7c0 18-14.6 32.699-32.7 32.699h-.699c-18 0-32.7-14.6-32.7-32.699V390.8zm-148.2 0c0-18 14.6-32.7 32.7-32.7h.7c18 0 32.699 14.6 32.699 32.7v359.7c0 18-14.6 32.699-32.699 32.699h-.7c-18 0-32.7-14.6-32.7-32.699V390.8zm-148.2 0c0-18 14.601-32.7 32.7-32.7h.7c18 0 32.7 14.6 32.7 32.7v359.7c0 18-14.601 32.699-32.7 32.699h-.7c-18 0-32.7-14.6-32.7-32.699V390.8zM556.9 95V50c0-27.6-22.4-50-50-50H351.1c-27.6 0-50 22.4-50 50v45h40V60c0-11 9-20 20-20h135.7c11 0 20 9 20 20v35h40.1zM117.2 155v68.2c0 11 9 20 20 20h583.6c11 0 20-9 20-20V155c0-11-9-20-20-20H137.2c-11 0-20 8.9-20 20z")
      | {{ $t('view.home.delete') }}
    button#print.btn(type="button" v-on:click="printRender")
      svg(xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32")
        path(d="M10 24h10v2H10v-2zM8 2h16v4h2V2c0-1.103-.896-2-2-2H8C6.896 0 6 .896 6 2v4h2V2zm2 18h12v2H10v-2z")
        path(d="M30 8H2c-1.104 0-2 .896-2 2v12c0 1.105.896 2 2 2h4v6c0 1.105.896 2 2 2h16c1.104 0 2-.895 2-2v-6h4c1.104 0 2-.895 2-2V10c0-1.104-.897-2-2-2zm-6 22H8V18h16v12zm4-16c-1.104 0-2-.895-2-2 0-1.104.896-2 2-2s2 .896 2 2c0 1.105-.897 2-2 2z")
      | {{ $t('view.home.print') }}
</template>

<script>
import Vue from 'vue'
import { mapState } from 'vuex'
import Cep from '@/components/curriculo/Cep'
import SelectCountry from '@/components/curriculo/SelectCountry'
import SelectMaritals from '@/components/curriculo/SelectMaritals'
import Experiencies from '@/components/curriculo/Experiencies'
import Coursers from '@/components/curriculo/Coursers'

Vue.component('cep', Cep)
Vue.component('select-country', SelectCountry)
Vue.component('select-maritals', SelectMaritals)
Vue.component('experiencies-data', Experiencies)
Vue.component('coursers-data', Coursers)

Vue.mixin({
  methods: {
    updatetextAreaHeight () { this.$refs.GET_about.style.height = this.$refs.GET_about.scrollHeight + 'px' }
  }
})

export default {
  name: 'form-curriculo',
  computed: mapState({ user: state => state.user }),
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

      if(!store) {
        console.log("store clear")
      } else {
        store = JSON.parse(store)
        console.log(store)
        this.$store.commit("updateUser", store)
        console.log("store update")
      }
    },
    updateVuex (name, e) {
      if(name == 'updateTravel') {
        this.$store.commit(name, e.target.checked)
      } else if(name == 'updateGenero') {
        this.$store.commit(name, e.target.value)
        this.$store.commit('updateMaritalStatus', '')
      } else if(name == 'updateTelephone') {
        this.$store.commit(name, this.user.telephones)
      } else if(name == 'updateEmail') {
        this.$store.commit(name, this.user.emails)
      } else {
        this.$store.commit(name, e.target.value)
      }
      window.localStorage.setItem('store', JSON.stringify(this.user))
    },
    newTelephone () {
      this.user.telephones.push(null)
      this.$store.commit("updateTelephone", this.user.telephones)
    },
    newEmail () {
      this.user.emails.push(null)
      this.$store.commit("updateEmail", this.user.emails)
    },
    removeTelephone (key) {
      if(key !== 0) {
        this.$delete(this.user.telephones, key)
        this.$store.commit("updateTelephone", this.user.telephones)
        window.localStorage.setItem('store', JSON.stringify(this.user))
      }
    },
    removeEmail (key) {
      this.$delete(this.user.emails, key)
      this.$store.commit("updateEmail", this.user.emails)
      window.localStorage.setItem('store', JSON.stringify(this.user))
    },
    setImage (e) {
      const file = e.target.files[0]

      if (!file.type.includes('image/')) {
        alert('Please select an image file')
        return
      }

      if (typeof FileReader === 'function') {
        const reader = new FileReader()

        reader.onload = (event) => {
          this.imgSrc = event.target.result
          this.$store.commit('updatePhoto', this.imgSrc)
          window.localStorage.setItem('store', JSON.stringify(this.user))
        }
        reader.readAsDataURL(file)
      } else {
        alert('Sorry, FileReader API not supported')
      }
    },
    removeImage () {
      this.$store.commit('updatePhoto', '')
      document.querySelector('#GET-photo').value = ''
      window.localStorage.setItem('store', JSON.stringify(this.user))
    },
    resetForm () {
      let user = {
        name: 'Nome',
        photo: '',
        age: null,
        countrystatus: '',
        cep: null,
        end: {
          localidade: '',
          logradouro: '',
          complemento: '',
          uf: '',
          bairro: '',
          cep: ''
        },
        maritalstatus: '',
        addressNumber: null,
        travel: false,
        about: null,
        genero: '',
        telephones: [null],
        emails: [],
        exps: [],
        coursers: []
      }
      if(window.confirm("Tem certeza?")) {
        this.$store.commit('updateUser', user)
        window.localStorage.setItem('store', JSON.stringify(user))
        this.errors = []
      }
    },
    printRender () {
      this.errors = []
      if (!this.user.age) { this.errors.push('Precisa preencher o campo data de nascimento.') }
      if (!this.user.end.localidade) { this.errors.push('Precisa preencher o campo localidade.') }
      if (!this.user.end.logradouro) { this.errors.push('Precisa preencher o campo logradouro.') }
      if (!this.user.genero) {this.errors.push('Precisa colocar seu genero.') }
      if (!this.user.maritalstatus) { this.errors.push('Precisa colocar seu estado civil.') }
      if (!this.user.name) { this.errors.push('Precisa preencher o campo nome.') }
      if (this.user.telephones.length) {
        for(let i = 0; this.user.telephones.length > i; i++) {
          if (!this.user.telephones[i]) { this.errors.push('Precisa preencher o campo de telefone') }
        }
      }
      if (this.user.emails.length) {
        for(let i = 0; this.user.emails.length > i; i++) {
          if (!this.user.emails[i]) { this.errors.push('Precisa preencher o campo de e-mail') }
        }
      }
      if (this.user.exps.length) {
        for(let i = 0; this.user.exps.length > i; i++) {
          if (!this.user.exps[i].experience.name) { this.errors.push('Precisa preencher o campo nome da empresa') }
          if (!this.user.exps[i].experience.work) { this.errors.push('Precisa preencher o campo nome do cargo') }
        }
      }
      if (this.user.coursers.length) {
        for(let i = 0; this.user.coursers.length > i; i++) {
          if (!this.user.coursers[i].formation.name) { this.errors.push('Precisa preencher o campo nome da instituição') }
          if (!this.user.coursers[i].formation.school) { this.errors.push('Precisa preencher o campo nome do curso') }
        }
      }
      if(!this.errors.length) {
        let scroll_end = (document.querySelector('#app').clientHeight - document.querySelector('#app').parentElement.offsetHeight)
        document.querySelector('.render').classList.remove('active', 'fixed', 'fixedFooter')
        window.print()
        document.querySelector('.render').classList.add('active', 'fixed', 'fixedFooter')
        window.scrollTo(0, scroll_end)
      } else {
        window.scrollTo(0, 600)
      }
    }
  }
}
</script>
