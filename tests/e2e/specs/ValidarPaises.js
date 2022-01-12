import { list_country } from '../../../src/i18n/list_languages'

function testeCountry(name, index) {
  cy.visit('/about')
  cy.get('.countrys').scrollIntoView()

  cy.get(`.country-${index + 1}`)
    .scrollIntoView()
    .then((theElement) => {
    return theElement.text()
  }).then(country => {
    expect(country).to.contain(`${name}`)
    cy.log(`Country text is ${country}`);
  })

  cy.get(`.countrys img[alt='${name}']`)
    .scrollIntoView()
    .then((theElement) => {
    return theElement.attr("alt")
  }).then(country => {
    expect(country).to.contain(name)
    cy.log(`Country title alt is ${country}`);
  })
}

describe('Validar Paises', () => {
  for(let country in list_country) {
    it(`Country ${list_country[country].name}`, () => {
      testeCountry(list_country[country].name, list_country.indexOf(list_country[country]))
    })
  }
})
