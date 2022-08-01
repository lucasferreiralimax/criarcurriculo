<script setup>
import { uniqueId } from "lodash";
import Box from "@/components/Box.vue";
import ToolingIcon from "@/components/icons/IconTooling.vue";
import { useCurriculoStore } from "@/stores/curriculo";

const store = useCurriculoStore();

function removeExperience(id) {
  store.curriculo.experience = store.curriculo.experience.filter((item) => item.id !== id);
}

function addExperience() {
  store.curriculo.experience.push({
    id: uniqueId('experience_'),
    work: null,
    company: null,
    dateFirst: null,
    dateEnd: null,
    about: null,
    ref: null,
  });
}
</script>

<template lang="pug">
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
v-btn.btn.py-8.rounded-lg(
  block
  type="button" @click="addExperience()"
  color="success"
  variant="tonal"
)
  v-icon.icon mdi-plus-circle
  | Adicionar experiência
</template>