export const stateEmpety = {
  curriculo: {
    name: '',
    age: null,
    gender: '',
    maritial: '',
    about: '',
    address: {
      cep: '',
      city: '',
      country: '',
      travel: null,
    },
    formation: [],
    experience: [],
    languages: [],
  }
};

const stateCurriculo = {
  curriculo: {
    name: "Virgulino Ferreira da Silva",
    age: 40,
    gender: 'Masculino',
    maritial: 'Casado',
    about: 'Vulgo Lampião, o Rei do Cangaço foi um cangaceiro (herói e contraventor) brasileiro que atuou na região do sertão nordestino do Brasil. O apelido "Lampião" foi lhe dado devido ter facilidade em manejar o rifle, "que, de tanto atirar, mais parecia um candeeiro aceso nas escuras noites da caatinga”.',
    address: {
      cep: '58840-000',
      city: 'Pombal',
      country: 'Paraíba',
      travel: true,
    },
    formation: [
      {
        id: 'formation_cangaço_1',
        institute: 'Savana Caatinga',
        course: 'Sobrevivência',
        dateFirst: null,
        dateEnd: null,
        about: 'Conhecimentos da natureza silvestre do Brasil',
        ref: 'Sertão brasileiro',
      }
    ],
    experience: [
      {
        id: 'experience_cangaço_1',
        work: 'Cangaceiro',
        company: 'Cangaço',
        dateFirst: null,
        dateEnd: null,
        about: 'Revolucionário nordestino brasileiro, lutando por causas sociais por um Brasil mais igualitário e com equidade',
        ref: 'Selvas brasileiras',
      }
    ],
    languages: [
      { name: "Português Brasileiro", percent: 3 },
      { name: "Latim", percent: 0 },
      { name: "Hebraico", percent: 0 },
      { name: "Egípcio", percent: 0 },
      { name: "Italiano", percent: 0 },
      { name: "Espanhol", percent: 2 },
      { name: "Catalão", percent: 0 },
      { name: "Inglês", percent: 2 },
      { name: "Russo", percent: 0 },
      { name: "Bielorusso", percent: 0 },
      { name: "Mandarim - Chinês", percent: 0 },
      { name: "Árabe", percent: 0 },
      { name: "Japonês", percent: 0 },
      { name: "Turco", percent: 0 },
      { name: "Tailandês", percent: 0 },
      { name: "Vietnamita", percent: 0 },
      { name: "Persa", percent: 0 },
      { name: "Coreano", percent: 0 },
      { name: "Francês", percent: 0 },
    ],
  }
};

export default stateCurriculo;
