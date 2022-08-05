<script setup>
import axios from 'axios'
import { api } from '@/api'
import { ref, watch } from "vue";
import Box from "@/components/Box.vue";
import HomeIcon from "@/components/icons/IconHome.vue";
import { useCurriculoStore } from "@/stores/curriculo";

const HTTP = axios.create({ baseURL: api.viacep })
const store = useCurriculoStore();

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
</script>

<template lang="pug">
Box.address
  template(#icon)
    HomeIcon
  template(#heading) Endereço
  v-row
    v-col.pt-0(cols="12")
      v-checkbox(
        v-model="store.curriculo.address.travel"
        label="Disponível para viagem?"
        hide-details="auto"
      )
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
</template>
