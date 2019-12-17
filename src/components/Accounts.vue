<template lang="pug">
section.accounts(v-if="accounts.length !== 0")
  h2 {{ $t('view.home.cache')}}
  p(v-for="(account, key) in accounts" @click="toggleAccount(account)")
    flag.flag(:type="account.s_lang")
    | {{ account.s_name }}
    span {{ account.s_time }}
    button(@click="removeAccount(key, account.s_local)" class="btn delete bullet small right" type="button" :aria-label="$t('aria-label.remove_account') + ' ' + account.s_name + ' ' + account.s_lang") X
</template>

<script>
import { loadLanguageAsync } from '@/i18n'
import { mixinUpdateStore } from '@/mixins/mixinUpdateStore.js'

import Flag from '@/components/Flag'

export default {
  name: 'accounts',
  mixins: [mixinUpdateStore],
  components: { Flag },
  created () { this.accountsRender() },
  methods: {
    toggleAccount (store) {
      this.$store.commit("updateUser", store.s_data)
      loadLanguageAsync(store.s_lang)
      localStorage.setItem('locale', store.s_lang)
    },
    removeAccount (key, store) {
      if(window.confirm("Tem certeza?")) {
        this.$delete(this.accounts, key)
        localStorage.removeItem(`${store}`)
      }
    }
  }
}
</script>

<style lang="stylus">
.accounts
  background transparent
  padding 0 0 1em
  margin 0 auto
  h2
    color #fff
    font-size 1em
    margin-bottom 1em
  p
    background #fff
    line-height 30px
    text-indent 10px
    text-align left
    padding 10px
    margin-bottom 1em
    border-radius 6px
    cursor pointer
    &:last-of-type
      margin-bottom 0
    .flag
      transform translate(-5px, 5px)
    span
      font-size 11px
      margin 0 3px
      opacity .6
    span,
    button
      display inline-block
+htmlDir()
  .flag
    transform translate(5px, 5px)
</style>
