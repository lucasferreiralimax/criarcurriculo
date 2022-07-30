<script setup>
import Curriculo from "@/components/Curriculo.vue";
import Preview from "@/components/Preview.vue";
import { useCurriculoStore } from "@/stores/curriculo";

import stateCurriculo from "../stores/state_curriculo";

const store = useCurriculoStore();

function magicLuffy() {
  console.log(stateCurriculo);
  store.curriculo = stateCurriculo;
  localStorage.setItem('curriculo', JSON.stringify(store.getCurriculo));
}
</script>

<template lang="pug">
Curriculo
button(@click="magicLuffy") Magic
Preview
//- h1 {{ curriculo.name }}
//- h2 {{ curriculo.age }}
</template>
