<template lang="pug">
  footer.footer
    logo-app.credits.curriculo
    div.credits.L
      svg#paz.paz(xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="40" height="40" fill="#fff")
        path(d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-18a8 8 0 1 0 0 16 4 4 0 1 1 0-8 4 4 0 1 0 0-8zm0 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0-8a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" fill-rule="evenodd")
      svg.brasil(xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="40" height="40")
        circle(cx="256" cy="256" r="256" fill="#6da544")
        path(fill="#ffda44" d="M256 100.174L467.478 256 256 411.826 44.522 256z")
        circle(cx="256" cy="256" r="89.043" fill="#f0f0f0")
        g(fill="#0052b4")
          path(d="M211.478 250.435c-15.484 0-30.427 2.355-44.493 6.725.623 48.64 40.227 87.884 89.015 87.884 30.168 0 56.812-15.017 72.919-37.968-27.557-34.497-69.958-56.641-117.441-56.641zM343.393 273.06a89.45 89.45 0 0 0 1.651-17.06c0-49.178-39.866-89.043-89.043-89.043-36.694 0-68.194 22.201-81.826 53.899a183.693 183.693 0 0 1 37.305-3.812c51.717-.001 98.503 21.497 131.913 56.016z")
</template>

<script>
import LogoApp from '@/components/base/Logo'

export default {
  name: 'footer-app',
  components: { LogoApp },
}
</script>

<style lang="stylus">
.footer
  font-weight normal
  padding 20px 0 100px
  text-align center
  position relative
  z-index 9
  pointer-events none
  display flex
  align-items center
  justify-content center
  &.home
    +tablet()
      padding 20px 0 50px
      width 50%
      margin-left 50%
      clear both
    +desktop()
      width 33%
.credits
  transition 2s all
  user-select none
  pointer-events all
  cursor crosshair
  svg
    transition 2s all
  &.curriculo
    position relative
    transition .5s all
    &:hover
      ~ .L
        .paz
          opacity 0
        .brasil
          opacity 1
    svg
      filter drop-shadow(0 2px 2px rgba(#fff, .5))
.L
  width 50px
  height 50px
  box-sizing border-box
  &:after
    content ''
    display table
    clear both
  .paz, .brasil
    transition .3s all
    position absolute
    filter drop-shadow(0 2px 2px rgba(#000, .5))
  .paz
    opacity 1
  .brasil
    opacity 0
  &:hover
    .paz
      opacity 0
    .brasil
      opacity 1
</style>
