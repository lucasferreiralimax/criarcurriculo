describe('Validar temas', () => {
  it('Tema Rosa', () => {
    cy.get('#start').scrollIntoView()
    cy.get('#openTheme').click({ force: true })
    cy.get('#theme_app').select('rose')
    cy.wait(2000)
  })
  it('Tema Cinza', () => {
    cy.get('#theme_app').select('cinza')
    cy.wait(2000)
  })
  it('Tema Classic', () => {
    cy.get('#theme_app').select('classic')
    cy.wait(2000)
  })
  it('Tema Gold', () => {
    cy.get('#theme_app').select('gold')
    cy.wait(2000)
  })
  it('Tema FullBlack', () => {
    cy.get('#theme_app').select('full')
    cy.wait(2000)
  })
  it('Tema Selva', () => {
    cy.get('#theme_app').select('jungle')
    cy.wait(2000)
    cy.get('#openTheme').click({ force: true })
  })
})
