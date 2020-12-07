import { list_languages } from '../../../src/i18n/list_languages'

function testeTitle(lang, name) {
  cy.get('#locale').select(lang)
  cy.wait(500)
  cy.get('.logo h1').then((theElement) => {
    return theElement.text()
  }).then(logo => {
    expect(logo).to.contain(name)
    cy.log(`Logo title is ${logo}`);
  })
  cy.wait(500)
}

describe('Validar titulo nos Idiomas', () => {
  it('Home page visit scroll #app', () => {
    cy.visit('/')
    cy.get('#app').scrollIntoView()
  })
  for(let language in list_languages) {
    it(`Language ${list_languages[language][0]}`, () => {
      testeTitle(list_languages[language][1], list_languages[language][2])
    })
  }
})
