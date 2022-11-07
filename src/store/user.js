import { photoBase } from '../assets/photoBase.js'

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
      uf: '',
      cep: ''
    },
    maritalstatus: '',
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
  name: 'Paulo Freire',
  photo: photoBase,
  age: 75,
  countrystatus: 'Casado',
  cep: null,
  end: {
    logradouro: 'Sitio Trindade',
    localidade: 'Recife',
    uf: 'Pernambuco',
    cep: ''
  },
  maritalstatus: 'Casado',
  travel: true,
  about: `Educador e filósofo brasileiro, inspiração para gerações de professores
Especialmente na América Latina e na África.
O talento como escritor ajudou a conquistar um amplo público de pedagogos, cientistas sociais, teólogos e militantes políticos
Desenvolveu um método inovador de alfabetização
Adotado primeiramente em Pernambuco
Seu projeto educacional estava vinculado ao nacionalismo desenvolvimentista`,
  genero: 'h',
  hobbies: ['Revolucionar', 'Ajudar', 'Vencer'],
  telephones: [],
  emails: ['2virgulinoferreiradasilva@gmail.com'],
  sites: ['criar-curriculo.web.app'],
  languages: ['Fluente Português Brasileiro', 'Speak Basic English', 'Hablo español básico', 'Je parle les bases du Français'],
  exps: [{
    'experience': {
      'name': 'Educação de Jovens e Adultos',
      'work': 'Professor',
      'data_start': '1980-04-01T03:00:00.000Z',
      'data_end': '1986-12-01T03:00:00.000Z',
      'about': 'Criação do Movimento de Alfabetização de Jovens e Adultos (MOVA), um modelo de programa público de apoio a salas comunitárias de Educação de Jovens e Adultos que até hoje é adotado no Mundo.',
      'now': true
    }
  }],
  coursers: [{
    "formation": {
      "name": "Faculdade de Direito",
      "school": "Universidade do Recife",
      "data_start": "1943-01-01T03:00:00.000Z",
      "data_end": null,
      "about": "",
      "now": false
    }
  }, {
    "formation": {
      "name": "Programado pra revolucionar",
      "school": "Nordeste",
      "data_start": "1921-01-01T03:00:00.000Z",
      "data_end": null,
      "about": "",
      "now": true
    }
  }]
}
