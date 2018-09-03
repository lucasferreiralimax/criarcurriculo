describe('Validar popup notice', () => {
  it('Testar popup', () => {
    cy.visit('/')
    cy.contains('.notice > p', 'Essa web aplicação ainda está em constante desenvolvimento.')
    cy.wait(2000)
    cy.get('.notice > button').click({ force: true })
  })
})
