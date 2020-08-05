<template lang="pug">
section.accounts(v-if="accounts.length !== 0")
  h2 {{ $t('view.home.cache')}}
  draggable(:list="accounts"
    ghost-class="ghost"
    handle=".handle"
    @start="dragging = true"
    @end="dragging = false")
    p(v-for="(account, key) in accounts" @click="toggleAccount(account)")
      flag.flag.handle(:type="account.s_lang")
      span.name {{ account.s_name }}
      span.date {{ account.s_time }}
      button(@click="removeAccount(key, account.s_local)" class="btn delete bullet small right" type="button" :aria-label="$t('aria-label.remove_account') + ' ' + account.s_name + ' ' + account.s_lang")
        svg(viewBox="0 0 329.269 329" xmlns="http://www.w3.org/2000/svg")
          path(d="M194.8 164.77L323.013 36.555c8.343-8.34 8.343-21.825 0-30.164-8.34-8.34-21.825-8.34-30.164 0L164.633 134.605 36.422 6.391c-8.344-8.34-21.824-8.34-30.164 0-8.344 8.34-8.344 21.824 0 30.164l128.21 128.215L6.259 292.984c-8.344 8.34-8.344 21.825 0 30.164a21.266 21.266 0 0015.082 6.25c5.46 0 10.922-2.09 15.082-6.25l128.21-128.214 128.216 128.214a21.273 21.273 0 0015.082 6.25c5.46 0 10.922-2.09 15.082-6.25 8.343-8.34 8.343-21.824 0-30.164zm0 0")
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
  data () {
    return {
      dragging: false
    }
  },
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
    text-shadow 0 2px 1px rgba(0,0,0,0.4)
  p
    background #fff
    line-height 30px
    text-indent 10px
    text-align left
    padding 10px
    margin-bottom .5em
    border-radius 6px
    cursor pointer
    position relative
    &:last-of-type
      margin-bottom 0
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
  .btn svg
    margin-right 0
    height 15px
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
