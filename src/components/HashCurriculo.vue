<script setup>
import CryptoJS from 'crypto-js';
import Box from "@/components/Box.vue";
import BitcoinIcon from "@/components/icons/IconBitcoin.vue";
import DocumentationIcon from "@/components/icons/IconDocumentation.vue";
import { ref } from "vue";
import { useCurriculoStore } from "@/stores/curriculo";
import { useHash } from '@/helpers/useHash.js'
import { useRouter } from 'vue-router'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const store = useCurriculoStore();
const { decodeHash } = useHash();
const router  = useRouter();

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCEsuYVqpEsfI1xqrsRXqHJ-5KWrl1p620",
  authDomain: "criar-curriculo.firebaseapp.com",
  databaseURL: "https://criar-curriculo.firebaseio.com",
  projectId: "criar-curriculo",
  storageBucket: "criar-curriculo.appspot.com",
  messagingSenderId: "145421552330",
  appId: "1:145421552330:web:0efd6c5d14d8156b9e8233",
  measurementId: "G-X0MHVFL3NS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const snackbar = ref(false);
const hashInput = ref('');
const hashOnly = localStorage.getItem('curriculo-store');
// console.log(app)
// console.log(analytics)

function hashRender() {
  if (hashInput) {
    try {
      const words_decode = decodeHash(hashInput.value);
      const words_parse = JSON.parse(words_decode?.toString(CryptoJS.enc.Utf8));
  
      if (words_parse) {
        store.curriculo = words_parse.curriculo;
        localStorage.setItem('curriculo-store', hashInput.value);
  
        router.push('/');
  
        console.log(hashInput.value);
        console.log(JSON.parse(words_decode?.toString(CryptoJS.enc.Utf8)));
      }
    } catch (error) {
      snackbar.value = true;
    }
  }
}

function copyHash({target: {textContent}}) {
  navigator.clipboard.writeText(textContent);
}
</script>

<template lang="pug">
Box(collapse="true" select="true")
  template(#icon)
    BitcoinIcon
  template(#heading) Atualizar HASH
  | Insira a hash para atualizar o aplicativo
  v-text-field.mt-5(label="Hash code" v-model="hashInput" hide-details="auto" clearable)
  v-btn.mt-5(v-if="hashInput" color="success" variant="tonal" block @click="hashRender")
    | Atualizar

Box(v-if="hashOnly" select="true")
  template(#icon)
    DocumentationIcon
  template(#heading) Atual HASH
  | Essa hash pode ser usada para atualizar o aplicativo futuramente
  p.mt-5
    b Sua Hash atual:
    br
    span.hash.wd-break(@click="copyHash") {{ hashOnly }}
v-snackbar(v-model="snackbar" color="error")
  | Por gentileza coloque uma hash válida
  template(v-slot:actions)
    v-btn(color="black" variant="text" @click="snackbar = false") Fechar
</template>

<style lang="stylus">
.hash
  background #fff
  color #222
  padding 1rem
  border-radius 6px
  margin 1rem 0
  display inline-block
  cursor pointer
</style>