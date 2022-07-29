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
    formation: {
      institute: null,
      course: null,
      dateFirst: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
      dateEnd: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
      about: null,
      ref: null,
    },
    experience: {
      work: null,
      company: null,
      dateFirst: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
      dateEnd: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
      about: null,
      ref: null,
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