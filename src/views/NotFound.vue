<template lang="pug">
section.mark.text-center.animate_intro
  h1 {{ $t('text.notfound_t1') }}
  p {{ $t('text.notfound_t2') }}
  h3 {{ $t('text.notfound_t3') }}
  router-link(to="/" tag="a" v-scroll-to="'#start_app'") {{ $t('text.notfound_click') }}
</template>

<script>
export default {
  name: 'not-found',
  head: {
    title: {
      inner: 'Página não encontrada'
    }
  }
}
</script>
