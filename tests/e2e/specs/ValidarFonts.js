function testeFont(name) {
  cy.get('#fonttype').click()
  cy.get('.el-select-dropdown__item').contains(name).click({ multiple: true, force: true })
  cy.wait(500)
}

describe('Validar Fonts', () => {
  it('Font Abel', () => {
    cy.visit('/')
    cy.get('#start').scrollIntoView()
    testeFont('Abel')
  })
  it('Font Play', () => {
    testeFont('Play')
  })
  it('Font Rajdhani', () => {
    testeFont('Rajdhani')
  })
  it('Font Normal', () => {
    testeFont('Normal')
  })
})
