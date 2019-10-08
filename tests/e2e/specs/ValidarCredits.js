describe('Validar Tecnologias', () => {
  it('Github', () => {
    cy.visit('/sobre')
    cy.get('.hitech').scrollIntoView()
    cy.contains('.credits_logo p', 'Github')
  })
  it('Heroku', () => {
    cy.contains('.credits_logo p', 'Heroku')
  })
  it('Google', () => {
    cy.contains('.credits_logo p', 'Google')
  })
  it('Firebase', () => {
    cy.contains('.credits_logo p', 'Firebase')
  })
  it('HTML5', () => {
    cy.contains('.credits_logo p', 'HTML5')
  })
  it('CSS3', () => {
    cy.contains('.credits_logo p', 'CSS3')
  })
  it('Javascript', () => {
    cy.contains('.credits_logo p', 'Javascript')
  })
  it('Pug.js', () => {
    cy.contains('.credits_logo p', 'Pug.js')
  })
  it('Stylus.js', () => {
    cy.contains('.credits_logo p', 'Stylus.js')
  })
  it('Babel.js', () => {
    cy.contains('.credits_logo p', 'Babel.js')
  })
  it('Node.js', () => {
    cy.contains('.credits_logo p', 'Node.js')
  })
  it('Git', () => {
    cy.contains('.credits_logo p', 'Git')
  })
  it('Vue.js', () => {
    cy.contains('.credits_logo p', 'Vue.js')
  })
  it('Cypress', () => {
    cy.contains('.credits_logo p', 'Cypress')
  })
  it('Firefox', () => {
    cy.contains('.credits_logo p', 'Firefox')
  })
  it('Feito com Coração', () => {

    cy.wait(1000)

    cy.get('#pluralization').click({ force: true })
    cy.get('#locale').select('es-ES')
    cy.contains('.credits_logo p', 'Hecho con Corazón')

    cy.wait(1000)

    cy.get('#pluralization').click({ force: true })
    cy.get('#locale').select('en-US')
    cy.contains('.credits_logo p', 'Made with Heart')

    cy.wait(1000)

    cy.get('#pluralization').click({ force: true })
    cy.get('#locale').select('ru-RU')
    cy.contains('.credits_logo p', 'Сделано с сердцем')

    cy.wait(1000)

    cy.get('#pluralization').click({ force: true })
    cy.get('#locale').select('ja-JP')
    cy.contains('.credits_logo p', 'ハートで作られた')

    cy.wait(1000)

    cy.get('#pluralization').click({ force: true })
    cy.get('#locale').select('fr-FR')
    cy.contains('.credits_logo p', 'Fait avec du coeur')

    cy.wait(1000)

    cy.get('#pluralization').click({ force: true })
    cy.get('#locale').select('tr-TR')
    cy.contains('.credits_logo p', 'Kalp ile Yapıldı')

    cy.wait(1000)

    cy.get('#pluralization').click({ force: true })
    cy.get('#locale').select('ch-ZH')
    cy.contains('.credits_logo p', '用心做')

    cy.wait(1000)

    cy.get('#pluralization').click({ force: true })
    cy.get('#locale').select('al-DE')
    cy.contains('.credits_logo p', 'Mit Herz gemacht')

    cy.wait(1000)

    cy.get('#pluralization').click({ force: true })
    cy.get('#locale').select('it-IT')
    cy.contains('.credits_logo p', 'Fatto con il cuore')

    cy.wait(1000)

    cy.get('#pluralization').click({ force: true })
    cy.get('#locale').select('gr-GK')
    cy.contains('.credits_logo p', 'Made with Heart')

    cy.wait(1000)

    cy.get('#pluralization').click({ force: true })
    cy.get('#locale').select('tl-TD')
    cy.contains('.credits_logo p', 'ทำด้วยหัวใจ')

    cy.wait(1000)

    cy.get('#pluralization').click({ force: true })
    cy.get('#locale').select('nl-HL')
    cy.contains('.credits_logo p', 'Gemaakt met hart')

    cy.wait(1000)

    cy.get('#pluralization').click({ force: true })
    cy.get('#locale').select('nl-NL')
    cy.contains('.credits_logo p', 'Made with Heart')

    cy.wait(1000)

    cy.get('#pluralization').click({ force: true })
    cy.get('#locale').select('pt-BR')
    cy.contains('.credits_logo p', 'Feito com Coração')
  })
})
