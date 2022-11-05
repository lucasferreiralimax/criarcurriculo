import { shallowMount } from '@vue/test-utils'

import AppHitech from './index.vue'

const wrapper = shallowMount(AppHitech)

const credits_logo_array = wrapper.findAll('.hitech a.credits_logo')
const credits_logo = [
  { name: 'Javascript',      url: 'https://developer.mozilla.org/pt-BR/docs/Aprender/JavaScript' },
  { name: 'HTML5',           url: 'https://developer.mozilla.org/pt-BR/docs/Web/HTML/HTML5' },
  { name: 'CSS3',            url: 'https://developer.mozilla.org/pt-BR/docs/Web/CSS/CSS3' },
  { name: 'Vue.js',          url: 'https://vuejs.org' },
  { name: 'Element',         url: 'https://element.eleme.io' },
  { name: 'Firebase',        url: 'https://firebase.google.com' },
  { name: 'Pug.js',          url: 'https://pugjs.org' },
  { name: 'Stylus.js',       url: 'http://stylus-lang.com' },
  { name: 'Github',          url: 'https://github.com/lucasferreiralimax/criarcurriculo' },
  { name: 'Git',             url: 'https://git-scm.com' },
  { name: 'Google',          url: 'https://google.com' },
  { name: 'Heroku',          url: 'https://www.heroku.com' },
  { name: 'Babel.js',        url: 'https://babeljs.io' },
  { name: 'Node.js',         url: 'https://nodejs.org' },
  { name: 'Cypress',         url: 'https://www.cypress.io' },
  { name: 'Firefox',         url: 'https://www.mozilla.org' },
  { name: 'view.about.work', url: 'https://github.com/lucasferreiralimax/criarcurriculo' }
]

describe('AppHitech', () => {
  it('is AppHitech a vue instance', () => {
    expect(wrapper.exists()).toBeTruthy()
  })

  credits_logo_array.wrappers.forEach((wrapper, index) => {
    it(`AppHitech text logo ${credits_logo[index].name}`, () => {
      expect(wrapper.find('p').text()).toContain(credits_logo[index].name)
    })
    it(`AppHitech url ${credits_logo[index]}`, () => {
      expect(wrapper.attributes('href')).toBe(credits_logo[index].url)
    })
  })
})
