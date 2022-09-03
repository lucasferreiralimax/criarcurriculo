<script setup>
import { ref } from "vue";
const props = defineProps(['collapse', 'select']);
const collapse = ref(props.collapse);
</script>
<template lang="pug">
.box(:class="{ 'no-select': !select }")
  .actions
    slot(name="actions")
  .title(@click="collapse = !collapse")
    i
      slot(name="icon")
    h3
      slot(name="heading")
  .details(v-show="collapse")
    slot
</template>

<style lang="stylus">
.box
  min-height 60px
  border 1px solid rgba(#fff, .1)
  border-radius 10px
  margin 1rem 0
  transition .5s background
  &.no-select
    user-select none
  &:hover
    background rgba(#fff, .1)
    .title
      & > i
        border-color var(--vt-c-red)
      h3, & > i svg
        color var(--vt-c-red)
    .actions
      opacity 1
      filter blur(0px)
  .actions
    opacity 0
    filter blur(10px)
    transition .5s opacity
    z-index 99
  .title
    display flex
    align-items center
    cursor pointer
    padding 1rem
    & > i
      display inline-flex
      place-boxs center
      place-content center
      align-items center
      width 32px
      height 32px
      color var(--color-text)
      transition .5s border-color
      margin-right 1rem
      svg
        transition .5s all
  .details
    margin-bottom 1rem
    padding 1rem

  h3
    font-size 1.2rem
    font-weight 500
    margin-bottom 0.4rem
    color var(--color-heading)
    transition .5s color

@media (min-width 1024px)
  .box
    min-height 80px
    .title
      margin-top 0.4rem
      padding .5rem
      & > i
        margin 0 1rem 0 -2rem
        border 1px solid var(--color-border)
        background var(--color-background)
        border-radius 8px
        width 50px
        height 50px
        display flex
        align-items center
        justify-content center
</style>
