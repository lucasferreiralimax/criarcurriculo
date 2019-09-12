export const mixinResizeTextArea = {
  methods: {
    resizeTextArea (input, key) {
      let $ref = this.$refs[input]
      if(key >= 0) {
        $ref[key].style.height = $ref[key].scrollHeight + 'px'
      } else {
        $ref.style.height = $ref.scrollHeight + 'px';
      }
    }
  }
}
