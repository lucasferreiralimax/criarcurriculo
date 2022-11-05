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
      svg.icon-phone(xmlns="http://www.w3.org/2000/svg" viewBox="0 0 348.077 348.077" width="13")
        path(d="M340.273 275.083l-53.755-53.761c-10.707-10.664-28.438-10.34-39.518.744l-27.082 27.076a792.327 792.327 0 0 1-5.344-2.973c-17.102-9.476-40.509-22.464-65.14-47.113-24.704-24.701-37.704-48.144-47.209-65.257-1.003-1.813-1.964-3.561-2.913-5.221l18.176-18.149 8.936-8.947c11.097-11.1 11.403-28.826.721-39.521L73.39 8.194c-10.682-10.68-28.421-10.356-39.518.744l-15.15 15.237.414.411c-5.08 6.482-9.325 13.958-12.484 22.02C3.74 54.28 1.927 61.603 1.098 68.941-6 127.785 20.89 181.564 93.866 254.541c100.875 100.868 182.167 93.248 185.674 92.876 7.638-.913 14.958-2.738 22.397-5.627 7.992-3.122 15.463-7.361 21.941-12.43l.331.294 15.348-15.029c11.074-11.098 11.393-28.83.716-39.542z")
      span +
      | {{ $t('form.phone') }}
  // Box Email
  app-box(v-if="user.emails.length !== 0")
    app-input-crud(name="email" value="emails" type="email" translate="email" vuex="updateEmail" :errors="errors")
  app-box(v-if="user.emails.length == 0")
    button#newEmail.btn.plus.large(type="button" @click="newInput('emails', 'updateEmail')" :aria-label="$t('aria-label.email_add')")
      svg.icon-email(xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="13")
        path(d="M467 61H45C20.218 61 0 81.196 0 106v300c0 24.72 20.128 45 45 45h422c24.72 0 45-20.128 45-45V106c0-24.72-20.128-45-45-45zm-6.214 30L256.954 294.833 51.359 91h409.427zM30 399.788V112.069l144.479 143.24L30 399.788zM51.213 421l144.57-144.57 50.657 50.222c5.864 5.814 15.327 5.795 21.167-.046L317 277.213 460.787 421H51.213zM482 399.787L338.213 256 482 112.212v287.575z")
      span +
      | {{ $t('form.email') }}
  // Box Site
  app-box(v-if="user.sites.length !== 0")
    app-input-crud(name="site" value="sites" type="text" translate="site" vuex="updateSite" :errors="errors")
  app-box(v-if="user.sites.length == 0")
    button#newSite.btn.plus.large(type="button" @click="newInput('sites', 'updateSite')" :aria-label="$t('aria-label.site_add')")
      svg.icon-site(xmlns="http://www.w3.org/2000/svg" viewBox="0 0 438.536 438.536" width="13")
        path(d="M414.41 24.123C398.333 8.042 378.963 0 356.315 0H82.228C59.58 0 40.21 8.042 24.126 24.123 8.045 40.207.003 59.576.003 82.225v274.084c0 22.647 8.042 42.018 24.123 58.102 16.084 16.084 35.454 24.126 58.102 24.126h274.084c22.648 0 42.018-8.042 58.095-24.126 16.084-16.084 24.126-35.454 24.126-58.102V82.225c-.001-22.649-8.043-42.021-24.123-58.102zm-48.961 204.279c0 7.994-3.717 13.606-11.136 16.844-2.471.951-4.859 1.427-7.139 1.427-5.134 0-9.418-1.811-12.847-5.424l-41.11-41.112-152.453 152.462c-3.621 3.614-7.9 5.425-12.85 5.425-4.952 0-9.235-1.811-12.851-5.425l-29.121-29.126c-3.617-3.61-5.426-7.901-5.426-12.847 0-4.944 1.809-9.229 5.426-12.843l152.462-152.464-41.113-41.112c-5.902-5.52-7.233-12.178-3.999-19.985 3.234-7.421 8.852-11.136 16.846-11.136h137.037c4.948 0 9.232 1.81 12.854 5.428 3.613 3.614 5.421 7.898 5.421 12.847v137.041z")
      span +
      | {{ $t('form.site') }}
  // Box Language
  app-box(v-if="user.languages.length !== 0")
    app-input-crud(name="language" value="languages" type="text" translate="language" vuex="updateLanguage" language="true" :errors="errors")
  app-box(v-if="user.languages.length == 0")
    button#newLanguage.btn.plus.large(type="button" @click="newInput('languages', 'updateLanguage')" :aria-label="$t('aria-label.language_add')")
      svg.icon-language(viewBox="-21 -47 682.667 682" width="13" xmlns="http://www.w3.org/2000/svg")
        path(d="M552.012-1.332H87.988C39.473-1.332 0 38.133 0 86.656V370.63c0 48.414 39.3 87.816 87.676 87.988V587.48l185.191-128.863h279.145c48.515 0 87.988-39.472 87.988-87.988V86.656c0-48.523-39.473-87.988-87.988-87.988zm50.488 371.96c0 27.837-22.648 50.49-50.488 50.49h-290.91l-135.926 94.585v-94.586H87.988c-27.84 0-50.488-22.652-50.488-50.488V86.656c0-27.843 22.648-50.488 50.488-50.488h464.024c27.84 0 50.488 22.645 50.488 50.488zm0 0")
        path(d="M171.293 131.172h297.414v37.5H171.293zm0 0M171.293 211.172h297.414v37.5H171.293zm0 0M171.293 291.172h297.414v37.5H171.293zm0 0")
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

export default {
  name: 'form-curriculo',
  mixins: [mixinUpdateStore],
  computed: mapState({ errors: state => state.errors }),
  components: {
    AppBox,
    AppInput, AppInputCep,
    AppInputCrud, AppInputPhoto,
    AppCourses, AppExperiencies,
    AppSelectHobby, AppSelectTravel,
    AppSelectGenre, AppSelectMaritals,
    AppTextarea, AppNotificationAlert
  },
  created () {
    this.setLocalStore()
    this.accountsRender()
  }
}
</script>
