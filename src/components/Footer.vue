<script setup>
import Logo from "@/components/Logo.vue";
</script>

<template lang="pug">
footer
  Logo(style="transform: translateX(-30px)")
    span
      | 2015 - 2022
</template>

<style scoped lang="stylus">
footer
  text-align center
  line-height 1.5
  margin-top 3rem
  span
    position absolute
    top 20px
    width 80px
    margin-left 2rem
</style>
