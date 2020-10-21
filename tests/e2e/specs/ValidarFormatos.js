describe('Validar Formatos - Basico', () => {
  it('Nome', () => {
    cy.visit('/')
    cy.wait(1000)
    cy.get('#GET-name').clear().type('Lucas Ferreira de Lima')
  })
  it('Gênero', () => {
    cy.get('#GET-genero').click()
    cy.get('.el-select-dropdown__item').eq(2).click({ multiple: true, force: true })
    cy.get('#start').scrollIntoView()
  })
  it('Estado Civil', () => {
    cy.get('[for="GET-maritalstatus-s"]').click()
  })
  it('Idade', () => {
    cy.get('#GET-dataofbirth').type(25)
  })
  it('Hobbies', () => {
    cy.get('.select-hobby .btn.plus.bullet.small').click()
    cy.get('.select-hobby input').type('teste')
  })
  it('CEP', () => {
    cy.get('#GET-cep').type('03816130')
    cy.get('#GET-address-number').type('1')
  })
  it('E-mail', () => {
    cy.get('#newEmail').click()
    cy.get('#GET-email-0').type('lucasferreiralimax@gmail.com')
  })
  it('Site', () => {
    cy.get('#GET-site-0').type('criar-curriculo.web.app')
  })
})
