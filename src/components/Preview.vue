<script setup>
import axios from 'axios'
import { api } from '@/api'
import { ref, watch } from "vue";
import { useCurriculoStore } from "@/stores/curriculo";

const HTTP = axios.create({ baseURL: api.viacep })
const curriculo = useCurriculoStore();
</script>

<template lang="pug">
section.preview
  //- pre {{ curriculo }}
</template>
