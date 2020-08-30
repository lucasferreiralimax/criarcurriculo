function testeTema(name) {
  cy.get('#theme_app').click()
  cy.get('.el-select-dropdown__item').contains(name).click({ multiple: true, force: true })
  cy.wait(500)
}

describe('Validar temas', () => {
  it('Tema Rosa', () => {
    cy.visit('/')
    cy.get('#start').scrollIntoView()
    cy.get('#openTheme').click({ force: true })
    testeTema('Rosa')
  })
  it('Tema Cinza', () => {
    testeTema('Cinza')
  })
  it('Tema Classic', () => {
    testeTema('Clássico')
  })
  it('Tema Gold', () => {
    testeTema('Ouro')
  })
  it('Tema FullBlack', () => {
    testeTema('Full Black')
  })
  it('Tema Selva', () => {
    testeTema('Selva')
    cy.get('#openTheme').click({ force: true })
  })
})
