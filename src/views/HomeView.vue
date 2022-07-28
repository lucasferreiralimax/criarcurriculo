<script setup>
import Curriculo from "@/components/Curriculo.vue";
import Preview from "@/components/Preview.vue";
import { useCurriculoStore } from "@/stores/curriculo";
const curriculo = useCurriculoStore();

function magicLuffy() {
    const lucas = {
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
      languages: ['test'],
    };
    console.log(curriculo);
    console.log(lucas);
    curriculo.name = 'Abraham Lincoln';
    localStorage.setItem('curriculo', JSON.stringify(lucas));
}
</script>

<template lang="pug">
Curriculo
button(@click="magicLuffy") Magic
Preview
//- h1 {{ curriculo.name }}
//- h2 {{ curriculo.age }}
</template>
