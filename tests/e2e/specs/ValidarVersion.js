import pkg from '../../../package.json'

describe('Validar Versão', () => {
  it('Home page visit scroll .version', () => {
    cy.visit('/')
    cy.get('.version').scrollIntoView()
    cy.contains('.version', pkg.version)
  })
})
