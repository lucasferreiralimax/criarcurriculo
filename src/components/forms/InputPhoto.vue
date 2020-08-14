<template lang="pug">
  label(for="GET-photo")
    | {{ $t('form.photo') }}:
    button.btn.large.photo(type="button" :aria-label="$t('form.photo_button')" @click="focusInput")
      svg(xmlns="http://www.w3.org/2000/svg" viewBox="0 0 548.165 548.165")
        path(d="M526.76 131.045c-14.277-14.274-31.498-21.413-51.675-21.413h-63.953l-14.558-38.826c-3.618-9.325-10.229-17.368-19.846-24.128-9.613-6.757-19.462-10.138-29.551-10.138H200.996c-10.088 0-19.939 3.381-29.552 10.138-9.613 6.76-16.225 14.803-19.842 24.128l-14.56 38.826H73.089c-20.179 0-37.401 7.139-51.678 21.413C7.137 145.32 0 162.544 0 182.721v255.813c0 20.178 7.137 37.404 21.411 51.675 14.277 14.277 31.5 21.416 51.678 21.416h401.989c20.177 0 37.397-7.139 51.675-21.416 14.273-14.271 21.412-31.497 21.412-51.675V182.721c.004-20.177-7.135-37.401-21.405-51.676zM364.446 400.993c-25.029 25.03-55.147 37.548-90.362 37.548s-65.331-12.518-90.362-37.548c-25.031-25.026-37.544-55.151-37.544-90.358 0-35.218 12.517-65.333 37.544-90.364 25.028-25.031 55.148-37.544 90.362-37.544s65.333 12.516 90.362 37.544c25.03 25.028 37.545 55.146 37.545 90.364 0 35.207-12.514 65.329-37.545 90.358z")
        path(d="M274.084 228.403c-22.651 0-42.018 8.042-58.102 24.128-16.084 16.084-24.126 35.448-24.126 58.104 0 22.647 8.042 42.014 24.126 58.098 16.084 16.081 35.45 24.123 58.102 24.123 22.648 0 42.017-8.042 58.101-24.123 16.084-16.084 24.127-35.45 24.127-58.098 0-22.655-8.043-42.019-24.127-58.104-16.083-16.085-35.453-24.128-58.101-24.128z")
      | {{ user.photo ? $t('form.photo_button-trade') : $t('form.photo_button') }}
    input#GET-photo(name="photo" type="file" @input="setImage($event)")
    .right
      button.btn.delete.bullet.small.photo(type="button" @click="removeImage($event)" v-if="user.photo" :aria-label="$t('aria-label.photo_remove')")
        svg(viewBox="0 0 329.269 329" xmlns="http://www.w3.org/2000/svg")
          path(d="M194.8 164.77L323.013 36.555c8.343-8.34 8.343-21.825 0-30.164-8.34-8.34-21.825-8.34-30.164 0L164.633 134.605 36.422 6.391c-8.344-8.34-21.824-8.34-30.164 0-8.344 8.34-8.344 21.824 0 30.164l128.21 128.215L6.259 292.984c-8.344 8.34-8.344 21.825 0 30.164a21.266 21.266 0 0015.082 6.25c5.46 0 10.922-2.09 15.082-6.25l128.21-128.214 128.216 128.214a21.273 21.273 0 0015.082 6.25c5.46 0 10.922-2.09 15.082-6.25 8.343-8.34 8.343-21.824 0-30.164zm0 0")
</template>

<script>
import { mixinUpdateStore } from '@/mixins/mixinUpdateStore.js'

export default {
  name: 'input-photo',
  mixins: [mixinUpdateStore],
  methods: {
    focusInput () {
      document.querySelector('#GET-photo').click()
    },
    setImage (e) {
      const file = e.target.files[0]

      if (!file.type.includes('image/')) {
        alert('Please select an image file')
        return
      }

      if (typeof FileReader === 'function') {
        const reader = new FileReader()

        reader.onload = (event) => {
          this.imgSrc = event.target.result
          this.$store.commit('updatePhoto', this.imgSrc)
          this.updateStore()
        }
        reader.readAsDataURL(file)
      } else {
        alert('Sorry, FileReader API not supported')
      }
    }
  }
}
</script>
<style lang="stylus">
.figure-photo
  margin 1em 0
  width 100%
  height 200px
  overflow hidden
  border-radius 20px
  position relative
  img
    border-radius 20px
    margin 0
    width 100%
    position absolute
    top 0
.btn.large.photo
  margin .9em 0 0
  padding .8em 0
  pointer-events none
  background #eee
  border 0
#GET-photo
  display none
.btn.delete.bullet.small.photo
  position absolute
  right 10px
  top 5px
  svg
    margin-right 0
    height 15px
+htmlDir()
  .btn.delete.bullet.small.photo
    left 17px
    right auto
</style>
