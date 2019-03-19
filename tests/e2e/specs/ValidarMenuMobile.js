describe('Validar Menu Mobile', () => {
  it('Validando click', () => {
    cy.visit('/')
    cy.viewport(400, 768)
    cy.wait(2000)
    cy.get('.btn.menu').click({ force: true })
    cy.wait(2000)
    cy.get('[href="/"]').click({ force: true })
  })
  it('Validando click simultâneos', () => {
    cy.viewport(400, 768)
    for(let i = 0; 10 > i; i++) {
      cy.get('.btn.menu').click({ force: true })
      cy.wait(500)
    }
    cy.get('[href="/"]').click({ force: true })
  })
})
