import { photo } from './photo_data'

export const stateEmpety = {
  curriculo: {
    name: '',
    photo: {
      name: '',
      data: ''
    },
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
    photo: {
      name: 'Virgulino.jpg',
      data: photo
    },
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
      { name: "Italiano", percent: 0 },
      { name: "Espanhol", percent: 2 },
      { name: "Inglês", percent: 2 },
      { name: "Russo", percent: 0 },
    ],
  }
};

export default stateCurriculo;
