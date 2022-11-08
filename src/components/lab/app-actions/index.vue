<template lang="pug">
.curriculo-actions.text-center
  slot
  button#reset.btn.delete(type="button" v-on:click="resetForm" :aria-label="$t('aria-label.delete_form')")
    IconTrash
    | {{ $t('view.home.delete') }}
  button#print.btn(type="button" v-on:click="printRender" :aria-label="$t('aria-label.print_curriculum')")
    IconPrint
    | {{ $t('view.home.print') }}
</template>
<script>
import { mixinUpdateStore } from '@/mixins/mixinUpdateStore.js'
import { mixinRender } from '@/mixins/mixinRender.js'

import IconTrash from '@/components/icons/icon-trash'
import IconPrint from '@/components/icons/icon-print'

export default {
  name: 'app-actions',
  mixins: [mixinUpdateStore, mixinRender],
  components: { IconTrash, IconPrint }
}
</script>
