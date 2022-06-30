<script setup>
import Curriculo from "@/components/Curriculo.vue";
import Preview from "@/components/Preview.vue";
import { useCurriculoStore } from "@/stores/curriculo";
const curriculo = useCurriculoStore();
</script>

<template lang="pug">
Curriculo
Preview
//- h1 {{ curriculo.name }}
//- h2 {{ curriculo.age }}
</template>
