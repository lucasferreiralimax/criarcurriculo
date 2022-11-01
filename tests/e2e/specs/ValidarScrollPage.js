describe('Validar ScrollPage', () => {
  it('ScrollTop Component', () => {
    cy.visit('/')
    cy.get('#final').scrollIntoView()
    cy.wait(1000)
    cy.get('.scroll-top').click({ force: true })
  })
  it('ScrollBottom Component', () => {
    cy.visit('/')
    cy.get('#locale').scrollIntoView()
    cy.wait(1000)
    cy.get('.scroll-bottom').click({ force: true })
  })
})
