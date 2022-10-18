<script setup>
import { ref } from "vue";
import Box from "@/components/Box.vue";
import UserEmail from "@/components/icons/IconEmail.vue";
import { useCurriculoStore } from "@/stores/curriculo";

const store = useCurriculoStore();
</script>

<template lang="pug">
Box.personal
  template(#icon)
    UserEmail
  template(#heading) Contato
  v-row
    v-col(cols="12" sm="6")
      v-text-field(label="Email" v-model="store.curriculo.contact.email" type="email" hide-details="auto" clearable)
    v-col(cols="12" sm="6")
      v-text-field(label="Telefone" v-model="store.curriculo.contact.phone" type="text" hide-details="auto" clearable)
  v-row
    v-col(cols="12" sm="6")
      v-text-field(label="Site" v-model="store.curriculo.contact.site" type="text" hide-details="auto" clearable)
    v-col(cols="12" sm="6")
      v-text-field(label="Linkedin" v-model="store.curriculo.contact.linkedin" type="text" hide-details="auto" clearable)
</template>
