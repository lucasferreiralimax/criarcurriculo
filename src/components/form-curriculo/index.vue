<template lang="pug">
// Form get the data info person
form#curriculo(:class="{ renderActive: user.name}")
  slot
  // Box Personal
  app-box(title="true" type="personal" translate="h1")
    .row
      app-input(name="name" value="name" type="text" translate="name" vuex="updateName" :errors="errors")
      app-input-photo
    .row
      app-select-genre(:errors="errors")
      app-input(name="dataofbirth" value="age" type="number" translate="age" vuex="updateAge" :errors="errors")
    .row
      app-select-maritals(:errors="errors")
    .row
      app-textarea(name="about" value="about" translate="about" vuex="updateAbout")
    .row
      app-select-hobby(:errors="errors")
  // Box Telephone
  app-box(v-if="user.telephones.length !== 0")
    app-input-crud(name="telephone" value="telephones" type="tel" translate="phone" vuex="updateTelephone" :errors="errors")
  app-box(v-if="user.telephones.length == 0")
    button#newTelephone.btn.plus.large(type="button" @click="newInput('telephones', 'updateTelephone')" :aria-label="$t('aria-label.telephone_add')")
      IconPhone
      span +
      | {{ $t('form.phone') }}
  // Box Email
  app-box(v-if="user.emails.length !== 0")
    app-input-crud(name="email" value="emails" type="email" translate="email" vuex="updateEmail" :errors="errors")
  app-box(v-if="user.emails.length == 0")
    button#newEmail.btn.plus.large(type="button" @click="newInput('emails', 'updateEmail')" :aria-label="$t('aria-label.email_add')")
      IconEmail
      span +
      | {{ $t('form.email') }}
  // Box Site
  app-box(v-if="user.sites.length !== 0")
    app-input-crud(name="site" value="sites" type="text" translate="site" vuex="updateSite" :errors="errors")
  app-box(v-if="user.sites.length == 0")
    button#newSite.btn.plus.large(type="button" @click="newInput('sites', 'updateSite')" :aria-label="$t('aria-label.site_add')")
      IconSite
      span +
      | {{ $t('form.site') }}
  // Box Language
  app-box(v-if="user.languages.length !== 0")
    app-input-crud(name="language" value="languages" type="text" translate="language" vuex="updateLanguage" language="true" :errors="errors")
  app-box(v-if="user.languages.length == 0")
    button#newLanguage.btn.plus.large(type="button" @click="newInput('languages', 'updateLanguage')" :aria-label="$t('aria-label.language_add')")
      IconLangague
      span +
      | {{ $tc('form.language', 1) }}
  // Box Address
  app-box(title="true" type="address" translate="end")
    .row
      app-input-cep(v-bind:errors="errors")
      app-input(name="state" :value="{ parent: 'end', child: 'uf'}" type="text" translate="state" vuex="updateEndUF")
    .row
      app-input(name="country" :value="{ parent: 'end', child: 'localidade'}" type="text" translate="city" vuex="updateEndLocalidade" :errors="errors")
      app-input(name="address" :value="{ parent: 'end', child: 'logradouro'}" type="text" translate="end" vuex="updateEndLogradouro" :errors="errors")
    .row
      app-select-travel(:errors="errors")
  // Coursers
  app-courses(:errors="errors")
  // Experiencies
  app-experiencies(:errors="errors")
  app-notification-alert
</template>

<script>
import { mapState } from 'vuex'
import { mixinUpdateStore } from '@/mixins/mixinUpdateStore.js'

import AppBox from '@/components/lab/app-box'
import AppCourses from '@/components/lab/app-courses'
import AppExperiencies from '@/components/lab/app-experiencies'
import AppInput from '@/components/inputs/app-input'
import AppInputCep from '@/components/inputs/app-input-cep'
import AppInputCrud from '@/components/inputs/app-input-crud'
import AppInputPhoto from '@/components/inputs/app-input-photo'
import AppSelectGenre from '@/components/inputs/app-select-genre'
import AppSelectMaritals from '@/components/inputs/app-select-maritals'
import AppSelectHobby from '@/components/inputs/app-select-hobby'
import AppSelectTravel from '@/components/inputs/app-select-travel'
import AppTextarea from '@/components/inputs/app-textarea'
import AppNotificationAlert from '@/components/lab/app-notification-alert'

import IconLangague from '@/components/icons/icon-language'
import IconSite from '@/components/icons/icon-site'
import IconEmail from '@/components/icons/icon-email'
import IconPhone from '@/components/icons/icon-phone'

export default {
  name: 'form-curriculo',
  mixins: [mixinUpdateStore],
  computed: mapState({ errors: state => state.errors }),
  components: {
    AppBox,
    AppInput,
    AppInputCep,
    AppInputCrud,
    AppInputPhoto,
    AppCourses,
    AppExperiencies,
    AppSelectHobby,
    AppSelectTravel,
    AppSelectGenre,
    AppSelectMaritals,
    AppTextarea,
    AppNotificationAlert,
    IconLangague,
    IconSite,
    IconEmail,
    IconPhone
  },
  created () {
    this.setLocalStore()
    this.accountsRender()
  }
}
</script>
