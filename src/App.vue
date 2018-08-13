<template lang="pug">
  #app
    header-app
    main
      router-view
    footer-app
    router-view(name="popup")
</template>

<style lang="stylus">
  @import 'stylus/all'
</style>
