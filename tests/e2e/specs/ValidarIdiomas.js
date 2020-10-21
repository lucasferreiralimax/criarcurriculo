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
    testeTitle('Crear Resumem', 'es-ES')
  })
  it('Català', () => {
    testeTitle('Crear Resum', 'es-CA')
  })
  it('English', () => {
    testeTitle('Create Curriculum', 'en-US')
  })
  it('русский', () => {
    testeTitle('Создайте Свободное', 'ru-RU')
  })
  it('Japanese', () => {
    testeTitle('作成する カリキュラム', 'ja-JP')
  })
  it('Français', () => {
    testeTitle('Créer Curriculo', 'fr-FR')
  })
  it('Türk', () => {
    testeTitle('Oluşturmak Müfredat', 'tr-TR')
  })
  it('中国', () => {
    testeTitle('创造 课程', 'ch-ZH')
  })
  it('Deutsch', () => {
    testeTitle('Erstellen Curriculum', 'al-DE')
  })
  it('Italiano', () => {
    testeTitle('Creare Curriculum', 'it-IT')
  })
  it('Ελληνικάo', () => {
    testeTitle('δημιουργώ Δωρεάν', 'gr-GK')
  })
  it('ไทย', () => {
    testeTitle('สร้าง หลักสูตร', 'tl-TD')
  })
  it('Neerlandesa', () => {
    testeTitle('Creëren Leerplan', 'nl-HL')
  })
  it('Norsk', () => {
    testeTitle('Skape Læreplan', 'nl-NL')
  })
  it('العربي', () => {
    testeTitle('خلق منهاج دراسي', 'ar-SA')
  })
  it('भारतीय', () => {
    testeTitle('सृजन करना पाठ्यक्रम', 'in-ID')
  })
  it('Tiếng việt', () => {
    testeTitle('Tạo nên Giáo trình', 'vn-VT')
  })
  it('Ungáiris', () => {
    testeTitle('Teremt Resume', 'hu-RV')
  })
  it('Ireland', () => {
    testeTitle('Cruthaigh Curaclam', 'ir-IS')
  })
  it('Português', () => {
    testeTitle('Criar Currículo', 'pt-BR')
  })
})
