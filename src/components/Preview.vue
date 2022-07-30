<script setup>
import axios from 'axios'
import { api } from '@/api'
import { ref, watch } from "vue";
import { useCurriculoStore } from "@/stores/curriculo";

const HTTP = axios.create({ baseURL: api.viacep })
const store = useCurriculoStore();
</script>

<template lang="pug">
section.preview
  //- pre {{ curriculo }}
  h2 {{ store.curriculo.name }}
  p(v-if="store.curriculo.maritial || store.curriculo.age")
    |  {{ store.curriculo.maritial ? `${store.curriculo.maritial}` : `` }}
    | {{ store.curriculo.age ? `${store.curriculo.age} anos` : `` }}
  p(v-if="store.curriculo.address.city || store.curriculo.address.country || store.curriculo.address.country")
    |  {{ store.curriculo.maritial ? `${store.curriculo.maritial}` : `` }}
    | {{ store.curriculo.age ? `${store.curriculo.age} anos` : `` }}
</template>

<style lang="stylus">
.preview
  background #fff
  color #000
  padding 1.5rem 2rem
</style>