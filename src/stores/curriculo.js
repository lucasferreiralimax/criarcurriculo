import { defineStore } from "pinia";
import CryptoJS from 'crypto-js';
import stateCurriculo from "./state_curriculo";
import { useHash } from '@/helpers/useHash.js'

const { decodeHash } = useHash();
let words_decode = null;

if (localStorage.getItem('curriculo-store')) {
  words_decode = decodeHash(localStorage.getItem('curriculo-store'));
}

const state = localStorage.getItem('curriculo-store')
  ? JSON.parse(words_decode?.toString(CryptoJS.enc.Utf8))
  : stateCurriculo;

Object.assign(state, {
  shanks: Boolean(localStorage.getItem('curriculo-auth'))
})

export const useCurriculoStore = defineStore({
  id: "curriculo",
  state: () => state,
  getters: {
    getCurriculo: () => state,
  }
});