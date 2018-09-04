describe('Validar Textos', () => {
  it('Inicio', () => {
    cy.contains('h1', 'Curriculo Grátis')
    cy.contains('.mark > h2', 'Crie seu novo curriculo rápido, fácil e grátis!')
    cy.contains('#start', 'Preencha o formulário abaixo...')
  })
  it('Sobre', () => {
    cy.get('[href="/sobre"]').click({ force: true })
    cy.contains('h1', 'Curriculo Grátis')
    cy.contains('.mark > h1', 'Informações')
  })
})
