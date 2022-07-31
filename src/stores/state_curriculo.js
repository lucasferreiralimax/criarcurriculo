import uniqueid from "lodash/uniqueid";

const stateCurriculo = {
  curriculo: {
    name: "",
    age: null,
    gender: '',
    maritial: '',
    about: '',
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