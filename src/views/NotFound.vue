<template lang="pug">
section.mark.text-center
  h1 {{ $t('view.notfound.text1') }}
  p {{ $t('view.notfound.text2') }}
  h3 {{ $t('view.notfound.text3') }}
  router-link(to="/") {{ $t('view.notfound.click') }}
</template>

<script>
export default {
  name: 'notfound',
  head: {
    title: function () {
      return {
        inner: this.$t('view.notfound.text1')
      }
    }
  }
}
</script>
