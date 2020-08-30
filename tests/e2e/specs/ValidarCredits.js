function testeMakeHeart(name, lang) {
  cy.wait(500)
  cy.get('#locale').select(lang)
  cy.contains('.credits_logo p', name)
}

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
  it('Element', () => {
    cy.contains('.credits_logo p', 'Element')
  })
  it('Feito com Coração', () => {
    testeMakeHeart('Hecho con Corazón', 'es-ES')
    testeMakeHeart('Fet amb Cor', 'es-CA')
    testeMakeHeart('Made with Heart', 'en-US')
    testeMakeHeart('Сделано с сердцем', 'ru-RU')
    testeMakeHeart('ハートで作られた', 'ja-JP')
    testeMakeHeart('Fait avec du coeur', 'fr-FR')
    testeMakeHeart('Kalp ile Yapıldı', 'tr-TR')
    testeMakeHeart('用心做', 'ch-ZH')
    testeMakeHeart('Mit Herz gemacht', 'al-DE')
    testeMakeHeart('Fatto con il cuore', 'it-IT')
    testeMakeHeart('Made with Heart', 'gr-GK')
    testeMakeHeart('ทำด้วยหัวใจ', 'tl-TD')
    testeMakeHeart('Gemaakt met hart', 'nl-HL')
    testeMakeHeart('Made with Heart', 'nl-NL')
    testeMakeHeart('مصنوعة من القلب', 'ar-SA')
    testeMakeHeart('दिल से बनाया गय', 'in-ID')
    testeMakeHeart('Làm bằng trái tim', 'vn-VT')
    testeMakeHeart('Szívvel készült', 'hu-RV')
    testeMakeHeart('Déanta le Croí', 'ir-IS')
    testeMakeHeart('Feito com Coração', 'pt-BR')
  })
})
