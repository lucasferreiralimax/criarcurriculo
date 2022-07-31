<script setup>
import { useCurriculoStore } from "@/stores/curriculo";

const store = useCurriculoStore();

const levelLabels = {
  0: 'Básico',
  1: 'Intermediário',
  2: 'Fluente',
};
</script>

<template lang="pug">
section.preview
  h2 {{ store.curriculo.name }}
  p.my-5.mt-1
    template(v-if="store.curriculo.maritial || store.curriculo.age")
      |  {{ store.curriculo.maritial ? `${store.curriculo.maritial}` : `` }}
      | {{ store.curriculo.age ? `${store.curriculo.age} anos` : `` }}
    template(v-if="store.curriculo.address.city || store.curriculo.address.country")
      | {{ store.curriculo.address.country ? ` ${store.curriculo.address.country}` : `` }}
      | {{ store.curriculo.address.city ? `${store.curriculo.address.city}` : `` }}
  v-divider
  h3.my-2 Formação
  template(v-for="(formation, index) in store.curriculo.formation")
    p.my-5.mb-0
      b {{ formation.course }} - {{ formation.institute }}
    p.my-5.mt-0.mb-0
      | {{ formation.about }}
    p(v-if="formation.ref")
      | Referência: 
      a.my-5.mt-0.ml-1(:href="formation.ref" target="_blank")
        | {{ formation.ref }}
  v-divider.my-5
  h3.my-2 Idiomas
  p.my-5.mt-0
    span.mr-1(v-for="(language, index) in store.curriculo.languages")
      | {{ language.name }} {{ levelLabels[language.percent] }} {{store.curriculo.languages.length !== index + 1 ? '•' : '' }}
  v-divider.my-5
  h3.my-2 Experiências
  template(v-for="(experience, index) in store.curriculo.experience")
    p.my-5.mb-0
      b {{ experience.company }} - {{ experience.work }}
    p.my-5.mt-0.mb-0
      | {{ experience.about }}
    p(v-if="experience.ref")
      | Referência: 
      a.my-5.mt-0.ml-1(:href="experience.ref" target="_blank")
        | {{ experience.ref }}
</template>

<style lang="stylus">
.preview
  background #fff
  color #000
  padding 1.5rem 2rem
</style>