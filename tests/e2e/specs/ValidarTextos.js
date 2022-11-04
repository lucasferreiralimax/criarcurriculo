describe('Validar Textos', () => {
  it('Inicio', () => {
    cy.visit('/')
    cy.contains('h1', 'Criar\nCurrículo')
    cy.contains('.mark h2', 'Grátis, rápido e fácil')
    cy.contains('#start', 'Preencha o formulário com suas informações')
  })
  it('Sobre', () => {
    cy.get('.btn[href="/about"]').click({ force: true })
    cy.contains('h1', 'Criar\nCurrículo')
    cy.contains('.mark h1', 'Informações')
  })
  it('Colaboradores', () => {
    cy.get('.btn[href="/contributors"]').click({ force: true })
    cy.contains('h1', 'Criar\nCurrículo')
    cy.contains('.mark h1', 'Colaboradores')
  })
})
