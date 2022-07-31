<script setup>
import { useCurriculoStore } from "@/stores/curriculo";

const store = useCurriculoStore();
</script>

<template lang="pug">
section.preview
  h2 {{ store.curriculo.name }}
  p
    template(v-if="store.curriculo.maritial || store.curriculo.age")
      |  {{ store.curriculo.maritial ? `${store.curriculo.maritial}` : `` }}
      | {{ store.curriculo.age ? `${store.curriculo.age} anos` : `` }}
    template(v-if="store.curriculo.address.city || store.curriculo.address.country")
      | {{ store.curriculo.address.country ? ` ${store.curriculo.address.country}` : `` }}
      | {{ store.curriculo.address.city ? `${store.curriculo.address.city}` : `` }}
</template>

<style lang="stylus">
.preview
  background #fff
  color #000
  padding 1.5rem 2rem
</style>