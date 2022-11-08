<template lang="pug">
label(for="GET-photo")
  | {{ $t('form.photo') }}:
  button.btn.large.photo(type="button" :aria-label="$t('form.photo_button')" @click="focusInput")
    IconPhoto
    | {{ user.photo ? $t('form.photo_button-trade') : $t('form.photo_button') }}
  input#GET-photo(name="photo" type="file" @input="setImage($event)")
  .right
    button.btn.delete.bullet.small.photo(type="button" @click="removeImage($event)" v-if="user.photo" :aria-label="$t('aria-label.photo_remove')")
      IconDelete
</template>

<script>
import { mixinUpdateStore } from '@/mixins/mixinUpdateStore.js'
import IconPhoto from '@/components/icons/icon-photo'
import IconDelete from '@/components/icons/icon-delete'

export default {
  name: 'app-input-photo',
  mixins: [mixinUpdateStore],
  components: {
    IconPhoto,
    IconDelete
  },
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
  padding 1em 0
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
    transform scale(.7)
+htmlDir()
  .btn.delete.bullet.small.photo
    left 17px
    right auto
</style>
