import { photoBase } from './assets/photoBase.js'

export function userEmpty() {
  return {
    name: '',
    photo: '',
    age: null,
    countrystatus: '',
    cep: null,
    end: {
      localidade: '',
      logradouro: '',
      complemento: '',
      uf: '',
      bairro: '',
      cep: ''
    },
    maritalstatus: '',
    addressNumber: null,
    travel: false,
    about: null,
    genero: '',
    hobbies: ['Ajudar'],
    telephones: [],
    emails: [],
    sites: [],
    languages: [],
    exps: [],
    coursers: []
  }
}

export let user = {
  name: 'Manuel Francisco dos Anjos Ferreira',
  photo: photoBase,
  age: 56,
  countrystatus: '',
  cep: null,
  end: {
    cep: '',
    logradouro: 'Coroatá',
    complemento: '',
    bairro: 'Caxias',
    localidade: 'Maranhão',
    uf: 'MA'
  },
  maritalstatus: 'Casado',
  addressNumber: null,
  travel: true,
  about: `Também conhecido como Manuel Balaio
  Foi um artesão fabricante de cestos de palha (ou balaios)
  se tornou um dos mais importantes líderes da Balaiada
  Revolução regencial ocorrida de 1838 até 1841 no estado do Maranhão.
  Apelido dado devido aos balaios que vendia entre as cidades de Coroatá e Itapecuru-Mirim.`,
  genero: 'h',
  hobbies: ['Revolucionar', 'Ajudar', 'Vencer'],
  telephones: [],
  emails: ['2virgulinoferreiradasilva'],
  sites: ['criar-curriculo.web.app'],
  languages: ['Fluente Português Brasileiro', 'Speak Basic English', 'Hablo español básico', 'Je parle les bases du Français'],
  exps: [{
    'experience': {
      'name': 'Artesão e Vendedor',
      'work': 'Fabricante de balaio',
      'data_start': '1800-04-01T03:00:00.000Z',
      'data_end': '1840-12-01T03:00:00.000Z',
      'about': 'Criacão e venda de balaios nas cidades do Maranhão.',
      'now': true
    }
  }],
  coursers: [{
    "formation": {
      "name": "Programado pra revolucionar",
      "school": "Nordeste",
      "data_start": "1784-01-01T03:00:00.000Z",
      "data_end": null,
      "about": "",
      "now": true
    }
  }]
}
