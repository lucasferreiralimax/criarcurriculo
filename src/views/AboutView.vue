<script setup>
import Box from "../components/Box.vue";
import DocumentationIcon from "../components/icons/IconDocumentation.vue";
import ToolingIcon from "../components/icons/IconTooling.vue";
import SupportIcon from "../components/icons/IconSupport.vue";
import { RouterLink } from "vue-router";
</script>

<template lang="pug">
main
  Box(collapse="true")
    template(#icon)
      DocumentationIcon
    template(#heading) O que é esse projeto?
    | Esse projeto foi idealizado para ajudar na criação de um Currículo Vivo
    br
    | Totalmente profissional, para você conquistar seus sonhos e objetivos conforme sua disposição
  Box
    template(#icon)
      ToolingIcon
    template(#heading) Tecnologias
    | Este projeto é desenvolvido com 
    a(href="https://github.com/lucasferreiralimax/criarcurriculo" target="_blank")
      | Vue.js, Vite, Pinia, Vue Router, Vue Test Utils, Cypress.io, Vuetify, Pug.js e Stylus.
  Box(collapse="true" select="true")
    template(#icon)
      SupportIcon
    template(#heading) Colabore
    p Para colaborar com o projeto entre na página de &nbsp;
      RouterLink(to="/help")
        strong.pointer doações.
    p Se quiser envie um email para &nbsp;
      a(href="mailto:lucasferreiralimax@gmail.com" target="_blank")
        strong.pointer lucasferreiralimax@gmail.com
</template>
