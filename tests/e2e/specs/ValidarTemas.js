function testeTema(name) {
  cy.get('#theme_app').click()
  cy.get('.el-select-dropdown__item').contains(name).click({ multiple: true, force: true })
  cy.wait(500)
}

function testeTemaLayout(name) {
  cy.get('#theme_app_layout').click()
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

describe('Validar temas layout', () => {
  it('Tema Rosa', () => {
    cy.visit('/')
    cy.get('#start').scrollIntoView()
    cy.get('#openTheme').click({ force: true })
    testeTema('Rosa')
  })
  it('Tema Cinza', () => {
    testeTemaLayout('Cinza')
  })
  it('Tema Classic', () => {
    testeTemaLayout('Clássico')
  })
  it('Tema Gold', () => {
    testeTemaLayout('Ouro')
  })
  it('Tema FullBlack', () => {
    testeTemaLayout('Full Black')
  })
  it('Tema Selva', () => {
    testeTemaLayout('Selva')
    cy.get('#openTheme').click({ force: true })
  })
})