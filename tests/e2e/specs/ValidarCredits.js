import { list_languages } from '../../../src/i18n/list_languages'

const list_tech = ['Github', 'Heroku', 'Google', 'Firebase', 'HTML5', 'CSS3', 'Javascript', 'Pug.js', 'Stylus.js', 'Babel.js', 'Node.js', 'Git', 'Vue.js', 'Cypress', 'Firefox', 'Element']

function testeMakeHeart(lang, text) {
  cy.wait(500)
  cy.get('#locale').select(lang)
  cy.contains('.credits_logo p', text)
}

describe('Validar Tecnologias', () => {
  it('About page visit scroll .hitech', () => {
    cy.visit('/about')
    cy.get('.hitech').scrollIntoView()
  })
  for(let tech of list_tech) {
    it(`Tech ${tech}`, () => {
      cy.contains('.credits_logo p', tech)   
    })
  }
  it('Feito com Coração', () => {
    for(let language in list_languages) {
      it(`Language ${list_languages[language][0]}`, () => {
        testeMakeHeart(list_languages[language][1], list_languages[language][3])
      })
    }
  })
})
