<script setup>
import axios from 'axios'
import { api } from '@/api'
import { ref, watch } from "vue";
import uniqueid from "lodash/uniqueid";
import Box from "./Box.vue";
import DocumentationIcon from "./icons/IconDocumentation.vue";
import ToolingIcon from "./icons/IconTooling.vue";
import CommunityIcon from "./icons/IconCommunity.vue";
import HomeIcon from "./icons/IconHome.vue";
import UserIcon from "./icons/IconUser.vue";
import { useCurriculoStore } from "@/stores/curriculo";

const HTTP = axios.create({ baseURL: api.viacep })
const store = useCurriculoStore();
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
  { name: "Japonês", percent: 0 },
  ]);
const languagesArray = ref([
  ...languages.value.map(item => item.name)
]);

const levelLabels = {
  0: 'Básico',
  1: 'Intermediário',
  2: 'Fluente',
};

watch(store, () => {
  localStorage.setItem('curriculo', JSON.stringify(store.getCurriculo));
})

watch(languageInput.value, () => {
  console.log('languageInput')
})

function search_cep(e) {
  if (e.target.value.length >= 8) {
    HTTP.get(e.target.value.replace(/\D+/g, '') + '/json/')
      .then(({ data: { localidade, logradouro, uf }}) => {
        store.curriculo.address.city = localidade;
        store.curriculo.address.country = uf;
        store.curriculo.address.street = logradouro;
      })
      .catch(e => {
        console.error(e);
      })
  }
}

function StaytoUpperCase({ target: { value } }) {
  store.curriculo.address.country = value.toUpperCase();
}
function StayLanguages(test) {
  console.log('StayLanguages');
  console.log(test);
}
function newLanguage(test) {
  console.log(test);
}
function removeFormation(id) {
  store.curriculo.formation = store.curriculo.formation.filter((item) => item.id !== id);
}
function addFormation() {
  store.curriculo.formation.push({
    id: uniqueid('formation_'),
    institute: null,
    course: null,
    dateFirst: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
    dateEnd: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
    about: null,
    ref: null,
  });
}
</script>

<template lang="pug">
Box.personal
  template(#icon)
    UserIcon
  template(#heading) Dados pessoais
  v-row
    v-col(cols="12" sm="6")
      v-text-field(label="Nome completo" v-model="store.curriculo.name" hide-details="auto" clearable)
    v-col(cols="12" sm="6" v-if="store.curriculo.name || store.curriculo.age")
      v-text-field(label="Idade" v-model="store.curriculo.age" type="number" hide-details="auto" clearable)
  v-row
    v-col(cols="12" sm="6" v-if="(store.curriculo.name && store.curriculo.age) || store.curriculo.gender")
      v-combobox(v-model="store.curriculo.gender" :items="genders" label="Genero" outlined dense hide-details="auto" clearable)
    v-col(cols="12" sm="6" v-if="(store.curriculo.name && store.curriculo.age && store.curriculo.gender) || store.curriculo.maritial")
      v-combobox(v-model="store.curriculo.maritial" :items="maritials" label="Estado civil" outlined dense hide-details="auto" clearable)
Box.address
  template(#icon)
    HomeIcon
  template(#heading) Endereço
  v-row
    v-col(cols="12" sm="6")
      v-text-field(@keyup="search_cep" label="CEP" v-model="store.curriculo.address.cep" type="tel" hide-details="auto" maxlength="9" clearable)
    v-col(cols="12" sm="6" v-if="store.curriculo.address.cep || store.curriculo.address.number")
      v-text-field(label="Número" v-model="store.curriculo.address.number" type="number" hide-details="auto" clearable)
  v-row
    v-col(cols="12" sm="6" v-if="(store.curriculo.address.cep && store.curriculo.address.number) || store.curriculo.address.city")
      v-text-field(label="Cidade" v-model="store.curriculo.address.city" type="text" hide-details="auto" clearable)
    v-col(cols="12" sm="6" v-if="(store.curriculo.address.cep && store.curriculo.address.number && store.curriculo.address.city) || store.curriculo.address.country")
      v-text-field(
        label="Estado"
        v-model="store.curriculo.address.country"
        type="text"
        hide-details="auto"
        clearable
        @input="StaytoUpperCase"
      )
  v-row
    v-col(cols="12" sm="6" v-if="(store.curriculo.address.cep && store.curriculo.address.number && store.curriculo.address.city && store.curriculo.address.country) || store.curriculo.address.street")
      v-text-field(label="Local" v-model="store.curriculo.address.street" type="text" hide-details="auto" clearable)
Box.languages
  template(#icon)
    CommunityIcon
  template(#heading) Idiomas
  v-row
    v-col(cols="12")
      v-autocomplete(
        label="Languages"
        hide-details="auto"
        v-model="store.curriculo.languages"
        :items="languages"
        outlined
        dense
        multiple
        chips
        clearable
        closable-chips
        item-title="name"
        return-object
      )
  v-row(v-for="(language, index) in store.curriculo.languages")
    v-col(cols="12")
      v-divider(class="divider")
      v-slider(
        color="green"
        track-color="#000"
        :ticks="levelLabels"
        :max="2"
        step="1"
        show-ticks="always"
        v-model="store.curriculo.languages[index].percent"
      )
        template(v-slot:prepend)
          p.title-languange {{language.name}}        
Box.academy(v-for="(formation, index) in store.curriculo.formation")
  template(#actions)
    v-btn.btn-delete(
      @click="removeFormation(formation.id)"
      color="error"
      icon
      small
    )
      v-icon mdi-close
      v-tooltip(
        activator="parent"
        location="top"
      ) Excluir
  template(#icon)
    DocumentationIcon
  template(#heading) Formação {{ formation.course }} 
  v-row
    v-col(cols="12" sm="6")
      v-text-field(label="Instituição" v-model="formation.institute" hide-details="auto" clearable)
    v-col(cols="12" sm="6")
      v-text-field(label="Curso" v-model="formation.course" hide-details="auto" clearable)
  v-row
    v-col(cols="12" sm="6")
      v-text-field(label="Data Inicio" v-model="formation.dateFirst" hide-details="auto" clearable type="date")
    v-col(cols="12" sm="6")
      v-text-field(label="Data Conclusão" v-model="formation.dateEnd" hide-details="auto" clearable type="date")
  v-row
    v-col(cols="12" sm="6")
      v-text-field(label="Atividades" v-model="formation.about" hide-details="auto" clearable)
    v-col(cols="12" sm="6")
      v-text-field(label="Referencia" v-model="formation.ref" hide-details="auto" clearable)
v-btn.btn(
  block
  type="button" @click="addFormation()"
  color="success"
)
  v-icon.icon mdi-plus-box
  | Adicionar formação
Box.experience
  template(#icon)
    ToolingIcon
  template(#heading) Experiência
  v-row
    v-col(cols="12" sm="6")
      v-text-field(label="Cargo" v-model="store.curriculo.experience.work" hide-details="auto" clearable)
    v-col(cols="12" sm="6")
      v-text-field(label="Empresa" v-model="store.curriculo.experience.company" hide-details="auto" clearable)
  v-row
    v-col(cols="12" sm="6")
      v-text-field(label="Data Inicio" v-model="store.curriculo.experience.dateFirst" hide-details="auto" clearable type="date")
    v-col(cols="12" sm="6")
      v-text-field(label="Data Conclusão" v-model="store.curriculo.experience.dateEnd" hide-details="auto" clearable type="date")
  v-row
    v-col(cols="12" sm="6")
      v-text-field(label="Atividades" v-model="store.curriculo.experience.about" hide-details="auto" clearable)
    v-col(cols="12" sm="6")
      v-text-field(label="Referencia" v-model="store.curriculo.experience.ref" hide-details="auto" clearable)
</template>

<style lang="stylus">
.title-languange 
  display block
  position absolute
  top -50px
  min-width 300px

.divider 
  margin-bottom 3rem
  filter invert(1)

.btn
  padding 1.5rem 1rem
  .icon 
    margin-right 1rem
.btn-delete
  position absolute
  top 12px
  right 12px
  transform scale(.8)
</style>
