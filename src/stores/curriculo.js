import { defineStore } from "pinia";

const state = localStorage.getItem('curriculo')
  ? JSON.parse(localStorage.getItem('curriculo'))
  : {
    name: "Lucas",
    age: 27,
    gender: '',
    maritial: '',
    address: {
      cep: null,
      number: null,
      street: null,
      city: null,
      country: null,
    },
    languages: [],
  };

export const useCurriculoStore = defineStore({
  id: "curriculo",
  state: () => state,
  getters: {
    getCurriculo: () => state,
  }
});