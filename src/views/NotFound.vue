<template lang="pug">
section.container.animate_intro
  h1 {{ $t('text.notfound_t1') }}
  p {{ $t('text.notfound_t2') }}
  br
  h2
    | {{ $t('text.notfound_t3') }}
    router-link.logo(to="/" tag="h3" v-scroll-to="'#start_app'") {{ $t('text.notfound_click') }}
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
