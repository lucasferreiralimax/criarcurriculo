export const mixinResizeTextArea = {
  methods: {
    resizeTextArea (input) {
      let $ref = this.$refs[input]
      this.$refs[input].style.cssText = 'height:auto; padding:0';
      this.$refs[input].style.cssText = 'height:' + ($ref.scrollHeight + 2) + 'px';
    }
  }
}
