export const resizeTextArea = {
  bind (el) { el.addEventListener("click", () => resize(el)) },
  componentUpdated(el) { resize(el) }
}

function resize(el) {
  el.style.cssText = 'height:auto; padding:0'
  el.style.cssText = 'height:' + (el.scrollHeight < 50 ? 50 : el.scrollHeight) + 'px'

  console.log(el.scrollHeight)
}
