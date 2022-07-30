import uniqueid from "lodash/uniqueid";

const stateCurriculo = {
  curriculo: {
    name: "",
    age: 18,
    gender: '',
    maritial: '',
    address: {
      cep: null,
      city: null,
      country: null,
    },
    formation: [],
    experience: [],
    languages: [],
  }
};

export default stateCurriculo;