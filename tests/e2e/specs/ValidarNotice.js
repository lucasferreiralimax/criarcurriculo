// https://docs.cypress.io/api/introduction/api.html

describe('Validar popup notice', () => {
  it('Testar popup', () => {
    cy.visit('/')
    cy.contains('.notice > p', 'Essa web aplicação ainda está em constante desenvolvimento.')
    cy.get('.notice > button').click({ force: true })
  })
})
