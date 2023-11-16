describe('Login', () => {
  it('Correct Email & Password', () => {
    cy.visit('https://www.automationexercise.com/')
    /* ==== Generated with Cypress Studio ==== */
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click();
    cy.get('[data-qa="login-email"]').clear('y');
    cy.get('[data-qa="login-email"]').type('yvette');
    cy.get('[data-qa="login-password"]').clear('y');
    cy.get('[data-qa="login-email"]').clear('yvette@');
    cy.get('[data-qa="login-email"]').type('yvette@gmail.com');
    cy.get('[data-qa="login-password"]').clear('1');
    cy.get('[data-qa="login-password"]').type('12345');
    cy.get('[data-qa="login-button"]').click();
    cy.get(':nth-child(10) > a').click();
    cy.get(':nth-child(10) > a').click();
    /* ==== End Cypress Studio ==== */
  })
  it('Inorrect Email & Password', () => {
    cy.visit('https://www.automationexercise.com/')
    /* ==== Generated with Cypress Studio ==== */
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click();
    cy.get('[data-qa="login-email"]').clear('y');
    cy.get('[data-qa="login-email"]').type('yanti');
    cy.get('[data-qa="login-password"]').clear('t');
    cy.get('[data-qa="login-email"]').clear('yanti@');
    cy.get('[data-qa="login-email"]').type('yanti@gmail.com');
    cy.get('[data-qa="login-password"]').clear('2');
    cy.get('[data-qa="login-password"]').type('23456');
    cy.get('[data-qa="login-button"]').click();
    /* ==== End Cypress Studio ==== */
  })
})