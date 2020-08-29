describe('Validar Fonts', () => {
  it('Font Abel', () => {
    cy.visit('/')
    cy.get('#start').scrollIntoView()
    cy.get('#fonttype').click()
    cy.get('.el-select-dropdown__item').contains('Abel').click({ multiple: true, force: true })
    cy.wait(2000)
  })
  it('Font Play', () => {
    cy.get('#fonttype').click()
    cy.get('.el-select-dropdown__item').contains('Play').click({ multiple: true, force: true })
    cy.wait(2000)
  })
  it('Font Rajdhani', () => {
    cy.get('#fonttype').click()
    cy.get('.el-select-dropdown__item').contains('Rajdhani').click({ multiple: true, force: true })
    cy.wait(2000)
  })
  it('Font Normal', () => {
    cy.get('#fonttype').click()
    cy.get('.el-select-dropdown__item').contains('Normal').click({ multiple: true, force: true })
    cy.wait(2000)
  })
})
