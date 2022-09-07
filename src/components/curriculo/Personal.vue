<script setup>
import { ref } from "vue";
import Box from "@/components/Box.vue";
import UserIcon from "@/components/icons/IconUser.vue";
import { useCurriculoStore } from "@/stores/curriculo";

const store = useCurriculoStore();
const genders = ref(["Mulher", "Homem", "Unisex"]);
const maritials_man = ref(["Solteiro", "Casado", "Divorciado", "Viuvo"]);
const maritials_woman = ref(["Solteira", "Casada", "Divorciada", "Viuva"]);
const maritials_unix = ref(["Solteiro(a)", "Casado(a)", "Divorciado(a)", "Viuvo(a)"]);
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
      v-file-input.pointer(label="Foto" accept="image/*" filled prepend-icon="" append-inner-icon="mdi-camera" hide-details="auto" clearable)
  v-row(v-if="(store.curriculo.name && store.curriculo.age && store.curriculo.gender && store.curriculo.maritial)")
    v-col(cols="12")
      v-textarea.mt-2(label="Escreva sobre você..." v-model="store.curriculo.about" auto-grow variant="outlined" hide-details="auto")
</template>
