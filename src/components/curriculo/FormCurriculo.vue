<template lang="pug">
// Form get the data info person
form#curriculo(:class="{ renderActive: user.name}")
  .box
    fieldset
      legend(@click='toggleBox($event)') {{ $t('form.h1') }}
      .flexbox
        // Nome
        // Name
        label(for="GET-name" v-bind:class="{ error: !user.name && errors.length }")
          p {{ $t('form.name') }}
          input#GET-name(name="name" type="text" :placeholder="$t('form.name_place')" :value="user.name" @input="updateVuex('updateName', $event)")
          p.error-msg(v-show="!user.name && errors.length") {{ $t('form.errors.name') }}
        // Foto
        // Photo
        label(for="GET-photo")
          p {{ $t('form.photo') }}
          button.btn.delete.right.bullet.small.photo(type="button" @click="removeImage($event)" v-if="user.photo")
            i -
          input#GET-photo(name="photo" type="file" @input="setImage($event)")

        // Gênero
        // Genre
        .flexbox
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
        label(for="GET-about" v-bind:class="{ error: !user.about && errors.length }")
          p {{ $t('form.about_me') }}:
          textarea#GET-about(ref="GET_about" :placeholder="$t('form.about_place')" :value="user.about" @input="updatetextAreaHeight, updateVuex('updateAbout', $event)")
  .box.active
    fieldset
      legend(@click='toggleBox($event)') {{ $t('form.end') }}
      .flexbox
        // CEP
        // ZipCode
        .address
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
          p {{ $t('form.travel') }}:
          label(for="GET-travel-yes")
            input#GET-travel-yes(name="travel" type="checkbox" :checked="user.travel" @input="updateVuex('updateTravel', $event)")
            span {{ user.travel ? $t('form.yes') : $t('form.no') }}
  .box
    fieldset
      legend(@click='toggleBox($event)') {{ $t('form.contact') }}
      .flexbox
        // Telefone
        // Phone
        label.input__contato(v:for="'GET-telephone-'+ key" v-for="(telephone, key, index) in user.telephones")
          p {{ $t('form.phone') }}:
          input(:id="'GET-telephone'+ key" v:name="'telephone-'+ key" type="number" placeholder="(011)00000-0000" maxlength="15" pattern="\([0-9]{2}\) [0-9]{4,6}-[0-9]{3,4}$" @input="updateVuex('updateTelephone', $event)" v-model="user.telephones[key]")
          button.btn.delete.right.bullet.small(type="button" @click="removeTelephone(key)")
            i -
          button.btn.plus.right.bullet.small(type="button" @click="newTelephone(key)" v-scroll-to="'#GET-telephone-' + index")
            i +
        // Email
        // The E-mail
        label.input__contato(v:for="'GET-email'+ key" v-for="(email, key, index) in user.emails")
          p {{ $t('form.email') }}:
          input(:id="'GET-email'+ key" v:name="'email'+ key" type="email" :placeholder="$t('form.email_place')" @input="updateVuex('updateEmail', $event)" v-model="user.emails[key]")
          button.btn.delete.right.bullet.small(type="button" @click="removeEmail(key)")
            i -
          button.btn.plus.right.bullet.small(type="button" @click="newEmail(key)" v-scroll-to="'#GET-email-' + index")
            i +
        button.btn.plus(type="button" @click="newTelephone" v-scroll-to="'#GET-email-0'" v-if="user.telephones.length == 0")
          span +
          | Telefone
        button.btn.plus(type="button" @click="newEmail" v-scroll-to="'#GET-telephone-0'" v-if="user.emails.length == 0")
          span +
          | E-mail
  // Cursos
  // Coursers
  coursers-data(v-bind:errors="errors")

  // Experiências
  // Experiencies
  experiencies-data(v-bind:errors="errors")

  button#print.btn.left(type="button" v-on:click="printRender")
    svg(xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32")
      path(d="M10 24h10v2H10v-2zM8 2h16v4h2V2c0-1.103-.896-2-2-2H8C6.896 0 6 .896 6 2v4h2V2zm2 18h12v2H10v-2z")
      path(d="M30 8H2c-1.104 0-2 .896-2 2v12c0 1.105.896 2 2 2h4v6c0 1.105.896 2 2 2h16c1.104 0 2-.895 2-2v-6h4c1.104 0 2-.895 2-2V10c0-1.104-.897-2-2-2zm-6 22H8V18h16v12zm4-16c-1.104 0-2-.895-2-2 0-1.104.896-2 2-2s2 .896 2 2c0 1.105-.897 2-2 2z")
    | {{ $t('view.home.print') }}

  button#reset.btn.left.delete(type="button" v-on:click="resetForm")
    svg(xmlns="http://www.w3.org/2000/svg" viewBox="0 0 858 858")
      path(d="M162.2 858h533.7c11 0 20-9 20-20V283.2H142.2V838c0 11.1 8.9 20 20 20zm382-467.2c0-18 14.6-32.7 32.7-32.7h.699c18 0 32.7 14.6 32.7 32.7v359.7c0 18-14.6 32.699-32.7 32.699h-.699c-18 0-32.7-14.6-32.7-32.699V390.8zm-148.2 0c0-18 14.6-32.7 32.7-32.7h.7c18 0 32.699 14.6 32.699 32.7v359.7c0 18-14.6 32.699-32.699 32.699h-.7c-18 0-32.7-14.6-32.7-32.699V390.8zm-148.2 0c0-18 14.601-32.7 32.7-32.7h.7c18 0 32.7 14.6 32.7 32.7v359.7c0 18-14.601 32.699-32.7 32.699h-.7c-18 0-32.7-14.6-32.7-32.699V390.8zM556.9 95V50c0-27.6-22.4-50-50-50H351.1c-27.6 0-50 22.4-50 50v45h40V60c0-11 9-20 20-20h135.7c11 0 20 9 20 20v35h40.1zM117.2 155v68.2c0 11 9 20 20 20h583.6c11 0 20-9 20-20V155c0-11-9-20-20-20H137.2c-11 0-20 8.9-20 20z")
    | Apagar Tudo!
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
    toggleBox (e) { e.target.parentElement.classList.toggle('active') },
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
        console.log(e.target.value)
      } else if(name == 'updateEmail') {
        this.$store.commit(name, this.user.emails)
        console.log(e.target.value)
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
      console.log(this.user)
    },
    removeTelephone (key) {
      this.$delete(this.user.telephones, key)
      this.$store.commit("updateTelephone", this.user.telephones)
      window.localStorage.setItem('store', JSON.stringify(this.user))
    },
    removeEmail (key) {
      this.$delete(this.user.emails, key)
      this.$store.commit("updateEmail", this.user.emails)
      window.localStorage.setItem('store', JSON.stringify(this.user))
    },
    setImage (e) {
      const file = e.target.files[0]
      console.log(file)

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
        emails: [null],
        exps: [],
        coursers: []
      }
      this.$store.commit('updateUser', user)
      window.localStorage.setItem('store', JSON.stringify(user))
    },
    printRender () {
      this.errors = []
      if (!this.user.age) { this.errors.push('Precisa preencher o campo data de nascimento.') }
      if (!this.user.cep) { this.errors.push('Precisa preencher o campo cep.') }
      if (!this.user.end.localidade) { this.errors.push('Precisa preencher o campo localidade.') }
      if (!this.user.end.logradouro) { this.errors.push('Precisa preencher o campo logradouro.') }
      if (!this.user.genero) {this.errors.push('Precisa colocar seu genero.') }
      if (!this.user.maritalstatus) { this.errors.push('Precisa colocar seu estado civil.') }
      if (!this.user.name) { this.errors.push('Precisa preencher o campo nome.') }
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
