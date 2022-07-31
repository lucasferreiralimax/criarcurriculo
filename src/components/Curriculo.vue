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
import stateCurriculo from "../stores/state_curriculo";

const HTTP = axios.create({ baseURL: api.viacep })
const store = useCurriculoStore();
const languageInput = ref([]);
const genders = ref(["Mulher", "Homem", "Unisex"]);
const maritials_man = ref(["Solteiro", "Casado", "Divorciado", "Viuvo"]);
const maritials_woman = ref(["Solteira", "Casada", "Divorciada", "Viuva"]);
const maritials_unix = ref(["Solteiro(a)", "Casado(a)", "Divorciado(a)", "Viuvo(a)"]);
const languages = ref([
  { name: "Português Brasileiro", percent: 0 },
  { name: "Latim", percent: 0 },
  { name: "Hebraico", percent: 0 },
  { name: "Egípcio", percent: 0 },
  { name: "Português Portugal", percent: 0 },
  { name: "Italiano", percent: 0 },
  { name: "Espanhol", percent: 0 },
  { name: "Catalão", percent: 0 },
  { name: "Castelhano", percent: 0 },
  { name: "Inglês", percent: 0 },
  { name: "Russo", percent: 0 },
  { name: "Bielorusso", percent: 0 },
  { name: "Mandarim - Chinês", percent: 0 },
  { name: "Árabe", percent: 0 },
  { name: "Japonês", percent: 0 },
  { name: "Turco", percent: 0 },
  { name: "Tailandês", percent: 0 },
  { name: "Grego", percent: 0 },
  { name: "Holandês", percent: 0 },
  { name: "Islandês", percent: 0 },
  { name: "Amárico", percent: 0 },
  { name: "Aramaico", percent: 0 },
  { name: "Vietnamita", percent: 0 },
  { name: "Persa", percent: 0 },
  { name: "Coreano", percent: 0 },
  { name: "Francês", percent: 0 },
  { name: "Alemão", percent: 0 },
  ]);

const levelLabels = {
  0: 'Básico',
  1: 'Intermediário',
  2: 'Fluente',
};

watch(store, () => {
  localStorage.setItem('curriculo-store', JSON.stringify(store.getCurriculo));
})

watch(store.curriculo.gender, () => {
  store.curriculo.maritial = '';
})

function search_cep(e) {
  if (e.target.value.length >= 8) {
    HTTP.get(e.target.value.replace(/\D+/g, '') + '/json/')
      .then(({ data: { localidade, uf }}) => {
        store.curriculo.address.city = localidade;
        store.curriculo.address.country = uf;
      })
      .catch(e => {
        console.error(e);
      })
  }
}

function StaytoUpperCase({ target: { value } }) {
  store.curriculo.address.country = value.toUpperCase();
}

function removeFormation(id) {
  store.curriculo.formation = store.curriculo.formation.filter((item) => item.id !== id);
}

function removeExperience(id) {
  store.curriculo.experience = store.curriculo.experience.filter((item) => item.id !== id);
}

function addFormation() {
  store.curriculo.formation.push({
    id: uniqueid('formation_'),
    institute: null,
    course: null,
    dateFirst: null,
    dateEnd: null,
    about: null,
    ref: null,
  });
}

function addExperience() {
  store.curriculo.experience.push({
    id: uniqueid('experience_'),
    work: null,
    company: null,
    dateFirst: null,
    dateEnd: null,
    about: null,
    ref: null,
  });
}

function magicLuffy() {
  store.curriculo = stateCurriculo.curriculo;
  localStorage.setItem('curriculo-store', JSON.stringify(store.getCurriculo));
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
      v-select(v-model="store.curriculo.gender" :items="genders" label="Gênero" outlined dense hide-details="auto" clearable)
    v-col(cols="12" sm="6" v-if="(store.curriculo.name && store.curriculo.age && store.curriculo.gender) || store.curriculo.maritial")
      v-select(
        v-model="store.curriculo.maritial"
        :items="store.curriculo.gender == 'Homem' ? maritials_man : store.curriculo.gender == 'Mulher' ? maritials_woman : maritials_unix"
        label="Estado civil"
        outlined
        dense
        hide-details="auto"
        clearable
      )
  v-row
    v-col(cols="12")
      v-textarea(label="Sobre" v-model="store.curriculo.about")
Box.address
  template(#icon)
    HomeIcon
  template(#heading) Endereço
  v-row
    v-col(cols="12" sm="12" md="3")
      v-text-field(@keyup="search_cep" label="CEP" v-model="store.curriculo.address.cep" type="tel" hide-details="auto" maxlength="9" clearable)
    v-col(cols="12" sm="6" md="3" v-if="(store.curriculo.address.cep && store.curriculo.address.number && store.curriculo.address.city) || store.curriculo.address.country")
      v-text-field(
        label="Estado"
        v-model="store.curriculo.address.country"
        type="text"
        hide-details="auto"
        clearable
        @input="StaytoUpperCase"
      )
    v-col(cols="12" sm="6" md="6" v-if="(store.curriculo.address.cep && store.curriculo.address.number) || store.curriculo.address.city")
      v-text-field(label="Cidade" v-model="store.curriculo.address.city" type="text" hide-details="auto" clearable)
Box.languages
  template(#icon)
    CommunityIcon
  template(#heading) Idiomas
  v-row
    v-col(cols="12")
      v-autocomplete(
        label="Escolha o idioma"
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
    v-col(cols="12" sm="6" v-if="formation.institute")
      v-text-field(label="Curso" v-model="formation.course" hide-details="auto" clearable)
  v-row
    v-col(cols="12" sm="6" v-if="formation.institute && formation.course")
      v-text-field(label="Data Inicio" v-model="formation.dateFirst" hide-details="auto" clearable type="date")
    v-col(cols="12" sm="6" v-if="formation.institute && formation.course && formation.dateFirst")
      v-text-field(label="Data Conclusão" v-model="formation.dateEnd" hide-details="auto" clearable type="date")
  v-row(v-if="formation.institute && formation.course && formation.dateFirst")
    v-col(cols="12" sm="6")
      v-text-field(label="Atividades" v-model="formation.about" hide-details="auto" clearable)
    v-col(cols="12" sm="6")
      v-text-field(label="Referência" v-model="formation.ref" hide-details="auto" clearable)
v-btn.btn.my-5(
  block
  type="button" @click="addFormation()"
  color="success"
  variant="tonal"
)
  v-icon.icon mdi-plus-circle
  | Adicionar formação
Box.experience(v-for="(experience, index) in store.curriculo.experience")
  template(#actions)
    v-btn.btn-delete(
      @click="removeExperience(experience.id)"
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
    ToolingIcon
  template(#heading) Experiência {{ experience.company }}
  v-row
    v-col(cols="12" sm="6")
      v-text-field(label="Cargo" v-model="experience.work" hide-details="auto" clearable)
    v-col(cols="12" sm="6" v-if="experience.work")
      v-text-field(label="Empresa" v-model="experience.company" hide-details="auto" clearable)
  v-row
    v-col(cols="12" sm="6" v-if="experience.work && experience.company")
      v-text-field(label="Data Inicio" v-model="experience.dateFirst" hide-details="auto" clearable type="date")
    v-col(cols="12" sm="6" v-if="experience.work && experience.company && experience.dateFirst")
      v-text-field(label="Data Conclusão" v-model="experience.dateEnd" hide-details="auto" clearable type="date")
  v-row(v-if="experience.work && experience.company && experience.dateFirst")
    v-col(cols="12" sm="6")
      v-text-field(label="Atividades" v-model="experience.about" hide-details="auto" clearable)
    v-col(cols="12" sm="6")
      v-text-field(label="Referência" v-model="experience.ref" hide-details="auto" clearable)
v-btn.btn(
  block
  type="button" @click="addExperience()"
  color="success"
  variant="tonal"
)
  v-icon.icon mdi-plus-circle
  | Adicionar experiência
v-btn.btn.my-5(block @click="magicLuffy" color="error" variant="flat")
  v-icon.icon mdi-delete
  | Apagar Tudo!
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
    transform scale(1.5)
.btn-delete
  position absolute
  top 12px
  right 12px
  transform scale(.8)
</style>
