<template lang="pug">
  label(for="GET-photo")
    .right
      button.btn.delete.bullet.small.photo.left(type="button" @click="removeImage($event)" v-if="user.photo" :aria-label="$t('aria-label.photo_remove')")
        i -
    | {{ $t('form.photo') }}
    input#GET-photo(name="photo" type="file" @input="setImage($event)")
</template>

<script>
import { mixinUpdateStore } from '@/mixins/mixinUpdateStore.js'

export default {
  name: 'input-photo',
  mixins: [mixinUpdateStore],
  methods: {
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
    },
    removeImage () {
      this.$store.commit('updatePhoto', '')
      document.querySelector('#GET-photo').value = ''
      this.updateStore()
    }
  }
}
</script>
