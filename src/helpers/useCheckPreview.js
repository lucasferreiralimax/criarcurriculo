import { ref, watch } from "vue";
import { useCurriculoStore } from "@/stores/curriculo";

export function useCheckPreview() {
  const store = useCurriculoStore();
  const checkPreview = ref(Boolean(
    store.curriculo.name ||
    store.curriculo.age ||
    store.curriculo.gender ||
    store.curriculo.maritial ||
    store.curriculo.about ||
    store.curriculo.address.cep ||
    store.curriculo.address.city ||
    store.curriculo.address.country ||
    store.curriculo.languages.length > 0 ||
    store.curriculo.formation.length > 0 ||
    store.curriculo.experience.length > 0
  ));

  watch(store, () => {
    checkPreview.value = Boolean(
      store.curriculo.name ||
      store.curriculo.age ||
      store.curriculo.gender ||
      store.curriculo.maritial ||
      store.curriculo.about ||
      store.curriculo.address.cep ||
      store.curriculo.address.city ||
      store.curriculo.address.country ||
      store.curriculo.languages.length > 0 ||
      store.curriculo.formation.length > 0 ||
      store.curriculo.experience.length > 0
    );
  });

  return { checkPreview }
}