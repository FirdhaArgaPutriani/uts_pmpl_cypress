describe('Contact Us', () => {
  it('Form', () => {
    cy.visit('https://www.automationexercise.com/')
    /* ==== Generated with Cypress Studio ==== */
    cy.get('.shop-menu > .nav > :nth-child(8) > a').click();
    cy.get('[data-qa="name"]').clear('y');
    cy.get('[data-qa="name"]').type('yvette');
    cy.get('[data-qa="email"]').clear('y');
    cy.get('[data-qa="email"]').type('yvette@gmail.com');
    cy.get('[data-qa="subject"]').clear('S');
    cy.get('[data-qa="subject"]').type('So Good');
    cy.get('[data-qa="message"]').click();
    cy.get(':nth-child(6) > .form-control').click();
    cy.get('[data-qa="submit-button"]').click();
    cy.get('.status').click();
    cy.get('.status').click();
    cy.get('span').click();
    /* ==== End Cypress Studio ==== */
  })
})