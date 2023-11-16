describe('Cart', () => {
  it('Subscription', () => {
    cy.visit('https://www.automationexercise.com/')
    /* ==== Generated with Cypress Studio ==== */
    cy.get('.shop-menu > .nav > :nth-child(3) > a').click();
    cy.get('#susbscribe_email').clear('y');
    cy.get('#susbscribe_email').type('yvette@gmail.com');
    cy.get('#subscribe').click();
    /* ==== End Cypress Studio ==== */
  })
  it('Add Products', () => {
    cy.visit('https://www.automationexercise.com/')
    /* ==== Generated with Cypress Studio ==== */
    cy.get('.shop-menu > .nav > :nth-child(2) > a').click();
    cy.get(':nth-child(3) > .product-image-wrapper > .single-products > .product-overlay > .overlay-content > .btn').click({force: true});
    cy.get('.modal-footer > .btn').click();
    cy.get(':nth-child(4) > .product-image-wrapper > .single-products > .product-overlay > .overlay-content > .btn').click({force: true});
    cy.get('.modal-footer > .btn').click();
    cy.get('.shop-menu > .nav > :nth-child(3) > a').click();
    /* ==== End Cypress Studio ==== */
  })
  it('Product Quantity', () => {
    cy.visit('https://www.automationexercise.com/')
    /* ==== Generated with Cypress Studio ==== */
    cy.get(':nth-child(3) > .product-image-wrapper > .choose > .nav > li > a').click();
    cy.get('#quantity').clear('4');
    cy.get('#quantity').type('4');
    cy.get(':nth-child(5) > .btn').click();
    cy.get('u').click();
    /* ==== End Cypress Studio ==== */
  })
  it('Remove Products', () => {
    cy.visit('https://www.automationexercise.com/')

    /* ==== Generated with Cypress Studio ==== */
    cy.get(':nth-child(3) > .product-image-wrapper > .single-products > .product-overlay > .overlay-content > .btn').click({force: true});
    cy.get('.modal-footer > .btn').click();
    cy.get('.shop-menu > .nav > :nth-child(3) > a').click();
    cy.get('.cart_quantity_delete > .fa').click();
    /* ==== End Cypress Studio ==== */
  })
  it('Recommended items', () => {
    cy.visit('https://www.automationexercise.com/')
    /* ==== Generated with Cypress Studio ==== */
    cy.get('.active > :nth-child(3) > .product-image-wrapper > .single-products > .productinfo > .btn').click();
    cy.get('.modal-footer > .btn').click();
    cy.get('.shop-menu > .nav > :nth-child(3) > a').click();
    /* ==== End Cypress Studio ==== */
  })
})