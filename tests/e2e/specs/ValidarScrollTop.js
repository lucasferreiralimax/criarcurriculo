describe('Validar ScrollTop', () => {
  it('ScrollTop Component', () => {
    cy.visit('/')
    cy.get('.notice > button').click()
    cy.get('.footer').scrollIntoView()
    cy.wait(2000)
    cy.get('.scroll-top').click({ force: true })
  })
})
