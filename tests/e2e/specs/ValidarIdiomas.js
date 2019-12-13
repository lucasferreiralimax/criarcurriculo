describe('Validar titulo nos Idiomas', () => {
  it('Espanhol', () => {
    cy.get('#app').scrollIntoView()
    cy.get('#locale').select('es-ES')
    cy.contains('h1', 'Resumem Libre')
    cy.wait(2000)
  })
  it('English', () => {
    cy.get('#locale').select('en-US')
    cy.contains('h1', 'Curriculum Free')
    cy.wait(2000)
  })
  it('русский', () => {
    cy.get('#locale').select('ru-RU')
    cy.contains('h1', 'Свободное резюме')
    cy.wait(2000)
  })
  it('Japanese', () => {
    cy.get('#locale').select('ja-JP')
    cy.contains('h1', 'カリキュラム 無料')
    cy.wait(2000)
  })
  it('Français', () => {
    cy.get('#locale').select('fr-FR')
    cy.contains('h1', 'Curriculo Gratuit')
    cy.wait(2000)
  })
  it('Türk', () => {
    cy.get('#locale').select('tr-TR')
    cy.contains('h1', 'Müfredat Ücretsiz')
    cy.wait(2000)
  })
  it('中国', () => {
    cy.get('#locale').select('ch-ZH')
    cy.contains('h1', '课程 免费')
    cy.wait(2000)
  })
  it('Deutsch', () => {
    cy.get('#locale').select('al-DE')
    cy.contains('h1', 'Curriculum Free')
    cy.wait(2000)
  })
  it('Italiano', () => {
    cy.get('#locale').select('it-IT')
    cy.contains('h1', 'Curriculum Gratuito')
    cy.wait(2000)
  })
  it('Ελληνικάo', () => {
    cy.get('#locale').select('gr-GK')
    cy.contains('h1', 'Δωρεάν Συνέχιση')
    cy.wait(2000)
  })
  it('ไทย', () => {
    cy.get('#locale').select('tl-TD')
    cy.contains('h1', 'หลักสูตร ฟรี')
    cy.wait(2000)
  })
  it('Neerlandesa', () => {
    cy.get('#locale').select('nl-HL')
    cy.contains('h1', 'Leerplan Vrij')
    cy.wait(2000)
  })
  it('Norsk', () => {
    cy.get('#locale').select('nl-NL')
    cy.contains('h1', 'Læreplan Gratis')
    cy.wait(2000)
  })
  it('العربي', () => {
    cy.get('#locale').select('ar-SA')
    cy.contains('h1', 'المناهج الدراسية حر')
    cy.wait(2000)
  })
  it('भारतीय', () => {
    cy.get('#locale').select('in-ID')
    cy.contains('h1', 'पाठ्यक्रम मुक्त')
    cy.wait(2000)
  })
  it('Português', () => {
    cy.get('#locale').select('pt-BR')
    cy.contains('h1', 'Currículo Grátis')
    cy.wait(2000)
  })
})
