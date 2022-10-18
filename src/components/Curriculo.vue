<script setup>
import { watch } from "vue";
import Personal from "./curriculo/Personal.vue";
import Contact from "./curriculo/Contact.vue";
import Address from "./curriculo/Address.vue";
import Languages from "./curriculo/Languages.vue";
import Formation from "./curriculo/Formation.vue";
import Experience from "./curriculo/Experience.vue";
import { useCurriculoStore } from "@/stores/curriculo";
import { useCheckPreview } from '@/helpers/useCheckPreview.js'
import { useHash } from '@/helpers/useHash.js'
import stateCurriculo, { stateEmpety } from "../stores/state_curriculo";

const store = useCurriculoStore();
const { checkPreview } = useCheckPreview();
const { encodeHash } = useHash();

watch(store, () => {
  const words = encodeHash(JSON.stringify(store.getCurriculo));
  localStorage.setItem('curriculo-store', words?.toString());
})

watch(store.curriculo.gender, () => {
  store.curriculo.maritial = '';
})

function deleteAll() {
  localStorage.removeItem('curriculo-store');
  store.curriculo = stateEmpety.curriculo;

  // const words = encodeHash(JSON.stringify(store.getCurriculo));
  // localStorage.setItem('curriculo-store', words?.toString());
}
</script>

<template lang="pug">
Personal
Contact
Address
Languages
Formation
Experience
v-btn.btn.my-5.rounded-lg(block @click="deleteAll" color="error" variant="flat" v-if="checkPreview")
  v-icon.icon mdi-delete
  | Apagar Tudo!
</template>

<style lang="stylus">
.divider
  margin-bottom 3rem
  filter invert(1)

.btn
  padding 1.5rem 1rem
  .icon
    margin-right 1rem
    transform scale(1.5)

.btn-delete
  position absolute
  top 12px
  right 12px
  transform scale(.8)
</style>
