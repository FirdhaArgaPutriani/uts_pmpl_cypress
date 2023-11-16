describe('Download', () => {
  it('Invoice', () => {
    cy.visit('https://www.automationexercise.com/')

    /* ==== Generated with Cypress Studio ==== */
    cy.get(':nth-child(3) > .product-image-wrapper > .single-products > .product-overlay > .overlay-content > .btn').click({force:true});
    cy.get('.modal-footer > .btn').click();
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click();
    cy.get('[data-qa="signup-name"]').clear('y');
    cy.get('[data-qa="signup-name"]').type('yuun');
    cy.get('[data-qa="signup-email"]').clear('y');
    cy.get('[data-qa="signup-email"]').type('yuu@gmail.com');
    cy.get('[data-qa="signup-button"]').click();
    cy.get('#id_gender1').check();
    cy.get('[data-qa="password"]').clear('1');
    cy.get('[data-qa="password"]').type('12345');
    cy.get('[data-qa="days"]').select('11');
    cy.get('[data-qa="months"]').select('5');
    cy.get('[data-qa="years"]').select('2010');
    cy.get('#newsletter').check();
    cy.get('form > :nth-child(8)').click();
    cy.get('#optin').check();
    cy.get('[data-qa="first_name"]').clear('y');
    cy.get('[data-qa="first_name"]').type('yuyuu');
    cy.get('[data-qa="last_name"]').clear('y');
    cy.get('[data-qa="last_name"]').type('yuuu');
    cy.get('[data-qa="company"]').clear('Q');
    cy.get('[data-qa="company"]').type('QWERTY');
    cy.get('[data-qa="address"]').clear('J');
    cy.get('[data-qa="address"]').type('Jugja');
    cy.get('[data-qa="address2"]').clear('J');
    cy.get('[data-qa="address2"]').type('Jugja');
    cy.get('[data-qa="country"]').select('United States');
    cy.get('[data-qa="state"]').clear('J');
    cy.get('[data-qa="state"]').type('Jugja');
    cy.get('[data-qa="city"]').clear('J');
    cy.get('[data-qa="city"]').type('Jugja');
    cy.get('[data-qa="zipcode"]').clear('1');
    cy.get('[data-qa="zipcode"]').type('123');
    cy.get('[data-qa="mobile_number"]').clear('0');
    cy.get('[data-qa="mobile_number"]').type('0987');
    cy.get('[data-qa="create-account"]').click();
    cy.get('[data-qa="continue-button"]').click();
    cy.get('.shop-menu > .nav > :nth-child(3) > a').click();
    cy.get('.col-sm-6 > .btn').click();
    cy.get(':nth-child(7) > .btn').click();
    cy.get('[data-qa="name-on-card"]').clear('Y');
    cy.get('[data-qa="name-on-card"]').type('Yuuu');
    cy.get('[data-qa="card-number"]').clear('1');
    cy.get('[data-qa="card-number"]').type('135');
    cy.get('[data-qa="cvc"]').click();
    cy.get('[data-qa="cvc"]').clear('2');
    cy.get('[data-qa="cvc"]').type('25');
    cy.get('[data-qa="expiry-month"]').clear('0');
    cy.get('[data-qa="expiry-month"]').type('04');
    cy.get(':nth-child(4) > :nth-child(3)').click();
    cy.get('[data-qa="expiry-year"]').clear('2');
    cy.get('[data-qa="expiry-year"]').type('2021');
    cy.get('[data-qa="pay-button"]').click();
    cy.get('.col-sm-9 > .btn-default').click();
    cy.get('[data-qa="continue-button"]').click();
    cy.get('.shop-menu > .nav > :nth-child(5) > a').click();
    cy.get('[data-qa="continue-button"]').click();
    /* ==== End Cypress Studio ==== */
  })
})