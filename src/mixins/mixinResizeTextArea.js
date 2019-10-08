export const mixinResizeTextArea = {
  methods: {
    resizeTextArea (input) {
      let $ref = this.$refs[input]
      $ref.style.cssText = 'height:auto; padding:0';
      $ref.style.cssText = 'height:' + ($ref.scrollHeight + 2) + 'px';
    }
  }
}
