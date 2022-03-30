export const scrollTo = {
  bind (el, binding) {
    el.addEventListener("click", () => scrollFn(binding.value))
  },
  update (el, binding) {
    el.addEventListener("click", () => scrollFn(binding.value))
  },
  unbind (el, binding) {
    el.removeEventListener("click", () => scrollFn(binding.value))
  }
}

function scrollFn(value) {
  let target = document.querySelector(value)
  if(target) {
    let move = window.scrollY + target.getBoundingClientRect().y
    window.scrollTo(0, move)
  }
}
