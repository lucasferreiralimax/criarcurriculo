import { defineStore } from "pinia";

export const useCurriculoStore = defineStore({
  id: "curriculo",
  state: () => ({
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
  }),
});
