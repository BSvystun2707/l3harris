import RegisterPage from './todo.page'

describe('example to-do app', () => {
    const comp = new RegisterPage();

    afterEach(function() {
      // Перевіряємо, чи тест не пройшов, і якщо ні, робимо скріншот
      if (this.currentTest.state === 'failed') {
        cy.screenshot(`failure-${this.currentTest.title}`);
      }
    });
    
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
  it('Newsroom 3', () => {
    
    comp.news();

    cy.contains('a', 'Editorials').click();
  })

  it('Newsroom 4', () => {
    
    comp.news();

    cy.contains('a', 'Media Contacts').click();
  })

  it('Investors 1', () => {
    
    comp.inv();

    cy.contains('a', 'Investors').click();
  })
  it('Investors 2', () => {
    
    comp.inv();

    cy.contains('a', 'Latest Financial Results').click();
  })
  it('Investors 3', () => {
    
    comp.inv();

    cy.contains('a', 'SEC Filings').click();
  })
  })