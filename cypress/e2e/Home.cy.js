describe('Home', () => {
  it('Subscription', () => {
    cy.visit('https://www.automationexercise.com/')
    /* ==== Generated with Cypress Studio ==== */
    cy.get('#susbscribe_email').clear('y');
    cy.get('#susbscribe_email').type('yvette@gmail.com');
    cy.get('#subscribe > .fa').click();
    /* ==== End Cypress Studio ==== */
  })
})