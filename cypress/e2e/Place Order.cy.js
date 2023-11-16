describe('Place Order', () => {
  it('Register while Checkout', () => {
    cy.visit('https://www.automationexercise.com/')
    /* ==== Generated with Cypress Studio ==== */
    cy.get(':nth-child(3) > .product-image-wrapper > .single-products > .product-overlay > .overlay-content > .btn').click({force: true});
    cy.get('u').click();
    cy.get('#cart_items > :nth-child(1)').should('be.visible');
    cy.get('.col-sm-6 > .btn').click();
    cy.get('.modal-body > :nth-child(2) > a > u').click();
    cy.get('[data-qa="signup-name"]').clear('a');
    cy.get('[data-qa="signup-name"]').type('arga');
    cy.get('[data-qa="signup-email"]').clear();
    cy.get('[data-qa="signup-email"]').type('arga12@gmail.com');
    cy.get('[data-qa="signup-button"]').click();
    cy.get('#id_gender1').check();
    cy.get('[data-qa="password"]').clear('a');
    cy.get('[data-qa="password"]').type('arga123');
    cy.get('[data-qa="days"]').select('4');
    cy.get('[data-qa="months"]').select('9');
    cy.get('[data-qa="years"]').select('2001');
    cy.get('form > :nth-child(7)').click();
    cy.get('#newsletter').check();
    cy.get('#optin').check();
    cy.get('[data-qa="first_name"]').clear('a');
    cy.get('[data-qa="first_name"]').type('arga');
    cy.get('[data-qa="last_name"]').clear();
    cy.get('[data-qa="last_name"]').type('katlyn');
    cy.get('[data-qa="company"]').clear('in');
    cy.get('[data-qa="company"]').type('indo');
    cy.get('[data-qa="address"]').clear('Kapi pramuja');
    cy.get('[data-qa="address"]').type('Kapi pramuja');
    cy.get('[data-qa="country"]').select('Singapore');
    cy.get('[data-qa="state"]').clear('indo');
    cy.get('[data-qa="state"]').type('indo');
    cy.get('[data-qa="city"]').clear('malang');
    cy.get('[data-qa="city"]').type('malang');
    cy.get('[data-qa="zipcode"]').clear('142311');
    cy.get('[data-qa="zipcode"]').type('142311');
    cy.get('[data-qa="mobile_number"]').clear('08');
    cy.get('[data-qa="mobile_number"]').type('089123151');
    cy.get('[data-qa="address2"]').clear('Kapi Pramuja');
    cy.get('[data-qa="address2"]').type('Kapi Pramuja');
    cy.get('[data-qa="create-account"]').click();
    cy.get('[data-qa="continue-button"]').click();
    cy.get(':nth-child(10) > a').should('have.text', ' Logged in as arga');
    cy.get('.shop-menu > .nav > :nth-child(3) > a').click();
    cy.get('.col-sm-6 > .btn').click();
    cy.get('#address_delivery').should('be.visible');
    cy.get(':nth-child(4) > .heading').should('have.text', 'Review Your Order');
    cy.get('.form-control').click();
    cy.get(':nth-child(7) > .btn').click();
    cy.get('[data-qa="name-on-card"]').clear('a');
    cy.get('[data-qa="name-on-card"]').type('arga');
    cy.get('[data-qa="card-number"]').clear('12');
    cy.get('[data-qa="card-number"]').type('12345678');
    cy.get('[data-qa="cvc"]').clear('6');
    cy.get('[data-qa="cvc"]').type('619');
    cy.get('[data-qa="expiry-month"]').clear('0');
    cy.get('[data-qa="expiry-month"]').type('08');
    cy.get('[data-qa="expiry-year"]').clear();
    cy.get('[data-qa="expiry-year"]').type('2001');
    cy.get('[data-qa="pay-button"]').click();
    cy.get(':nth-child(5) > a').click();
    cy.get('b').should('have.text', 'Account Deleted!');
    cy.get('[data-qa="continue-button"]').click();
    /* ==== End Cypress Studio ==== */
  })
  it('Register before Checkout', () => {
    cy.visit('https://www.automationexercise.com/')
    /* ==== Generated with Cypress Studio ==== */
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click();
    cy.get('[data-qa="signup-name"]').clear('k');
    cy.get('[data-qa="signup-name"]').type('kusu');
    cy.get('[data-qa="signup-email"]').clear('s');
    cy.get('[data-qa="signup-email"]').type('suku@gmail.com');
    cy.get('[data-qa="signup-button"]').click();
    cy.get('#id_gender1').check();
    cy.get('[data-qa="password"]').clear('1');
    cy.get('[data-qa="password"]').type('12345');
    cy.get('[data-qa="days"]').select('3');
    cy.get('[data-qa="months"]').select('2');
    cy.get('[data-qa="years"]').select('2014');
    cy.get('#newsletter').check();
    cy.get('#optin').check();
    cy.get('[data-qa="first_name"]').clear('K');
    cy.get('[data-qa="first_name"]').type('Kusuka');
    cy.get('[data-qa="last_name"]').clear('D');
    cy.get('[data-qa="last_name"]').type('Dia');
    cy.get('[data-qa="company"]').clear('W');
    cy.get('[data-qa="company"]').type('WER');
    cy.get('[data-qa="address"]').clear('J');
    cy.get('[data-qa="address"]').type('Jokja');
    cy.get('[data-qa="address2"]').clear('J');
    cy.get('[data-qa="address2"]').type('Jokja');
    cy.get('[data-qa="country"]').select('Australia');
    cy.get('[data-qa="state"]').clear('J');
    cy.get('[data-qa="state"]').type('Jokja');
    cy.get('[data-qa="city"]').clear('J');
    cy.get('[data-qa="city"]').type('Jokja');
    cy.get('[data-qa="zipcode"]').clear('6');
    cy.get('[data-qa="zipcode"]').type('67890');
    cy.get('[data-qa="mobile_number"]').clear('1');
    cy.get('[data-qa="mobile_number"]').type('1234098765');
    cy.get('[data-qa="create-account"]').click();
    cy.get('[data-qa="continue-button"]').click();
    cy.get(':nth-child(3) > .product-image-wrapper > .single-products > .product-overlay > .overlay-content > .btn').click({force: true});
    cy.get('.modal-footer > .btn').click();
    cy.get('.shop-menu > .nav > :nth-child(3) > a').click();
    cy.get('.col-sm-6 > .btn').click();
    cy.get(':nth-child(7) > .btn').click();
    cy.get('[data-qa="name-on-card"]').clear('K');
    cy.get('[data-qa="name-on-card"]').type('Kusuka');
    cy.get('[data-qa="card-number"]').clear('6');
    cy.get('[data-qa="card-number"]').type('67890');
    cy.get('[data-qa="cvc"]').clear('1');
    cy.get('[data-qa="cvc"]').type('13');
    cy.get('[data-qa="expiry-month"]').clear('0');
    cy.get('[data-qa="expiry-month"]').type('08');
    cy.get('[data-qa="expiry-year"]').clear('2');
    cy.get('[data-qa="expiry-year"]').type('2007');
    cy.get('[data-qa="pay-button"]').click();
    cy.get('[data-qa="continue-button"]').click();
    cy.get('.shop-menu > .nav > :nth-child(5) > a').click();
    cy.get('[data-qa="continue-button"]').click();
    /* ==== End Cypress Studio ==== */
  })
  it('Login before Checkout', () => {
    cy.visit('https://www.automationexercise.com/')
    /* ==== Generated with Cypress Studio ==== */
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click();
    cy.get('[data-qa="login-email"]').clear('y');
    cy.get('[data-qa="login-email"]').type('yvette@gmail.com');
    cy.get('[data-qa="login-password"]').clear('1');
    cy.get('[data-qa="login-password"]').type('12345');
    cy.get('[data-qa="login-button"]').click();
    cy.get(':nth-child(3) > .product-image-wrapper > .single-products > .product-overlay > .overlay-content > .btn').click({force: true});
    cy.get('u').click();
    cy.get('.col-sm-6 > .btn').click();
    cy.get(':nth-child(7) > .btn').click();
    cy.get('[data-qa="name-on-card"]').clear('A');
    cy.get('[data-qa="name-on-card"]').type('Arga');
    cy.get('[data-qa="card-number"]').clear('1');
    cy.get('[data-qa="card-number"]').type('12345');
    cy.get('[data-qa="cvc"]').clear('1');
    cy.get('[data-qa="cvc"]').type('12');
    cy.get('[data-qa="expiry-month"]').clear('0');
    cy.get('[data-qa="expiry-month"]').type('09');
    cy.get('[data-qa="expiry-year"]').clear('2');
    cy.get('[data-qa="expiry-year"]').type('2023');
    cy.get('[data-qa="pay-button"]').click();
    cy.get('[data-qa="continue-button"]').click();
    /* ==== End Cypress Studio ==== */
  })
})