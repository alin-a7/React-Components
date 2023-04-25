/// <reference types="cypress" />

describe('Just visit e2e test', () => {
  it('should visit pages', () => {
    cy.visit('/', { timeout: 60000 })

    cy.contains('Rick')

    cy.contains('About').click()
    cy.url().should('include', '/about')

    cy.contains('Form').click()
    cy.url().should('include', '/form')
  })
})

describe('Check pages', () => {
  it('visit Form page', () => {
    cy.visit('/forms')

    cy.get('input[type="text"]').type('rick')
    cy.should('have.value', 'rick')
  })
})

describe('My First Test', () => {
  it('Does not do much!', () => {
    expect(true).to.equal(true)
  })
})
