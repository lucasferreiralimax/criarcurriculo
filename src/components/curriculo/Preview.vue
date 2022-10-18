<script setup>
import { useCurriculoStore } from "@/stores/curriculo";
import { useCheckPreview } from '@/helpers/useCheckPreview';
import languagesLevel from './helpers/languagesLevel';

const store = useCurriculoStore();
const { checkPreview } = useCheckPreview();

function magicLucas() {
  window.print()
}
</script>

<template lang="pug">
section.preview(v-if="checkPreview")
  .box-personal(:class="{ 'no-photo': !store.curriculo.photo.data }")
    div(v-if="store.curriculo.photo.data")
      figure.photo-preview
        img(:src="store.curriculo.photo.data" :alt="store.curriculo.name" width="200")
    div.v-center
      h2(v-if="store.curriculo.name") {{ store.curriculo.name }}
      template(v-if="store.curriculo.maritial || store.curriculo.age || store.curriculo.address.city || store.curriculo.address.country")
        p.mt-1
          template(v-if="store.curriculo.maritial || store.curriculo.age")
            |  {{ store.curriculo.maritial ? `${store.curriculo.maritial}` : `` }}
            | {{ store.curriculo.age ? `${store.curriculo.age} anos ` : `` }}
          template(v-if="store.curriculo.address.city || store.curriculo.address.country")
            | moro em {{ store.curriculo.address.city ? ` ${store.curriculo.address.city}` : `` }}
            | {{ store.curriculo.address.country ? `${store.curriculo.address.country}` : `` }}
          template(v-if="store.curriculo.address.travel") , disponível para viagens
        p.mt-1
          template(v-if="store.curriculo.contact.email || store.curriculo.contact.phone")
            | {{ store.curriculo.contact.email ? `Email: ` : `` }}
            b.mr-2(v-if="store.curriculo.contact.email") {{ store.curriculo.contact.email }}
            | {{ store.curriculo.contact.phone ? `Telefone: ` : `` }}
            b(v-if="store.curriculo.contact.phone") {{ store.curriculo.contact.phone }}
        p.mt-1
          template(v-if="store.curriculo.contact.site")
            | {{ store.curriculo.contact.site ? `Site: ` : `` }}
            a.mr-2(v-if="store.curriculo.contact.site" :href="store.curriculo.contact.site" target="_blank")
              b {{ store.curriculo.contact.site }}
        p.mt-1
          template(v-if="store.curriculo.contact.linkedin")
            | {{ store.curriculo.contact.linkedin ? `Linkedin: ` : `` }}
            a.mr-2(v-if="store.curriculo.contact.linkedin" :href="store.curriculo.contact.linkedin" target="_blank")
              b {{ store.curriculo.contact.linkedin }}
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
v-btn.btn.my-5.rounded-lg(block @click="magicLucas" color="info" variant="flat" v-if="checkPreview")
  v-icon.icon mdi-printer
  | Imprimir
</template>

<style lang="stylus">
.preview
  background #fff
  color #000
  padding 1.5rem 2rem
  a
    color #000

.box-personal
  display grid
  grid-template-columns 170px 1fr
  margin-bottom 1rem
  &.no-photo
    grid-template-columns 1fr
    margin-bottom 0
  .v-center
    display flex
    flex-direction column
    justify-content center

.photo-preview
  width 150px
  height 150px
  overflow hidden
  border-radius 100%
  box-shadow 0 0 0 2px #222
  border 2px solid #fff
  img
    width 100%
    height 100%

@media print
  *
    -ms-filternone !important
    background transparent !important
    box-shadow none !important
    filter none !important
    text-shadow none !important

  body,
  #app,
  .v-application__wrap
    min-height auto !important
    padding 0 !important

  header, footer
  .v-main__wrap .box,
  .v-main__wrap .v-btn
    display none !important

  .preview p,
  .preview a,
    display inline-block !important
  .preview h2,
  .preview h3,
  .preview hr,
  .preview figure
    display block !important
  .photo-preview
    box-shadow 0 0 0 2px #222 !important
</style>
