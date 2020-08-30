describe('Validar Layouts', () => {
  it('Layout 1', () => {
    cy.visit('/')
    cy.get('#start').scrollIntoView()
    cy.get('.layout .btn:nth-of-type(1)').click()
    cy.wait(1000)
  })
  it('Layout 2', () => {
    cy.get('.layout .btn:nth-of-type(2)').click()
    cy.wait(1000)
  })
  it('Layout 3', () => {
    cy.get('.layout .btn:nth-of-type(3)').click()
    cy.wait(1000)
  })
})
