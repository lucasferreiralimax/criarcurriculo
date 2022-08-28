<script setup>
import Box from "../components/Box.vue";
import DocumentationIcon from "../components/icons/IconDocumentation.vue";
import ToolingIcon from "../components/icons/IconTooling.vue";
import EcosystemIcon from "../components/icons/IconEcosystem.vue";
import CommunityIcon from "../components/icons/IconCommunity.vue";
import SupportIcon from "../components/icons/IconSupport.vue";
import { RouterLink } from "vue-router";
</script>

<template>
  <main>
    <Box>
      <template #icon>
        <DocumentationIcon />
      </template>
      <template #heading>O que é esse projeto?</template>
      Esse projeto foi idealizado para ajudar na criação de um currículo vivo e
      profissional, para você conquistar seus sonhos e objetivos conforme sua evolução
    </Box>
  
    <Box>
      <template #icon>
        <ToolingIcon />
      </template>
      <template #heading>Tecnologias</template>
  
      Este projeto é desenvolvido com 
      <a href="https://github.com/lucasferreiralimax/criarcurriculo" target="_blank">
        Vue.js, Vite, Pinia, Vue Router, Vue Test Utils, Cypress.io, Vuetify, Pug.js e Stylus.
      </a>
    </Box>
  
    <Box collapse="true" select="true">
      <template #icon>
        <SupportIcon />
      </template>
      <template #heading>Colabore</template>
      <p>Para colaborar com o projeto entre na página de <RouterLink to="/help"> doações.</RouterLink></p>
      <p>Se quiser envie um email para <a href="mailto:2virgulinoferreirasilva@gmail.com" target="_blank">2virgulinoferreirasilva@gmail.com</a></p>
    </Box>
  </main>
</template>
