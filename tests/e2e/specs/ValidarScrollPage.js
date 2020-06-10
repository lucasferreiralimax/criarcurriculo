describe('Validar ScrollPage', () => {
  it('ScrollTop Component', () => {
    cy.visit('/')
    cy.get('.footer').scrollIntoView()
    cy.wait(2000)
    cy.get('.scroll-top').click({ force: true })
  })
  it('ScrollBottom Component', () => {
    cy.visit('/')
    cy.get('#locale').scrollIntoView()
    cy.wait(2000)
    cy.get('.scroll-bottom').click({ force: true })
  })
})
