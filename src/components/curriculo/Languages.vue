<script setup>
import { ref } from "vue";
import Box from "@/components/Box.vue";
import CommunityIcon from "@/components/icons/IconCommunity.vue";
import { useCurriculoStore } from "@/stores/curriculo";
import languagesLevel from './helpers/languagesLevel';

const store = useCurriculoStore();
const languageInput = ref([]);
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
</script>

<template lang="pug">
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
  v-row
    v-col(cols="12")
      v-expansion-panels.rounded-lg.overflow-hidden(theme="dark")
        v-expansion-panel(:title="language.name" v-for="(language, index) in store.curriculo.languages")
          v-expansion-panel-text
            v-slider.mb-3(
              color="green"
              track-color="#000"
              :ticks="languagesLevel"
              :max="2"
              step="1"
              show-ticks="always"
              hide-details="auto"
              v-model="store.curriculo.languages[index].percent"
            )
</template>