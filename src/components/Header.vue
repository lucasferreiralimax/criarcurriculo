<script setup>
import Logo from "@/components/Logo.vue";
import Navigation from "@/components/Navigation.vue";
</script>

<template lang="pug">
header
  Logo(type="header")
  Navigation
</template>

<style scoped lang="stylus">
header
  display flex
  margin-bottom 2rem

h1
  font-weight 500
  font-size 2rem

header
  line-height 1.5
</style>
