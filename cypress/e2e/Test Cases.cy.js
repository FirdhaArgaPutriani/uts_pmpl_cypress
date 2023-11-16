describe('Test Case', () => {
  it('Verify', () => {
    cy.visit('https://www.automationexercise.com/')
    /* ==== Generated with Cypress Studio ==== */
    cy.get(':nth-child(5) > a > .fa').click();
    cy.get(':nth-child(2) > .panel > .panel-heading > .panel-title > a > u').click();
    /* ==== End Cypress Studio ==== */
  })
})