import { list_languages } from '../../../src/i18n/list_languages'

let LOCAL_STORAGE_MEMORY = {};

Cypress.Commands.add("saveLocalStorage", () => {
  Object.keys(localStorage).forEach(key => {
    LOCAL_STORAGE_MEMORY[key] = localStorage[key];
  });
});

Cypress.Commands.add("restoreLocalStorage", () => {
  Object.keys(LOCAL_STORAGE_MEMORY).forEach(key => {
    localStorage.setItem(key, LOCAL_STORAGE_MEMORY[key]);
  });
});

function testeTitle(lang, name) {
  cy.get('#locale').select(lang)
  cy.viewport(1200, 950)
  cy.wait(500)
  cy.get('.logo h1').then((theElement) => {
    return theElement.text()
  }).then(logo => {
    expect(logo).to.contain(name)
    cy.log(`Logo title is ${logo}`);
  })
  cy.wait(500)
}

function testeFlag(lang, name) {
  cy.get('#locale').select(lang)
  cy.get('#GET-name').clear().type(name)
  cy.viewport(1300, 950)
  cy.get(`.flag img[alt='${name}']`)
    .scrollIntoView()
    .then((theElement) => {
    return theElement.attr("alt")
  }).then(flag => {
    expect(flag).to.contain(name)
    cy.log(`Flag title alt is ${flag}`);
  })
  cy.wait(500)
}

describe('Validar titulo nos Idiomas', () => {

  beforeEach(() => {
    cy.restoreLocalStorage();
  });

  afterEach(() => {
    cy.saveLocalStorage();
  });

  it('Home page visit scroll #app', () => {
    cy.visit('/')
    cy.get('#app').scrollIntoView()
  })

  for(let language in list_languages) {
    it(`Language ${list_languages[language][0]}`, () => {
      testeTitle(list_languages[language][1], list_languages[language][2])
    })
  }
})

describe('Validar Flags', () => {
  for(let language in list_languages) {
    it(`Flag ${list_languages[language][0]}`, () => {
      testeFlag(list_languages[language][1], list_languages[language][0])
    })
  }
  it('Select Brasil', () => {
    cy.get('.account:first-of-type')
      .scrollIntoView()
      .click({ force: true })
  })
})
