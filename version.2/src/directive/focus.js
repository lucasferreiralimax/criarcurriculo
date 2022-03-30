export const focusLabel = {
  bind (el) {
    el.addEventListener("focus", () => focus(el))
    el.addEventListener("blur", () => blur(el))
  },
  unbind (el) {
    el.removeEventListener("focus", () => focus(el))
    el.removeEventListener("blur", () => blur(el))
  }
}

function focus(el) { el.parentElement.classList.add("active") }
function blur(el) { el.parentElement.classList.remove("active") }
