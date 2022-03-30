<template lang='pug'>
  label(for="GET-genero")
    | {{ $t('form.genre')}}:
    el-select#GET-genero(name='genero'
                      :class="{ error: !user.genero && errors ? errors.length : false }"
                      :value="user.genero"
                      @input="updateVuex('updateGenero', $event)")
      el-option(value='' :label="this.$t('form.select_genre')") {{ $t('form.select_genre') }}
      el-option(value='m' :label="this.$t('form.woman')") {{ $t('form.woman') }}
      el-option(value='h' :label="this.$t('form.man')") {{ $t('form.man') }}
      el-option(value='u' :label="this.$t('form.unisex')") {{ $t('form.unisex') }}
    p.error-msg(v-if="!user.genero && errors ? errors.length : false")
      | {{ $t('form.errors.genre') }}
</template>

<script>
import { mixinUpdateStore } from '@/mixins/mixinUpdateStore.js'

export default {
  name: 'select-genre',
  props: ['errors'],
  mixins: [mixinUpdateStore]
}
</script>
