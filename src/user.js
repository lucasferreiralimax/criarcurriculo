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
  name: 'Mauro Mateus dos Santos',
  photo: photoBase,
  age: 29,
  countrystatus: '',
  cep: null,
  end: {
    cep: '',
    logradouro: 'Favela do Canão',
    complemento: '',
    bairro: 'Jardim Matarazzo',
    localidade: 'São Paulo',
    uf: 'SP'
  },
  maritalstatus: 'Casado',
  addressNumber: null,
  travel: true,
  about: `Discografia:
2001 - Rap É Compromisso!
2002 - Uma Luz Que Nunca Irá se Apagar
2008 - Rap é o Hino que Me Mantém Vivo
2016 - Sabotage

Filmes:
2002 - O Invasor
2003 - Carandiru

Prêmios:
2002 - Revelação
2002 - Personalidade do Ano
2009 - Maiores revelações da década
2009 - Maiores artistas solo da década

Documentários:
Sabotage - Nós
Sabotage - O Maestro do Canão`,
  genero: 'h',
  hobbies: ['Rimar', 'Ajudar', 'Vencer'],
  telephones: [],
  emails: ['canalsabotage@gmail.com'],
  sites: ['youtube.com/sabotagerap','instagram.com/sabotageoficial', 'facebook.com/sabotagemaestrodocanaooficial'],
  languages: ['Fluente Português Brasileiro', 'Speak Basic English', 'Hablo español básico', 'Je parle les bases du Français'],
  exps: [{
    'experience': {
      'name': 'Rap Nacional',
      'work': 'Rapper',
      'data_start': '1973-04-01T03:00:00.000Z',
      'data_end': '2022-12-01T03:00:00.000Z',
      'about': 'Em toda sua carreira, compôs dezenas de trabalhos e alguns deles se tornaram hino para jovens da periferia.\nSabotage é uma rica expressão da constante luta que o pobre enfrenta diariamente para viver dignamente e isso fez com que vários outros artistas usassem suas obras como samples, colagens e scratches de seus trabalhos.',
      'now': true
    }
  }],
  coursers: [{
    "formation": {
      "name": "Programado pra rimar",
      "school": "Instituto",
      "data_start": "1985-01-01T03:00:00.000Z",
      "data_end": null,
      "about": "",
      "now": true
    }
  }]
}
