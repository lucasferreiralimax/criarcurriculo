describe('Validar Visibilidade Icones', () => {
  it('Visibilidade Teste 1', () => {
    cy.visit('/')
    cy.get('.btn.icon-render').click()
    cy.wait(1000)
  })
  it('Visibilidade Teste 2', () => {
    cy.get('.btn.icon-render').click()
    cy.wait(1000)
  })
})
