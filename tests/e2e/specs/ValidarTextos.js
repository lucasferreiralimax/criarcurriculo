// https://docs.cypress.io/api/introduction/api.html

describe('Validar Textos', () => {
  it('Inicio', () => {
    cy.contains('h1', 'Curriculo Grátis')
    cy.contains('.mark > h2', 'Crie seu novo curriculo rápido, fácil e grátis!')
    cy.contains('#start', 'Preencha o formulário abaixo...')
  })
  it('Sobre', () => {
    cy.visit('/sobre')
    cy.contains('h1', 'Curriculo Grátis')
    cy.contains('.mark > h1', 'Informações')
  })
  it('Contato', () => {
    cy.visit('/contato')
    cy.contains('h1', 'Curriculo Grátis')
    cy.contains('.mark > h1', 'Contato')
  })
})
