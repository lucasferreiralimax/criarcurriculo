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
  margin 1rem 0
  line-height 1.5
h1
  font-weight 500
  font-size 2rem
</style>
