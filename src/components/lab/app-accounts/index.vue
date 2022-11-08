<template lang="pug">
section.accounts(v-if="accounts[0]")
  h2 {{ $t('view.home.cache')}}
  draggable(
    :list="accounts"
    ghost-class="ghost"
    handle=".handle"
    @start="dragging = true"
    @end="dragging = false"
  )
    p.account(
      v-for="(account, key) in accounts"
      :class="{ 'active' : account.s_active }"
      :aria-checked="account.s_active"
      @click="toggleAccount(account); activeAccount($event)"
    )
      app-flag.handle(:type="account.s_lang")
      span.name {{ account.s_name }}
      span.date {{ account.s_time }}
      button.btn.delete.bullet.small.right(
        @click="removeAccount(key, account.s_local)"
        :aria-label="$t('aria-label.remove_account') + ' ' + account.s_name + ' ' + account.s_lang"
        type="button"
      )
        IconDelete
</template>

<script>
import { mixinUpdateStore } from '@/mixins/mixinUpdateStore.js'

import AppFlag from '@/components/lab/app-flag'
import IconDelete from '@/components/icons/icon-delete'

export default {
  name: 'app-accounts',
  mixins: [mixinUpdateStore],
  components: { AppFlag, IconDelete },
  created () { this.accountsRender() },
  data () {
    return {
      dragging: false
    }
  },
  methods: {
    toggleAccount (store) {
      this.$store.commit("updateUser", store.s_data)
      this.setLang(store.s_lang)
    },
    activeAccount (e) {
      let accounts = document.querySelectorAll('.account')
      if(accounts) {
        for(let item of accounts) {
          item.classList.remove('active')
        }
        e.target.classList.add('active')
      }
    },
    removeAccount (key, store) {
      if(window.confirm(this.$t('form.choice'))) {
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
    text-shadow 0 2px 1px rgba(0,0,0,0.4)
  p
    background #fff
    line-height 30px
    text-indent 10px
    text-align left
    padding 10px
    margin-bottom .5em
    border-radius 6px
    border 1px solid rgba(#000, .2)
    cursor pointer
    position relative
    *
      pointer-events none
    &:last-of-type
      margin-bottom 0
    &.active
      filter invert(1)
      background rgba(#fff, .4)
      .flag, button
        filter invert(1)
    .flag
      transform translate(-5px, 5px) scale(1.5)
    .name,
    .date
      position absolute
      z-index 9
    .name
      top 5px
      left 50px
    .date
      font-size 11px
      margin 0 3px
      opacity .6
      left 48px
      bottom -2px
    span,
    button
      display inline-block
    button
      pointer-events all
  .btn svg
    margin-right 0
    height 15px
    transform scale(.7)
+htmlDir()
  .accounts
    p
      text-align right
    .flag
      transform translate(5px, 5px) scale(1.5)
    .name,
    .date
      transform translateX(10px)
    .name
      left auto
      right 60px
    .date
      left auto
      right 58px
</style>
