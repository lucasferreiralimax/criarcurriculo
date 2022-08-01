<script setup>
import { useCurriculoStore } from "@/stores/curriculo";
import { useCheckPreview } from '@/helpers/useCheckPreview';
import languagesLevel from './helpers/languagesLevel';

const store = useCurriculoStore();
const { checkPreview } = useCheckPreview();
</script>

<template lang="pug">
section.preview(v-if="checkPreview")
  h2(v-if="store.curriculo.name") {{ store.curriculo.name }}
  template(v-if="store.curriculo.maritial || store.curriculo.age || store.curriculo.address.city || store.curriculo.address.country")
    p.my-5.mt-1
      template(v-if="store.curriculo.maritial || store.curriculo.age")
        |  {{ store.curriculo.maritial ? `${store.curriculo.maritial}` : `` }}
        | {{ store.curriculo.age ? `${store.curriculo.age} anos ` : `` }}
      template(v-if="store.curriculo.address.city || store.curriculo.address.country")
        | moro em {{ store.curriculo.address.city ? ` ${store.curriculo.address.city}` : `` }}
        | {{ store.curriculo.address.country ? `${store.curriculo.address.country}` : `` }}
      template(v-if="store.curriculo.address.travel") , disponível para viagens
    v-divider
  template(v-if="store.curriculo.about")
    h3.my-2 Sobre mim
    p.my-5.mt-1.ws-wrap
      | {{ store.curriculo.about }}
    v-divider
  template(v-if="store.curriculo.formation.length > 0")
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
  template(v-if="store.curriculo.languages.length > 0")
    h3.my-2 Idiomas
    p.my-5.mt-0
      span.mr-1(v-for="(language, index) in store.curriculo.languages")
        | {{ language.name }} {{ languagesLevel[language.percent] }} {{store.curriculo.languages.length !== index + 1 ? '•' : '' }}
    v-divider.my-5
  template(v-if="store.curriculo.experience.length > 0")
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