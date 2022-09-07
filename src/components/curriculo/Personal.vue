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


function focusInputPhoto () {
  document.querySelector('.photo input').click()
}

function removeInputPhoto () {
  store.curriculo.photo = {
    name: '',
    data: ''
  }
}

function setImage(e) {
  const file = e.target.files[0]
  if (!file.type.includes('image/')) {
    alert('Please select an image file')
    return
  }
  if (typeof FileReader === 'function') {
    const reader = new FileReader()
    reader.onload = (event) => {
      store.curriculo.photo = {
        name: file.name,
        data: event.target.result
      }
    }
    reader.readAsDataURL(file)
  } else {
    alert('Sorry, FileReader API not supported')
  }
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
  v-row(v-if="(store.curriculo.name && store.curriculo.age && store.curriculo.gender && store.curriculo.maritial)")
    v-col(cols="12")
      v-textarea.mt-2(label="Escreva sobre você..." v-model="store.curriculo.about" auto-grow variant="outlined" hide-details="auto")
  v-row(v-if="(store.curriculo.name && store.curriculo.age && store.curriculo.gender && store.curriculo.maritial)")
    v-col(cols="12" sm="6")
      v-btn.btn.rounded-lg(block @click="focusInputPhoto" color="success" variant="flat")
        v-icon.icon mdi-photo
        | {{ !store.curriculo.photo.data ? 'Adicionar Foto' : 'Trocar Foto' }}
    v-col(cols="12" sm="6")
      v-btn.btn.rounded-lg(v-if='store.curriculo.photo.data' block @click="removeInputPhoto" color="error" variant="flat")
        v-icon.icon mdi-photo
        | Remover Foto
    v-col(cols="12" v-if="store.curriculo.photo.data")
      figure.photo-form
        img(:src="store.curriculo.photo.data" :alt="store.curriculo.name" width="200")
    v-file-input.photo.pointer(@input="setImage($event)" label="Foto" accept="image/*")
</template>

<style lang="stylus">
.photo
  display none !important

.photo-form
  width 150px
  height 150px
  overflow hidden
  margin 0 auto
  border-radius 100%
  img
    width 100%
    height 100%
</style>
