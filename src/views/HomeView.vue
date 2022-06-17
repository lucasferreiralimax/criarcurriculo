<script setup>
import Curriculo from "@/components/Curriculo.vue";
import { useCurriculoStore } from "@/stores/curriculo";
const curriculo = useCurriculoStore();
</script>

<template lang="pug">
Curriculo
//- h1 {{ curriculo.name }}
//- h2 {{ curriculo.age }}
</template>
