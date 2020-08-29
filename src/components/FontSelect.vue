<template lang="pug">
section.fontType
  h2 {{ $t('layout.title_font') }}
  label.btn.fontSelect(for="fonttype")
    el-select#fonttype(v-model="fonttype" placeholder="Select" :popper-append-to-body="false")
      el-option(value="normal") Normal
      el-option(value="abel") Abel
      el-option(value="play") Play
      el-option(value="rajdhani") Rajdhani
    i.icon
      svg(xmlns="http://www.w3.org/2000/svg" viewBox="0 0 573.852 573.852" width="29" height="29" fill="#fff")
        path(d="M217.667 83.129c-1.632-4.488-4.692-6.732-9.18-6.732H129.54c-4.488 0-7.548 2.244-9.18 6.732L.408 477.257c-.816 3.672-.408 6.321 1.224 7.953 1.632 2.448 4.284 3.675 7.956 3.675H80.58c4.896 0 7.956-2.244 9.18-6.732l20.196-70.992h118.117l20.196 70.992c1.224 4.488 4.08 6.732 8.568 6.732h72.213c2.448 0 4.593-.817 6.429-2.448s2.754-3.876 2.754-6.732c0-.814-.409-2.446-1.227-4.896L217.667 83.129zm-89.351 251.532l40.392-144.432 41.004 144.432h-81.396zm416.771-113.832c-19.176-17.544-46.103-26.316-80.781-26.316-21.624 0-41.616 3.57-59.977 10.709-18.361 7.14-34.476 17.646-48.348 31.518-3.267 3.264-3.876 6.936-1.836 11.016l22.644 39.167c1.225 2.447 3.467 4.08 6.732 4.896 2.854.817 5.508 0 7.956-2.448 18.768-19.176 39.575-28.764 62.424-28.764 29.375 0 44.062 14.077 44.062 42.228v17.748c-17.135-13.464-38.351-20.193-63.646-20.193-11.424 0-22.746 1.937-33.966 5.812-11.222 3.876-21.219 9.792-29.988 17.748-8.773 7.956-15.912 18.157-21.42 30.603-5.508 12.442-8.262 27.027-8.262 43.758 0 16.317 2.649 30.6 7.953 42.84 5.307 12.24 12.444 22.542 21.423 30.906 8.975 8.362 18.971 14.688 29.985 18.972 11.018 4.284 22.44 6.426 34.272 6.426s23.255-1.836 34.271-5.508c11.019-3.672 20.811-8.975 29.376-15.912v5.508c0 2.448.918 4.593 2.754 6.429 1.839 1.836 3.979 2.754 6.429 2.754h57.525c2.448 0 4.592-.918 6.429-2.754 1.836-1.836 2.754-3.979 2.754-6.429v-186.05c.001-32.232-9.587-57.12-28.765-74.664zm-47.123 198.287c-8.976 13.872-23.256 20.811-42.84 20.811-11.832 0-21.215-3.774-28.149-11.322-6.938-7.548-10.404-17.443-10.404-29.685 0-12.237 3.467-22.233 10.404-29.985 6.935-7.752 16.317-11.628 28.149-11.628 5.712 0 12.854 1.325 21.42 3.978 8.568 2.653 15.708 8.67 21.42 18.054v39.777z")
</template>

<script>
export default {
  created () { this.setFont() },
  mounted () {
    let fontSelectNode = document.querySelector('.fontSelect')

    for(let item of fontSelectNode.querySelectorAll('.el-select-dropdown__item')) {
      item.setAttribute('id', item.innerHTML.toLowerCase())
    }
  },
  data () {
    return {
      fonts: [],
      fonttype: 'normal'
    }
  },
  methods: {
    clearRender () {
      document.querySelector('.view').classList = "view"
      document.querySelector('.fontSelect').classList = "btn fontSelect"
    },
    setFont () {
      let font = localStorage.getItem('fontSelect');
      !font ? localStorage.setItem('fontSelect', 'normal') : this.fonttype = font;
    }
  },
  watch: {
    fonttype (val) {
      this.clearRender()
      localStorage.setItem('fontSelect', val)
      document.querySelector('.view').classList.add(val)
      document.querySelector('.fontSelect').classList.add(val)
    }
  }
}
</script>

<style lang="stylus">
.fontType
  background transparent
  padding 0 0 1em
  margin 0 auto
  h2
    color #fff
    font-size 1em
    margin-bottom 1em
    text-shadow 0 2px 1px rgba(0,0,0,0.4)
    text-align center
.fontSelect
  border-radius 6px
  display flex
  position relative
  padding-bottom 0 !important
  z-index 9
  .el-select
    width 100%
  &.btn select
    width 100%
  .el-select-dropdown__item
    font-size 1.5em
  #abel,
  &.abel input
    font-family 'Abel', sans-serif
  #play,
  &.play input
    font-family 'Play', sans-serif
  #rajdhani,
  &.rajdhani input
    font-family 'Rajdhani', sans-serif
</style>
