import { defineStore } from "pinia";
import stateCurriculo from "./state_curriculo";

const state = localStorage.getItem('curriculo')
  ? JSON.parse(localStorage.getItem('curriculo'))
  : stateCurriculo;

export const useCurriculoStore = defineStore({
  id: "curriculo",
  state: () => state,
  getters: {
    getCurriculo: () => state,
  }
});