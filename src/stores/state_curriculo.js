import uniqueid from "lodash/uniqueid";

const stateCurriculo = {
  curriculo: {
    name: "Lucas",
    age: 27,
    gender: '',
    maritial: '',
    address: {
      cep: null,
      number: null,
      street: null,
      city: null,
      country: null,
    },
    formation: [
      {
        id: uniqueid('formation_'),
        institute: null,
        course: null,
        dateFirst: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
        dateEnd: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
        about: null,
        ref: null,
      },
    ],
    experience: [
      {
        id: uniqueid('experience_'),
        work: null,
        company: null,
        dateFirst: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
        dateEnd: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
        about: null,
        ref: null,
      }
    ],
    languages: [],
  }
};

export default stateCurriculo;