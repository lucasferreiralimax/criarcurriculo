function testeTitle(name, lang) {
  cy.get('#locale').select(lang)
  cy.wait(500)
  cy.get('.logo h1').then((theElement) => {
    return theElement.text()
  }).then(logo => {
    expect(logo).to.contain(name)
    cy.log(`Logo title is ${logo}`);
  })
  cy.wait(500)
}

describe('Validar titulo nos Idiomas', () => {
  it('Espanhol', () => {
    cy.visit('/')
    cy.get('#app').scrollIntoView()
    testeTitle('Resumem Libre', 'es-ES')
  })
  it('Català', () => {
    testeTitle('Resum LLiure', 'es-CA')
  })
  it('English', () => {
    testeTitle('Curriculum Free', 'en-US')
  })
  it('русский', () => {
    testeTitle('Свободное резюме', 'ru-RU')
  })
  it('Japanese', () => {
    testeTitle('カリキュラム 無料', 'ja-JP')
  })
  it('Français', () => {
    testeTitle('Curriculo Gratuit', 'fr-FR')
  })
  it('Türk', () => {
    testeTitle('Müfredat Ücretsiz', 'tr-TR')
  })
  it('中国', () => {
    testeTitle('课程 免费', 'ch-ZH')
  })
  it('Deutsch', () => {
    testeTitle('Curriculum Free', 'al-DE')
  })
  it('Italiano', () => {
    testeTitle('Curriculum Gratuito', 'it-IT')
  })
  it('Ελληνικάo', () => {
    testeTitle('Δωρεάν Συνέχιση', 'gr-GK')
  })
  it('ไทย', () => {
    testeTitle('หลักสูตร ฟรี', 'tl-TD')
  })
  it('Neerlandesa', () => {
    testeTitle('Leerplan Vrij', 'nl-HL')
  })
  it('Norsk', () => {
    testeTitle('Læreplan Gratis', 'nl-NL')
  })
  it('العربي', () => {
    testeTitle('المناهج الدراسية حر', 'ar-SA')
  })
  it('भारतीय', () => {
    testeTitle('पाठ्यक्रम मुक्त', 'in-ID')
  })
  it('Tiếng việt', () => {
    testeTitle('Giáo trình Vận chuyển', 'vn-VT')
  })
  it('Ungáiris', () => {
    testeTitle('Resume Szabad', 'hu-RV')
  })
  it('Ireland', () => {
    testeTitle('Curaclam Open', 'ir-IS')
  })
  it('Português', () => {
    testeTitle('Currículo Grátis', 'pt-BR')
  })
})
