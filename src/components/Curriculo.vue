<script setup>
import { ref } from "vue";
import Box from "./Box.vue";
import DocumentationIcon from "./icons/IconDocumentation.vue";
import HomeIcon from "./icons/IconHome.vue";
import UserIcon from "./icons/IconUser.vue";
import { useCurriculoStore } from "@/stores/curriculo";

const curriculo = useCurriculoStore();
const genderSelect = ref();
const maritialSelect = ref();
const languageSelect = ref([]);
const genders = ref(["Mulher", "Homem", "Unisex"]);
const maritials = ref(["Solteiro", "Casado", "Divorciado", "Viuvo"]);
const languages = ref([
  "Português Brasileiro",
  "Português Portugal",
  "Espanhol",
  "Inglês",
  "Russo",
  "Chinês",
  "Árabe",
]);
</script>

<template lang="pug">
Box.personal
  template(#icon)
    UserIcon
  template(#heading) Dados pessoais
  v-row
    v-col(cols="12" sm="6")
      v-text-field(label="Nome completo" v-model="curriculo.name" hide-details="auto")
    v-col(cols="12" sm="6" v-if="curriculo.name || curriculo.age")
      v-text-field(label="Idade" v-model="curriculo.age" type="number" hide-details="auto")
  v-row
    v-col(cols="12" sm="6" v-if="(curriculo.name && curriculo.age) || genderSelect")
      v-combobox(v-model="genderSelect" :items="genders" label="Genero" outlined dense hide-details="auto")
    v-col(cols="12" sm="6" v-if="(curriculo.name && curriculo.age && genderSelect) || maritialSelect")
      v-combobox(v-model="maritialSelect" :items="maritials" label="Estado civil" outlined dense hide-details="auto")
Box.address
  template(#icon)
    HomeIcon
  template(#heading) Endereço
  v-row
    v-col(cols="12" sm="6")
      v-text-field(label="CEP" v-model="curriculo.address.cep" type="number" hide-details="auto")
    v-col(cols="12" sm="6" v-if="curriculo.address.cep || curriculo.address.number")
      v-text-field(label="Número" v-model="curriculo.address.number" type="number" hide-details="auto")
  v-row
    v-col(cols="12" sm="6" v-if="(curriculo.address.cep && curriculo.address.number) || curriculo.address.city")
      v-text-field(label="Cidade" v-model="curriculo.address.city" type="text" hide-details="auto")
    v-col(cols="12" sm="6" v-if="(curriculo.address.cep && curriculo.address.number && curriculo.address.city) || curriculo.address.country")
      v-text-field(label="Estado" v-model="curriculo.address.country" type="text" hide-details="auto")
  v-row
    v-col(cols="12" sm="6" v-if="(curriculo.address.cep && curriculo.address.number && curriculo.address.city && curriculo.address.country) || curriculo.address.street")
      v-text-field(label="Local" v-model="curriculo.address.street" type="text" hide-details="auto")
Box.languages
  template(#icon)
    DocumentationIcon
  template(#heading) Idiomas
  v-row
    v-col(cols="12" sm="6")
      v-combobox(v-model="languageSelect" :items="languages" label="Idioma" outlined dense hide-details="auto" multiple)
Box.academy
  template(#icon)
    DocumentationIcon
  template(#heading) Formação
  v-row
    v-col(cols="12" sm="6")
      v-text-field(label="Nome completo" v-model="curriculo.name" hide-details="auto")
Box.experience
  template(#icon)
    DocumentationIcon
  template(#heading) Experiência
  v-row
    v-col(cols="12" sm="6")
      v-text-field(label="Nome completo" v-model="curriculo.name" hide-details="auto")
</template>
