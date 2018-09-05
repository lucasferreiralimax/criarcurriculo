describe('Validar Idiomas', () => {
  it('Espanhol', () => {
    cy.get('#app').scrollIntoView()
    cy.get('#pluralization').click({ force: true })
    cy.get('#locale').select('es')
    cy.contains('h1', 'Resumem Libre')
    cy.wait(2000)
  })
  it('English', () => {
    cy.get('#pluralization').click({ force: true })
    cy.get('#locale').select('en')
    cy.contains('h1', 'Curriculum Free')
    cy.wait(2000)
  })
  it('русский', () => {
    cy.get('#pluralization').click({ force: true })
    cy.get('#locale').select('ru')
    cy.contains('h1', 'Свободное резюме')
    cy.wait(2000)
  })
  it('Japanese', () => {
    cy.get('#pluralization').click({ force: true })
    cy.get('#locale').select('ja')
    cy.contains('h1', 'カリキュラム 無料')
    cy.wait(2000)
  })
  it('Français', () => {
    cy.get('#pluralization').click({ force: true })
    cy.get('#locale').select('fr')
    cy.contains('h1', 'Curriculo Gratuit')
    cy.wait(2000)
  })
  it('Português', () => {
    cy.get('#pluralization').click({ force: true })
    cy.get('#locale').select('pt')
    cy.contains('h1', 'Curriculo Grátis')
    cy.wait(2000)
  })
})
