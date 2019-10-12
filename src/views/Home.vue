<template lang="pug">
  section.home.content
    .mark.text-center
      h2 {{ $t('view.home.text1') }}
      h2#start {{ $t('view.home.text2') }}
    .container
      form-curriculo
      render
      // Actions
      .curriculo-actions.text-center
        button#reset.btn.delete(type="button" v-on:click="resetForm" :aria-label="$t('aria-label.delete_form')")
          svg(xmlns="http://www.w3.org/2000/svg" viewBox="0 0 858 858")
            path(d="M162.2 858h533.7c11 0 20-9 20-20V283.2H142.2V838c0 11.1 8.9 20 20 20zm382-467.2c0-18 14.6-32.7 32.7-32.7h.699c18 0 32.7 14.6 32.7 32.7v359.7c0 18-14.6 32.699-32.7 32.699h-.699c-18 0-32.7-14.6-32.7-32.699V390.8zm-148.2 0c0-18 14.6-32.7 32.7-32.7h.7c18 0 32.699 14.6 32.699 32.7v359.7c0 18-14.6 32.699-32.699 32.699h-.7c-18 0-32.7-14.6-32.7-32.699V390.8zm-148.2 0c0-18 14.601-32.7 32.7-32.7h.7c18 0 32.7 14.6 32.7 32.7v359.7c0 18-14.601 32.699-32.7 32.699h-.7c-18 0-32.7-14.6-32.7-32.699V390.8zM556.9 95V50c0-27.6-22.4-50-50-50H351.1c-27.6 0-50 22.4-50 50v45h40V60c0-11 9-20 20-20h135.7c11 0 20 9 20 20v35h40.1zM117.2 155v68.2c0 11 9 20 20 20h583.6c11 0 20-9 20-20V155c0-11-9-20-20-20H137.2c-11 0-20 8.9-20 20z")
          | {{ $t('view.home.delete') }}
        button#print.btn(type="button" v-on:click="printRender" :aria-label="$t('aria-label.print_curriculum')")
          svg(xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32")
            path(d="M10 24h10v2H10v-2zM8 2h16v4h2V2c0-1.103-.896-2-2-2H8C6.896 0 6 .896 6 2v4h2V2zm2 18h12v2H10v-2z")
            path(d="M30 8H2c-1.104 0-2 .896-2 2v12c0 1.105.896 2 2 2h4v6c0 1.105.896 2 2 2h16c1.104 0 2-.895 2-2v-6h4c1.104 0 2-.895 2-2V10c0-1.104-.897-2-2-2zm-6 22H8V18h16v12zm4-16c-1.104 0-2-.895-2-2 0-1.104.896-2 2-2s2 .896 2 2c0 1.105-.897 2-2 2z")
          | {{ $t('view.home.print') }}
    font-select
</template>

<script>
import { mixinUpdateStore } from '@/mixins/mixinUpdateStore.js'
import { mixinRender } from '@/mixins/mixinRender.js'

import FormCurriculo from '@/components/curriculo/FormCurriculo'
import Render from '@/components/curriculo/Render'
import FontSelect from '@/components/FontSelect'

export default {
  name: 'home',
  mixins: [mixinUpdateStore, mixinRender],
  components: {
    FormCurriculo,
    Render,
    FontSelect
  }
}
</script>
