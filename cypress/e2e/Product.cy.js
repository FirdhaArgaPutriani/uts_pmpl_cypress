describe('Product', () => {
  it('Verify & Product Detail Page', () => {
    cy.visit('https://www.automationexercise.com/')
    /* ==== Generated with Cypress Studio ==== */
    cy.get('.shop-menu > .nav > :nth-child(2) > a').click();
    cy.get(':nth-child(3) > .product-image-wrapper > .choose > .nav > li > a').click();
    /* ==== End Cypress Studio ==== */
  })
  it('Search', () => {
    cy.visit('https://www.automationexercise.com/')
    /* ==== Generated with Cypress Studio ==== */
    cy.get('.shop-menu > .nav > :nth-child(2) > a').click();
    cy.get('#search_product').clear('B');
    cy.get('#search_product').type('Blue');
    cy.get('#submit_search').click();
    /* ==== End Cypress Studio ==== */
  })
  it('View Category Products', () => {
    cy.visit('https://www.automationexercise.com/')

    /* ==== Generated with Cypress Studio ==== */
    cy.get('.shop-menu > .nav > :nth-child(2) > a').click();
    cy.get('#Women > .panel-body > ul > :nth-child(2) > a').click({force: true});
    cy.get(':nth-child(2) > .panel-heading > .panel-title > a > .badge > .fa').click();
    cy.get('#Men > .panel-body > ul > :nth-child(1) > a').click({force: true});
    /* ==== End Cypress Studio ==== */
  })
  it('View & Cart Brand', () => {
    cy.visit('https://www.automationexercise.com/')

    /* ==== Generated with Cypress Studio ==== */
    cy.get('.shop-menu > .nav > :nth-child(2) > a').click();
    cy.get('.brands-name > .nav > :nth-child(1) > a').click();
    cy.get('.brands-name > .nav > :nth-child(3) > a').click();
    /* ==== End Cypress Studio ==== */
  })
  it('Search Products and Verify Cart After Login', () => {
    cy.visit('https://www.automationexercise.com/')

    /* ==== Generated with Cypress Studio ==== */
    cy.get('.shop-menu > .nav > :nth-child(3) > a').click();
    cy.get('.nav > :nth-child(2) > a').click();
    cy.get('#search_product').clear();
    cy.get('#search_product').type('blue{enter}');
    cy.get('#submit_search > .fa').click();
    cy.get(':nth-child(3) > .product-image-wrapper > .single-products > .product-overlay > .overlay-content > .btn').click({force: true});
    cy.get('.modal-footer > .btn').click();
    cy.get(':nth-child(3) > a > .fa').click();
    cy.get(':nth-child(4) > a').click();
    cy.get('[data-qa="login-email"]').clear('y');
    cy.get('[data-qa="login-email"]').type('yvette@gmail.com');
    cy.get('[data-qa="login-password"]').clear('1');
    cy.get('[data-qa="login-password"]').type('12345');
    cy.get('body').click();
    cy.get('[data-qa="login-button"]').click();
    /* ==== End Cypress Studio ==== */
  })
  it('Add review', () => {
    cy.visit('https://www.automationexercise.com/')

    /* ==== Generated with Cypress Studio ==== */
    cy.get('.shop-menu > .nav > :nth-child(2) > a').click();
    cy.get(':nth-child(3) > .product-image-wrapper > .choose > .nav > li > a').click();
    cy.get('#name').clear('y');
    cy.get('#name').type('yvette');
    cy.get('#email').clear('y');
    cy.get('#email').type('yvette@gmail.com');
    cy.get('#review').click();
    cy.get('#button-review').click();
    /* ==== End Cypress Studio ==== */
  })
})