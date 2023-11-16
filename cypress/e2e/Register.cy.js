describe('Register', () => {
  it('Register 01', () => {
    cy.visit('https://www.automationexercise.com/')

    /* ==== Generated with Cypress Studio ==== */
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click();
    cy.get('[data-qa="signup-name"]').clear('c');
    cy.get('[data-qa="signup-name"]').type('cat');
    cy.get('[data-qa="signup-email"]').clear('l');
    cy.get('[data-qa="signup-email"]').type('lyn@gmail.com');
    cy.get('[data-qa="signup-button"]').click();
    cy.get('#id_gender2').check();
    cy.get('[data-qa="password"]').clear('1');
    cy.get('[data-qa="password"]').type('12345');
    cy.get('[data-qa="days"]').select('18');
    cy.get('[data-qa="months"]').select('12');
    cy.get('[data-qa="years"]').select('2010');
    cy.get('#newsletter').check();
    cy.get('#optin').check();
    cy.get('[data-qa="first_name"]').clear('C');
    cy.get('[data-qa="first_name"]').type('Catlyn');
    cy.get('[data-qa="last_name"]').clear('R');
    cy.get('[data-qa="last_name"]').type('Riana');
    cy.get('[data-qa="company"]').clear('A');
    cy.get('[data-qa="company"]').type('ASD');
    cy.get('[data-qa="address"]').clear('T');
    cy.get('[data-qa="address"]').type('Tokyo');
    cy.get('[data-qa="address2"]').clear('T');
    cy.get('[data-qa="address2"]').type('Tokyo');
    cy.get('[data-qa="country"]').select('Singapore');
    cy.get('[data-qa="state"]').clear('T');
    cy.get('[data-qa="state"]').type('Tokyo');
    cy.get('form > :nth-child(18)').click();
    cy.get('[data-qa="city"]').clear('T');
    cy.get('[data-qa="city"]').type('Tokyo');
    cy.get('[data-qa="zipcode"]').clear('1');
    cy.get('[data-qa="zipcode"]').type('1235');
    cy.get('[data-qa="mobile_number"]').clear('2');
    cy.get('[data-qa="mobile_number"]').type('2345678');
    cy.get('[data-qa="create-account"]').click();
    cy.get('[data-qa="continue-button"]').click();
    cy.get('.shop-menu > .nav').click();
    cy.get('.shop-menu > .nav > :nth-child(5) > a').click();
    cy.get('[data-qa="continue-button"]').click();
    /* ==== End Cypress Studio ==== */
  })
  it('Existing Email', () => {
    cy.visit('https://www.automationexercise.com/')

    /* ==== Generated with Cypress Studio ==== */
    cy.get(':nth-child(4) > a > .fa').click();
    cy.get('[data-qa="signup-name"]').clear('y');
    cy.get('[data-qa="signup-name"]').type('yvette');
    cy.get('[data-qa="signup-email"]').clear('y');
    cy.get('[data-qa="signup-email"]').type('yvette@gmail.com');
    cy.get('[data-qa="signup-button"]').click();
    /* ==== End Cypress Studio ==== */
  })
})