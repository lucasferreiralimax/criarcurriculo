describe('Validar erros curriculo simples', () => {
  it('Nome limpo', () => {
    cy.visit('/')
    cy.get('#GET-name').clear()
  })
  it('Gênero limpo', () => {
    cy.get('#GET-genero').click()
    cy.get('.el-select-dropdown__item').contains('Selecione seu gênero...').click({ multiple: true, force: true })
    cy.get('#start').scrollIntoView()
  })
  it('Idade limpa', () => {
    cy.get('#GET-dataofbirth').clear()
  })
  it('Sobre mim limpa', () => {
    cy.get('#GET-about').clear()
  })
  it('Endereço limpo', () => {
    cy.get('#GET-cep').clear()
    cy.get('#GET-state').clear()
    cy.get('#GET-address').clear()
    cy.get('#GET-country').clear()
  })
  it('Telefone limpo', () => {
    cy.get('#newTelephone').click()
    cy.get('#GET-telephone-0').clear()
  })
  it('E-mail limpo', () => {
    cy.get('#GET-email-0').clear()
  })
  it('Site limpo', () => {
    cy.get('#GET-site-0').clear()
  })
  it('Idiomas limpo', () => {
    cy.get('[for^=GET-language] input').each(($li) => {
      cy.wrap($li).clear()
    })
  })
})

describe('Formação Acadêmica limpa', () => {
  it('Add formação', () => {
    cy.get('.coursers .btn.plus').click()
  })
  it('Escola limpa', () => {
    cy.get('#GET-school-0').clear()
  })
  it('Curso limpo', () => {
    cy.get('#GET-course-0').clear()
  })
  it('Inicio do curso limpo', () => {
    cy.get('#GET-coursedata__start-0').clear()
  })
  it('Término do curso limpo', () => {
    cy.get('#GET-coursedata__finish-0').clear()
  })
  it('Sobre limpo', () => {
    cy.get('#GET-courseabout-0').clear({force: true})
  })
})

describe('Experiências limpa', () => {
  it('Add experiência', () => {
    cy.get('.experiences .btn.plus').click()
  })
  it('Empresa lima', () => {
    cy.get('#GET-company-0').clear()
  })
  it('Cargo limpo', () => {
    cy.get('#GET-exps-0').clear()
  })
  it('Inicio do trabalho limpo', () => {
    cy.get('#GET-expsdata__start-0').clear()
  })
  it('Sobre limpo', () => {
    cy.get('#GET-expsabout-0').clear({force: true})
  })
})

describe('Validar Mensagens com Erros', () => {
  it('Tentar imprimir', () => {
    cy.get('#print').click()
  })
  it('Mensagem de erro nome', () => {
    cy.contains('[for="GET-name"] .error-msg', 'Precisa preencher com seu nome.')
  })
  it('Mensagem de erro genero', () => {
    cy.contains('[for="GET-genero"] .error-msg', 'Precisa escolher algum gênero.')
  })
  it('Mensagem de erro idade', () => {
    cy.contains('[for="GET-dataofbirth"] .error-msg', 'Precisa preencher com sua idade.')
  })
  it('Mensagem de erro estado civil', () => {
    cy.contains('.select-maritals.error .error-msg', 'Precisa escolher um estado civil.')
  })
  it('Mensagem de erro telefone', () => {
    cy.contains('[for="GET-telephone-0"] .error-msg', 'Precisa preencher o campo de telefone.')
  })
  it('Mensagem de erro e-mail', () => {
    cy.contains('[for="GET-email-0"] .error-msg', 'Precisa preencher o campo de e-mail.')
  })
  it('Mensagem de erro site', () => {
    cy.contains('[for="GET-site-0"] .error-msg', 'Precisa preencher o campo do site.')
  })
  it('Mensagem de erro endereço', () => {
    cy.contains('[for="GET-address"] .error-msg', 'Precisa preencher o campo de endereço.')
  })
  it('Mensagem de erro cidade', () => {
    cy.contains('[for="GET-country"] .error-msg', 'Precisa preencher o campo de cidade.')
  })
  it('Mensagem de erro instituição', () => {
    cy.contains('[for="GET-school-0"] .error-msg', 'Precisa preencher com o nome da instituição.')
  })
  it('Mensagem de erro Formação', () => {
    cy.contains('[for="GET-course-0"] .error-msg', 'Precisa preencher com o nome do curso.')
  })
  it('Mensagem de erro empresa', () => {
    cy.contains('[for="GET-company-0"] .error-msg', 'Precisa preencher com o nome da empresa.')
  })
  it('Mensagem de erro cargo', () => {
    cy.contains('[for="GET-exps-0"] .error-msg', 'Precisa preencher com o nome do cargo.')
  })
})
