<script setup>
import { useCurriculoStore } from "@/stores/curriculo";
import { RouterLink } from "vue-router";
import { ref, watch } from "vue";

const store = useCurriculoStore();
const menuStatus = ref(false);

watch(menuStatus, () => {
  document.body.classList.toggle('menu-active');
  document.documentElement.classList.toggle('menu-active');
})

function loginLogout() {
  localStorage.removeItem('curriculo-auth');
  window.location.reload();
}
</script>

<template lang="pug">
v-btn.nav-btn(color="#222" @click="menuStatus = !menuStatus" icon)
  v-icon(v-if="!menuStatus") mdi-menu
  v-icon(v-if="menuStatus") mdi-close
nav.nav(:class="{ active: menuStatus }" @click="menuStatus = false")
  RouterLink.btn-curriculo(to="/")
    v-icon.mr-3 mdi-plus
    | Criar Currículo
  RouterLink(to="/about")
    v-icon.mr-3 mdi-information
    | Informações
  //- RouterLink(to="/hash")
  //-   v-icon.mr-3 mdi-pound
  //-   | Hash
  RouterLink(to="/help")
    v-icon.mr-3 mdi-heart
    | Ajude
  //- v-btn.btn-logout(outlined color="#222" @click="loginLogout")
  //-   v-tooltip(
  //-     activator="parent"
  //-     location="top"
  //-   ) Logout
  //-   v-icon.mr-3 mdi-logout
  //-   span Logout
</template>

<style scoped lang="stylus">
.btn-curriculo
  display none !important
.nav-btn
  display none
.nav
  width 100%
  font-size 12px
  display flex
  justify-content flex-end
  a
    display inline-block
    padding 1rem
    border-radius 10px
    margin .2rem
    border 1px solid var(--color-border)
    &:first-of-type
      margin-left 0
    &.router-link-exact-active
      color #fff
      background-color var(--vt-c-red-light)
@media (min-width 640px)
  .btn-logout
    padding 1.8rem 1rem
    margin 0.2rem
    border-radius 100px
    span
      display none
    .v-icon
      margin 0 !important
      padding 0 !important
@media (max-width 640px)
  .btn-curriculo
    display block !important
  .nav-btn
    display block
    z-index 9999
    position absolute
    right 0
    top 0
  .nav
    position fixed
    top 0
    bottom 0
    right 0
    left 0
    z-index 999
    opacity 0
    transition .5s opacity
    filter blur(10px)
    padding 6rem 1rem 1rem
    pointer-events none
    backdrop-filter blur(10px) grayscale(1)
    justify-content flex-start
    flex-flow column
    a
      width calc(100% - 2rem)
      background #fff
      margin .5rem 1rem !important
      background #fff
      font-weight bold
    &.active
      opacity 1
      filter blur(0px)
      pointer-events all
</style>
