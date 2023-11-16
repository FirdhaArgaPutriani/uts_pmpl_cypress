describe('Scroll', () => {
  it('Using Arrow', () => {
    cy.visit('https://www.automationexercise.com/')
    /* ==== Generated with Cypress Studio ==== */
    cy.get('#scrollUp > .fa').click({force: true});
    /* ==== End Cypress Studio ==== */
  })
  it('No Arrow', () => {
    cy.visit('https://www.automationexercise.com/')
    /* ==== Generated with Cypress Studio ==== */
    cy.get('.header-middle').click();
    cy.get('body > :nth-child(3)').click({force: true});
    cy.get(':nth-child(4) > .adsbygoogle').click();
    cy.get('[style="height: auto !important;"]').click({multiple: true});
    cy.get('[style="height: auto !important;"]').click({multiple: true});
    cy.get('[style="height: auto !important;"]').click({multiple: true });
    cy.get('[style="height: auto !important;"]').click({multiple: true});
    cy.get('.header-middle').click();
    /* ==== End Cypress Studio ==== */
  })
})