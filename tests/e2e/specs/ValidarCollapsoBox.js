describe('Validar Collapso Box', () => {
  it('Validando click', () => {
    cy.visit('/')
    cy.get('.box:first legend').click({ multiple: true })
    cy.get('#start').scrollIntoView()
    cy.wait(2000)
  })
  it('Validando click simultâneos', () => {
    for(let i = 0; 3 > i; i++) {
      cy.get('.box:first legend').click({ multiple: true })
      cy.wait(300)
      cy.get('#start').scrollIntoView()
    }
    cy.get('#start').scrollIntoView()
    cy.wait(2000)
  })
})
