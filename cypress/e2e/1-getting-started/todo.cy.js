/// <reference types="cypress" />

// Welcome to Cypress!
//
// This spec file contains a variety of sample tests
// for a todo list app that are designed to demonstrate
// the power of writing tests in Cypress.
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress
import RegisterPage from './todo.page'

describe('example to-do app', () => {
    const comp = new RegisterPage();

  it('Companies testing 1', () => {
    
    comp.company();

    cy.contains('a', 'About Us').click();
  })

  it('Companies testing 2', () => {
    comp.company();

    cy.contains('a', 'Leadership').click();
  })

  it('Companies testing 3', () => {
    comp.company();
    
    cy.contains('a', 'Our History').click();
  })

  it('Companies testing 4', () => {
    comp.company();
    
    cy.contains('a', 'Supply Chain').click();
  })

  it('Companies testing 5', () => {
    comp.company();
    
    cy.contains('a', 'International').click();
  })


  it('Capabiliries 1', () => {
    
    comp.capabilities();

    cy.contains('a', 'Space').click();
  })

  it('Capabiliries 2', () => {
    
    comp.capabilities();

    cy.contains('a', 'Air').click();
  })

  it('Capabiliries 3', () => {
    
    comp.capabilities();

    cy.contains('a', 'Land').click();
  })

  it('Capabiliries 4', () => {
    
    comp.capabilities();

    cy.contains('a', 'Sea').click();
  })

  it('Capabiliries 5', () => {
    
    comp.capabilities();

    cy.contains('a', 'Cyber').click();
  })

  it('Newsroom 1', () => {
    
    comp.news();

    cy.contains('a', 'Newsroom').click();
  })

  it('Newsroom 2', () => {
    
    comp.news();

    cy.contains('a', 'Events').click();
  })
  })
