<script setup>
import axios from 'axios'
import { api } from '@/api'
import { ref, watch } from "vue";
import Box from "./Box.vue";
import DocumentationIcon from "./icons/IconDocumentation.vue";
import ToolingIcon from "./icons/IconTooling.vue";
import CommunityIcon from "./icons/IconCommunity.vue";
import HomeIcon from "./icons/IconHome.vue";
import UserIcon from "./icons/IconUser.vue";
import { useCurriculoStore } from "@/stores/curriculo";

const HTTP = axios.create({ baseURL: api.viacep })
const curriculo = useCurriculoStore();
const languageInput = ref([]);
const genders = ref(["Mulher", "Homem", "Unisex"]);
const maritials = ref(["Solteiro", "Casado", "Divorciado", "Viuvo"]);
const languages = ref([
  { name: "Português Brasileiro", percent: 0 },
  { name: "Português Portugal", percent: 0 },
  { name: "Espanhol", percent: 0 },
  { name: "Inglês", percent: 0 },
  { name: "Russo", percent: 0 },
  { name: "Chinês", percent: 0 },
  { name: "Árabe", percent: 0 },
  ]);
const languagesArray = ref([
  ...languages.value.map(item => item.name)
]);

// console.log(curriculo.languages);
// console.log(languages.value);
// console.log(languagesArray.value);  

watch(curriculo, () => {
  localStorage.setItem('curriculo', JSON.stringify(curriculo.getCurriculo));
  // console.log(curriculo.getCurriculo);
  // console.log('testes');
  // console.log('testes');
})

watch(languageInput.value, () => {
  console.log('languageInput')
})

function search_cep(e) {
  if (e.target.value.length >= 8) {
    HTTP.get(e.target.value.replace(/\D+/g, '') + '/json/')
      .then(({ data: { localidade, logradouro, uf }}) => {
        curriculo.address.city = localidade;
        curriculo.address.country = uf;
        curriculo.address.street = logradouro;
      })
      .catch(e => {
        console.error(e);
      })
  }
}

function StaytoUpperCase({ target: { value } }) {
  curriculo.address.country = value.toUpperCase();
}
function StayLanguages(test) {
  console.log('StayLanguages');
  console.log(test);
}
function newLanguage(test) {
  console.log(test);
}
</script>

<template lang="pug">
Box.personal
  template(#icon)
    UserIcon
  template(#heading) Dados pessoais
  v-row
    v-col(cols="12" sm="6")
      v-text-field(label="Nome completo" v-model="curriculo.name" hide-details="auto" clearable)
    v-col(cols="12" sm="6" v-if="curriculo.name || curriculo.age")
      v-text-field(label="Idade" v-model="curriculo.age" type="number" hide-details="auto" clearable)
  v-row
    v-col(cols="12" sm="6" v-if="(curriculo.name && curriculo.age) || curriculo.gender")
      v-combobox(v-model="curriculo.gender" :items="genders" label="Genero" outlined dense hide-details="auto" clearable)
    v-col(cols="12" sm="6" v-if="(curriculo.name && curriculo.age && curriculo.gender) || curriculo.maritial")
      v-combobox(v-model="curriculo.maritial" :items="maritials" label="Estado civil" outlined dense hide-details="auto" clearable)
Box.address
  template(#icon)
    HomeIcon
  template(#heading) Endereço
  v-row
    v-col(cols="12" sm="6")
      v-text-field(@keyup="search_cep" label="CEP" v-model="curriculo.address.cep" type="tel" hide-details="auto" maxlength="9" clearable)
    v-col(cols="12" sm="6" v-if="curriculo.address.cep || curriculo.address.number")
      v-text-field(label="Número" v-model="curriculo.address.number" type="number" hide-details="auto" clearable)
  v-row
    v-col(cols="12" sm="6" v-if="(curriculo.address.cep && curriculo.address.number) || curriculo.address.city")
      v-text-field(label="Cidade" v-model="curriculo.address.city" type="text" hide-details="auto" clearable)
    v-col(cols="12" sm="6" v-if="(curriculo.address.cep && curriculo.address.number && curriculo.address.city) || curriculo.address.country")
      v-text-field(
        label="Estado"
        v-model="curriculo.address.country"
        type="text"
        hide-details="auto"
        clearable
        @input="StaytoUpperCase"
      )
  v-row
    v-col(cols="12" sm="6" v-if="(curriculo.address.cep && curriculo.address.number && curriculo.address.city && curriculo.address.country) || curriculo.address.street")
      v-text-field(label="Local" v-model="curriculo.address.street" type="text" hide-details="auto" clearable)
Box.languages
  template(#icon)
    CommunityIcon
  template(#heading) Idiomas
  v-row
    v-col(cols="12")
      v-autocomplete(label="Languages" v-model="curriculo.languages" :items="languagesArray" outlined dense multiple chips clearable)
      //- v-text-field(v-model="languageInput" label="Idioma" type="text" hide-details="auto" clearable)
    //- v-col(cols="1")
    //-   v-btn(label="Adicionar novo idioma" @click="newLanguage" color="secondary") +
  v-row(v-for="(language, index) in curriculo.languages")
    v-col(cols="12")
      v-slider(
        @input="StayLanguages({ language, index })"
        step="10"
        color="green"
        track-color="#000"
        thumb-label
      )
        template(v-slot:prepend)
          p {{language}}
Box.academy
  template(#icon)
    DocumentationIcon
  template(#heading) Formação
  v-row
    v-col(cols="12" sm="6")
      v-text-field(label="Instituição" v-model="curriculo.formation.institute" hide-details="auto" clearable)
    v-col(cols="12" sm="6")
      v-text-field(label="Curso" v-model="curriculo.formation.course" hide-details="auto" clearable)
  v-row
    v-col(cols="12" sm="6")
      v-text-field(label="Data Inicio" v-model="curriculo.formation.dateFirst" hide-details="auto" clearable type="date")
    v-col(cols="12" sm="6")
      v-text-field(label="Data Conclusão" v-model="curriculo.formation.dateEnd" hide-details="auto" clearable type="date")
  v-row
    v-col(cols="12" sm="6")
      v-text-field(label="Atividades" v-model="curriculo.formation.about" hide-details="auto" clearable)
    v-col(cols="12" sm="6")
      v-text-field(label="Referencia" v-model="curriculo.formation.ref" hide-details="auto" clearable)
Box.experience
  template(#icon)
    ToolingIcon
  template(#heading) Experiência
  v-row
    v-col(cols="12" sm="6")
      v-text-field(label="Cargo" v-model="curriculo.experience.work" hide-details="auto" clearable)
    v-col(cols="12" sm="6")
      v-text-field(label="Empresa" v-model="curriculo.experience.company" hide-details="auto" clearable)
  v-row
    v-col(cols="12" sm="6")
      v-text-field(label="Data Inicio" v-model="curriculo.experience.dateFirst" hide-details="auto" clearable type="date")
    v-col(cols="12" sm="6")
      v-text-field(label="Data Conclusão" v-model="curriculo.experience.dateEnd" hide-details="auto" clearable type="date")
  v-row
    v-col(cols="12" sm="6")
      v-text-field(label="Atividades" v-model="curriculo.experience.about" hide-details="auto" clearable)
    v-col(cols="12" sm="6")
      v-text-field(label="Referencia" v-model="curriculo.experience.ref" hide-details="auto" clearable)
</template>
