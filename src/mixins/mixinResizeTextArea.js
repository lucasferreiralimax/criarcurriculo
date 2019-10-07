export const mixinResizeTextArea = {
  methods: {
    resizeTextArea (input, key) {
      let $ref = this.$refs[input]
      if(key >= 0) {
        $ref[key].style.cssText = 'height:auto; padding:0';
        $ref[key].style.cssText = 'height:' + ($ref[key].scrollHeight + 2) + 'px';
      } else {
        $ref.style.cssText = 'height:auto; padding:0';
        $ref.style.cssText = 'height:' + ($ref.scrollHeight + 2) + 'px';
      }
    }
  }
}
