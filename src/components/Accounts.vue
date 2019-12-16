<template lang="pug">
section.accounts(v-if="accounts.length !== 0")
  h2 Currículo salvo
  p(v-for="(account, key) in accounts" @click="updateAccount(key)") {{ account.name }}
    button(@click="removeAccount(key)" class="btn delete bullet small right" type="button") X
</template>

<script>
import { mixinUpdateStore } from '@/mixins/mixinUpdateStore.js'

export default {
  name: 'accounts',
  mixins: [mixinUpdateStore],
  data () {
    return {
      accounts: [
        {
          name: 'Lucas'
        },
        {
          name: 'Mohamed'
        }
      ]
    }
  },
  created () {
    // console.log(localStorage.getItem(`store-${document.documentElement.lang}`))
  },
  methods: {
    removeAccount ( key) {
      this.$delete(this.accounts, key)
      this.updateStore()
    }
  }
}
</script>

<style lang="stylus">
.accounts
  background transparent
  padding 1em
  max-width 300px
  margin 0 auto
  h2
    color #fff
    font-size 1em
    margin-bottom 1em
    text-align center
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
