<template lang="pug">
section.accounts(v-if="accounts.length !== 0")
  h2 Currículo salvo
  p(v-for="(account, key) in accounts" @click="toggleAccount(account)") {{ account.name }}
    button(@click="removeAccount(key, account.store)" class="btn delete bullet small right" type="button") X
</template>

<script>
import { mixinUpdateStore } from '@/mixins/mixinUpdateStore.js'

export default {
  name: 'accounts',
  mixins: [mixinUpdateStore],
  data () {
    return {
      accounts: []
    }
  },
  created () {
    let local = localStorage

    for(let obj in local) {
      if(/store/.test(obj)) {
        let store = JSON.parse(local[obj])
        if(store.name) {
          this.accounts.push({
            "name": store.name,
            "store_name": obj,
            "store_data": store
          })
        }
      }
    }
    console.log(this.accounts)
  },
  methods: {
    toggleAccount (store) {
      console.log(store)
      this.$store.commit("updateUser", store.store_data)
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
