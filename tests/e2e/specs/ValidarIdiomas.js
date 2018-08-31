// https://docs.cypress.io/api/introduction/api.html

describe('Validar Idiomas', () => {
  it('English', () => {
    cy.get('#app').scrollIntoView()
    cy.get('#pluralization').click({ force: true })
    cy.get('#locale').select('en')
    cy.wait(2000)
  })
  it('Espanhol', () => {
    cy.get('#pluralization').click({ force: true })
    cy.get('#locale').select('es')
    cy.wait(2000)
  })
  it('русский', () => {
    cy.get('#pluralization').click({ force: true })
    cy.get('#locale').select('ru')
    cy.wait(2000)
  })
  it('Japanese', () => {
    cy.get('#pluralization').click({ force: true })
    cy.get('#locale').select('ja')
    cy.wait(2000)
  })
  it('Português', () => {
    cy.get('#pluralization').click({ force: true })
    cy.get('#locale').select('pt')
    cy.wait(2000)
  })
})
