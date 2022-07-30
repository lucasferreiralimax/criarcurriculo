import { defineStore } from "pinia";
import stateCurriculo from "./state_curriculo";

const state = localStorage.getItem('curriculo-store')
  ? JSON.parse(localStorage.getItem('curriculo-store'))
  : stateCurriculo;

export const useCurriculoStore = defineStore({
  id: "curriculo",
  state: () => state,
  getters: {
    getCurriculo: () => state,
  }
});