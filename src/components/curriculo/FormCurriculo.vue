<template lang="pug">
// Form get the data info person
form#curriculo(:class="{ renderActive: user.name}")
  .box
    fieldset
      legend(@click='toggleBox($event)') {{ $t('form.h1') }}
      .flexbox
        // Get the name
        label(for="GET-name" v-bind:class="{ error: !user.name && errors.length }")
          p {{ $t('form.name') }}
          input#GET-name(name="name" type="text" :placeholder="$t('form.name_place')" :value="user.name" @input="updateVuex('updateName', $event)")

        // Get the data of birth
        label(for="GET-genero" v-bind:class="{ error: !user.genero && errors.length }")
          p {{ $t('form.genre')}}
          select#GET-genero(name='genero' :value="user.genero" @input="updateVuex('updateGenero', $event)")
            option(value='') {{ $t('form.select_genre')}}
            option(value='m') {{ $t('form.woman')}}
            option(value='h') {{ $t('form.man')}}

        select-maritals(v-bind:errors="errors")

        // Get the data of birth
        label(for="GET-dataofbirth" v-bind:class="{ error: !user.age && errors.length }")
          p {{ $t('form.born')}}
          input#GET-dataofbirth(name="dataofbirth" type="number" min="13" :value="user.age" @input="updateVuex('updateAge', $event)")

        // Get the About
        label(for="GET-about" v-bind:class="{ error: !this.user.about && errors.length }")
          p {{ $t('form.about')}}:
          textarea#GET-about(ref="GET_about" :placeholder="$t('form.about_place')" :value="user.about" @input="updatetextAreaHeight, updateVuex('updateAbout', $event)")

  .box.active
    fieldset
      legend(@click='toggleBox($event)') {{ $t('form.end')}}
      .flexbox
        // Get the CEP
        .address
          cep(v-bind:err="errors")

        label(for="GET-address-number" v-bind:class="{ error: !user.addressNumber && errors.length }")
          p  {{ $t('form.number')}}
          input#GET-address-number(name="address-number" type="number" :placeholder="$t('form.number_place')" :value="user.addressNumber" @input="updateVuex('updateAddressNumber', $event)")

        // Get the Address
        label(for="GET-address")
          p  {{ $t('form.end')}}:
          input#GET-address(name="address" type="text" :placeholder="$t('form.end_place')" :value="user.end.logradouro")

        // Get the State
        label(for="GET-state")
          p  {{ $t('form.city')}}
          input#GET-state(name="state" type="text" :placeholder="$t('form.city_place')" :value="user.end.localidade")

        .radio(v-bind:class="{ 'error': !user.travel && errors.length }")
          p {{ $t('form.travel')}}:

          label(for="GET-travel-yes")
            input#GET-travel-yes(name="travel" type="radio" value="yes" :value="user.travel" @input="updateVuex('updateTravel', $event)")
            span {{ $t('form.yes')}}

          label(for="GET-travel-no")
            input#GET-travel-no(name="travel" type="radio" value="no" :value="user.travel" @input="updateVuex('updateTravel', $event)")
            span {{ $t('form.no')}}
  .box
    fieldset
      legend(@click='toggleBox($event)') {{ $t('form.contact')}}
      .flexbox
        // Get the Address
        label(for="GET-telephone" v-bind:class="{ error: !this.user.telephone && errors.length }")
          p {{ $t('form.phone')}}:
          input#GET-telephone(name="telephone" type="tel" placeholder="(011)00000-0000" maxlength="15" pattern="\([0-9]{2}\) [0-9]{4,6}-[0-9]{3,4}$" :value="user.telephone" @input="updateVuex('updateTelephone', $event)")

        // Get the E-mail
        label(for="GET-email" v-bind:class="{ error: !this.user.email && errors.length }")
          p {{ $t('form.email')}}:
          input#GET-email(name="email" type="email" :placeholder="$t('form.email_place')" :value="user.email" @input="updateVuex('updateEmail', $event)")

  coursers-data(v-bind:errors="errors")
  experiencies-data(v-bind:errors="errors")

  button.btn.left(type="button" v-on:click="print")
    svg(xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32")
      path(d="M10 24h10v2H10v-2zM8 2h16v4h2V2c0-1.103-.896-2-2-2H8C6.896 0 6 .896 6 2v4h2V2zm2 18h12v2H10v-2z")
      path(d="M30 8H2c-1.104 0-2 .896-2 2v12c0 1.105.896 2 2 2h4v6c0 1.105.896 2 2 2h16c1.104 0 2-.895 2-2v-6h4c1.104 0 2-.895 2-2V10c0-1.104-.897-2-2-2zm-6 22H8V18h16v12zm4-16c-1.104 0-2-.895-2-2 0-1.104.896-2 2-2s2 .896 2 2c0 1.105-.897 2-2 2z")
    | {{ $t('actions.print') }}
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
    updatetextAreaHeight () {
      this.$refs.GET_about.style.height = this.$refs.GET_about.scrollHeight + 'px'
      console.log('test..mixin')
    }
  }
})

export default {
  name: 'form-curriculo',
  computed: mapState({
    user: state => state.user
  }),
  data () {
    return {
      form: this,
      errors: []
    }
  },
  created () {
    console.log('Erros: ' + (this.errors ? 'nenhum...' : this.erros))
  },
  mounted () {
    document.querySelector('.footer').classList.add('home')
  },
  destroyed () {
    document.querySelector('.footer').classList.remove('home')
  },
  methods: {
    print (e) {
      console.log('Clickou para imprimir!')

      this.errors = [[], 0]

      if (!this.user.name) {
        this.errors[0].push('Precisa preencher o campo nome.')
      }

      if (!this.user.genero) {
        this.errors[0].push('Precisa colocar seu genero.')
      }

      // if (!this.user.countrystatus) {
      //   this.errors[0].push('Precisa colocar sua Nacionalidade.')
      // }

      if (!this.user.maritalstatus) {
        this.errors[0].push('Precisa colocar seu estado civil.')
      }

      if (!this.user.age) {
        this.errors[0].push('Precisa preencher o campo data de nascimento.')
      }

      if (!this.user.cep) {
        this.errors[0].push('Precisa preencher o campo cep.')
      }

      if (!this.user.addressNumber) {
        this.errors[0].push('Precisa preencher o campo número.')
      }

      if (!this.user.travel) {
        this.errors[0].push('Precisa colocar se está disponível para viagem.')
      }

      if (!this.user.telephone) {
        this.errors[0].push('Precisa preencher o campo de telefone.')
      }

      if (!this.user.email) {
        this.errors[0].push('Precisa preencher o campo de email.')
      }

      e.preventDefault()

      console.log(this.errors, "erros")

      if(!this.errors[0].length) {
        let scroll_end = (document.querySelector('#app').clientHeight - document.querySelector('#app').parentElement.offsetHeight)
        document.querySelector('.render').classList.remove('active', 'fixed', 'fixedFooter')
        window.print()
        document.querySelector('.render').classList.add('active', 'fixed', 'fixedFooter')
        window.scrollTo(0, scroll_end)
      } else {
        window.scrollTo(0, 600)
      }
    },
    toggleBox (e) {
      e.srcElement.parentElement.classList.toggle('active')
    },
    updateVuex (name, e) {
      this.$store.commit(name, e.target.value)
      window.localStorage.setItem('store', JSON.stringify(this.user))
    }
  }
}
</script>
