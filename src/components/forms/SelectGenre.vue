<template lang='pug'>
  label(for="GET-genero")
    | {{ $t('form.genre')}}
    select#GET-genero(name='genero' :value="user.genero" @input="updateVuex('updateGenero', $event)" :class="{ error: !user.genero && errors ? errors.length : false }")
      option(value='') {{ $t('form.select_genre') }}
      option(value='m') {{ $t('form.woman') }}
      option(value='h') {{ $t('form.man') }}
      option(value='u') {{ $t('form.unisex') }}
    p.error-msg(v-if="!user.genero && errors ? errors.length : false") {{ $t('form.errors.genre') }}
</template>

<script>
import { mixinUpdateStore } from '@/mixins/mixinUpdateStore.js'

export default {
  name: 'select-genre',
  props: ['errors'],
  mixins: [mixinUpdateStore]
}
</script>
