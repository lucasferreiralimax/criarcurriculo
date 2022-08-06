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

function login(response) {
  console.log(response)
  localStorage.setItem('login', 'test');
  window.location = '/';
  
  console.log('testestes');
}

google.accounts.id.initialize({
  client_id: '509374940310-45boijq03lio03gmv3cprn31i72h7jgs.apps.googleusercontent.com',
  callback: login
});

google.accounts.id.prompt();

</script>

<template>
  <main>
    <Box collapse="true" select="true">
      <template #icon>
        <BitcoinIcon />
      </template>
      <template #heading>Login</template>
      <!-- <v-text-field class="mb-3" label="E-mail" type="text" hide-details="auto" clearable />
      <v-text-field class="mb-3" label="Senha" type="password" hide-details="auto" clearable /> -->
      <v-btn color="success" block @click="login">Entrar</v-btn>
    </Box>
  </main>
</template>
