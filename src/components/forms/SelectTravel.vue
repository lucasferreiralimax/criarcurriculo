<template lang='pug'>
  .radio
    p {{ $t('form.travel') }}:
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
  name: 'select-travel',
  props: ['errors'],
  mixins: [mixinUpdateStore]
}
</script>
