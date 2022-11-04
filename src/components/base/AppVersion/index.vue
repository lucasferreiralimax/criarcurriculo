<template lang="pug">
small.version {{ $t('version') }} {{ version }}
</template>

<script>
import pkg from '../../../../package.json'

export default {
  name: 'app-version',
  data () {
    return {
      version: pkg.version
    }
  }
}
</script>

<style lang="stylus">
.version
  color color1
</style>
