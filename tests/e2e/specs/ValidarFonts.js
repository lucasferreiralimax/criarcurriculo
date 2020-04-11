describe('Validar Fonts', () => {
  it('Font Abel', () => {
    cy.visit('/')
    cy.get('#start').scrollIntoView()
    cy.get('#fonttype').select('abel')
    cy.wait(2000)
  })
  it('Font Play', () => {
    cy.get('#fonttype').select('play')
    cy.wait(2000)
  })
  it('Font Kaushan', () => {
    cy.get('#fonttype').select('kaushan')
    cy.wait(2000)
  })
  it('Font Rajdhani', () => {
    cy.get('#fonttype').select('rajdhani')
    cy.wait(2000)
  })
  it('Font Normal', () => {
    cy.get('#fonttype').select('normal')
    cy.wait(2000)
  })
})
