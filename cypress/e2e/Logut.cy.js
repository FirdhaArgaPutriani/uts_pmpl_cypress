describe('Logout', () => {
  it('Logout', () => {
    cy.visit('https://www.automationexercise.com/')
    /* ==== Generated with Cypress Studio ==== */
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click();
    cy.get('[data-qa="login-email"]').clear('y');
    cy.get('[data-qa="login-email"]').type('yvette@gmail.com');
    cy.get('[data-qa="login-password"]').clear('1');
    cy.get('[data-qa="login-password"]').type('12345');
    cy.get('[data-qa="login-button"]').click();
    cy.get(':nth-child(10) > a').click();
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click();
    /* ==== End Cypress Studio ==== */
  })
})