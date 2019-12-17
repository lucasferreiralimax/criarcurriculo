<template lang="pug">
section.accounts(v-if="accounts.length !== 0")
  h2 {{ $t('view.home.cache')}}
  p(v-for="(account, key) in accounts" @click="toggleAccount(account)") {{ account.s_name }}
    button(@click="removeAccount(key, account.s_local)" class="btn delete bullet small right" type="button") X
</template>

<script>
import { loadLanguageAsync } from '@/i18n'
import { mixinUpdateStore } from '@/mixins/mixinUpdateStore.js'

export default {
  name: 'accounts',
  mixins: [mixinUpdateStore],
  created () {
    this.accountsRender()
  },
  methods: {
    toggleAccount (store) {
      this.$store.commit("updateUser", store.s_data)
      loadLanguageAsync(store.s_lang)
      localStorage.setItem('locale', store.s_lang)
    },
    removeAccount (key, store) {
      this.$delete(this.accounts, key)
      localStorage.removeItem(`${store}`)
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
    padding 10px
    margin-bottom 1em
    border-radius 6px
    cursor pointer
    &:last-of-type
      margin-bottom 0

</style>
