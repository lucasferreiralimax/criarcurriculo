<script setup>
import Box from "@/components/Box.vue";
import BitcoinIcon from "@/components/icons/IconBitcoin.vue";
import DonateIcon from "@/components/icons/IconDonate.vue";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

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

// console.log(app)
// console.log(analytics)

function copyValue({target: {textContent}}) {
  navigator.clipboard.writeText(textContent);
}

function copyBitcoin({target}) {
  navigator.clipboard.writeText(target.alt);
}
</script>

<template lang="pug">
main
  Box(collapse="true" select="true")
    template(#icon)
      BitcoinIcon
    template(#heading) Bitcoin
    p Faça uma doação em bitcoin
    p Carteira para doações &nbsp;
      a.pointer( @click="copyValue" href="bitcoin:BC1QYRKAGKLQAJSF64MJGJ0L99WSUHVY9CNHHYSA82?message=doa%C3%A7%C3%A3o")
        strong.pointer bc1qyrkagklqajsf64mjgj0l99wsuhvy9cnhhysa82
    img.pointer(@click="copyBitcoin" width="250" src="@/assets/bitcoin.png" alt="bitcoin:BC1QYRKAGKLQAJSF64MJGJ0L99WSUHVY9CNHHYSA82?message=doa%C3%A7%C3%A3o")
  Box(collapse="true" select="true")
    template(#icon)
      DonateIcon
    template(#heading) Pix
    | Faça uma doação em pix para &nbsp;
    strong.pointer(@click="copyValue") 2lembre@gmail.com &nbsp;
    | ou &nbsp;
    strong.pointer(@click="copyValue") lucasferreiralimax@gmail.com
</template>

<style lang="stylus" scoped>
img
  display block
  margin-top 1rem
  border-radius 10px
</style>
