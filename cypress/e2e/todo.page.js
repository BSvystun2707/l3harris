class RegisterPage {
    company()
    {
        cy.visit('https://www.l3harris.com/')
        cy.get('span[class="h-no-underline"]').should('be.visible')
        cy.get('button[aria-label="Open menu popup"]').click();
        cy.wait(1000);
        cy.contains('button', 'Accept Cookies').click();
        cy.contains('span', 'Company').click({force: true});
    }

    capabilities()
    {
        cy.visit('https://www.l3harris.com/')
        cy.get('span[class="h-no-underline"]').should('be.visible')
        cy.get('button[aria-label="Open menu popup"]').click();
        cy.wait(1000);
        cy.contains('button', 'Accept Cookies').click();
        cy.contains('span', 'Capabilities').click({force: true});
    }

    news()
    {
        cy.visit('https://www.l3harris.com/')
        cy.get('span[class="h-no-underline"]').should('be.visible')
        cy.get('button[aria-label="Open menu popup"]').click();
        cy.wait(1000);
        cy.contains('button', 'Accept Cookies').click();
        cy.contains('span', 'Newsroom').click({force: true});
    }

    inv()
    {
        cy.visit('https://www.l3harris.com/')
        cy.get('span[class="h-no-underline"]').should('be.visible')
        cy.get('button[aria-label="Open menu popup"]').click();
        cy.wait(1000);
        cy.contains('button', 'Accept Cookies').click();
        cy.contains('span', 'Investors').click({force: true});
    }
    
}
  
export default RegisterPage; 