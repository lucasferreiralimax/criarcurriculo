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
    contact: {
      email: '',
      phone: '',
      site: '',
      linkedin: ''
    },
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
    name: "Carlos Marighella",
    photo: {
      name: 'marighella.jpg',
      data: photo
    },
    age: 57,
    gender: 'Masculino',
    maritial: 'Casado',
    about: `Político, escritor e guerrilheiro brasileiro. Um dos principais organizadores da luta contra a ditadura militar brasileira (1964–1985), cheguei a ser considerado o inimigo "número um" do regime. Fui cofundador da Ação Libertadora Nacional, organização de caráter revolucionário brasileiro.`,
    contact: {
      email: 'contato@criar.art',
      phone: '(82) 9 9931 9097',
      site: 'https://curriculo-vivo.web.app',
      linkedin: ''
    },
    address: {
      cep: '58840-000',
      city: 'São Paulo',
      country: 'SP',
      travel: true,
    },
    formation: [
      {
        id: 'formation_cangaço_1',
        institute: 'Escola Politécnica da Bahia',
        course: 'Engenhario Civil ',
        dateFirst: null,
        dateEnd: null,
        about: 'Planejo, projeto, executo e gerencio obras e empreendimentos. Transformo e adapto a natureza, com o objetivo de otimizar a qualidade de vida das pessoas. Desta forma, dedico-me à construção de edifícios, pontes, túneis, usinas geradoras de energia, indústrias e inúmeros outros tipos de estruturas, utilizando como ferramentas as ciências, a matemática, tecnologias e técnicas diversas, experiências anteriores, levando em conta os contextos social, econômico e ambiental.',
        ref: '',
      }
    ],
    experience: [
      {
        id: 'experience_cangaço_1',
        work: 'Deputado Federal',
        company: 'Brasil',
        dateFirst: null,
        dateEnd: null,
        about: 'Trabalhando para desenvolver um Brasil melhor para todos, lutando por causas sociais com os recursos disponíveis no poder legislativo federal do Brasil',
        ref: 'Palácio do Congresso Nacional',
      },
      {
        id: 'experience_cangaço_2',
        work: 'Fundador',
        company: 'Ação Libertadora Nacional',
        dateFirst: null,
        dateEnd: null,
        about: 'Formada no ano de 1967 uma organização brasileira que enfrentou a ditadura militar instaurada em 1964.',
        ref: 'Selvas Brasileiras',
      },
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
