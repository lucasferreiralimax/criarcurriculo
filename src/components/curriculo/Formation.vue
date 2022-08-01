<script setup>
import { uniqueId } from "lodash";
import Box from "@/components/Box.vue";
import DocumentationIcon from "@/components/icons/IconDocumentation.vue";
import { useCurriculoStore } from "@/stores/curriculo";

const store = useCurriculoStore();

function removeFormation(id) {
  store.curriculo.formation = store.curriculo.formation.filter((item) => item.id !== id);
}

function addFormation() {
  store.curriculo.formation.push({
    id: uniqueId('formation_'),
    institute: null,
    course: null,
    dateFirst: null,
    dateEnd: null,
    about: null,
    ref: null,
  });
}
</script>

<template lang="pug">   
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
v-btn.btn.my-5.py-8.rounded-lg(
  block
  type="button" @click="addFormation()"
  color="success"
  variant="tonal"
)
  v-icon.icon mdi-plus-circle
  | Adicionar formação
</template>