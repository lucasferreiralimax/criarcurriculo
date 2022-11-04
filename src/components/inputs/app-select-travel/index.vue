<template lang='pug'>
.radio
  p {{ $t('form.travel') }}:
  .row
    label(for="GET-travel-yes")
      input#GET-travel-yes(name="travel"
                          type="radio"
                          :checked="user.travel"
                          @input="updateVuex('updateTravel', true)")
      | {{ $t('form.yes') }}
    label(for="GET-travel-no")
      input#GET-travel-no(name="travel"
                          type="radio"
                          :checked="!user.travel"
                          @input="updateVuex('updateTravel', false)")
      | {{ $t('form.no') }}
</template>

<script>
import { mixinUpdateStore } from '@/mixins/mixinUpdateStore.js'

export default {
  name: 'app-select-travel',
  props: ['errors'],
  mixins: [mixinUpdateStore]
}
</script>

<style lang="stylus">
.radio .row label
  &[for="GET-travel-yes"]
  &[for="GET-travel-no"]
    width 50%
</style>
