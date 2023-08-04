describe('paginate', () => {
  beforeEach(() => cy.visit('/'));

  it('should not display if less than 10 repos', () => {
    cy.get('#cards').invoke('data', 'cy-count').should('be.lessThan', 10);
    cy.get('#paginator').should('not.exist');
  });

  it('should display if more than 10 repos', () => {
    cy.paginatePreparation();
  });

  it('should display next page on page click', () => {
    cy.paginatePreparation();
    cy.get('#page-list').children().eq(1).click();
    cy.get('#paginator').invoke('data', 'cy-page').should('equal', 2);
  });

  it('should display next page on right arrow button click', () => {
    cy.paginatePreparation();
    cy.get('#paginator > button').eq(1).click();
    cy.get('#paginator').invoke('data', 'cy-page').should('equal', 2);
  });

  it('should display prev page on page click', () => {
    cy.paginatePreparation();
    cy.get('#page-list').children().eq(1).click();
    cy.get('#page-list').children().eq(0).click();
    cy.get('#paginator').invoke('data', 'cy-page').should('equal', 1);
  });

  it('should display prev page on left arrow button click', () => {
    cy.paginatePreparation();
    cy.get('#paginator > button').eq(1).click();
    cy.get('#paginator > button').eq(0).click();
    cy.get('#paginator').invoke('data', 'cy-page').should('equal', 1);
  });

  it('should be disabled left arrow button on page 1', () => {
    cy.paginatePreparation();
    cy.get('#paginator > button').eq(0).should('be.disabled');
  });

  it('should not allow to load more than 10 pages', () => {
    cy.get('input').type('ts challenge');
    cy.get('#cards').invoke('data', 'cy-count').should('not.be.lessThan', 100);
    cy.get('#paginator').should('exist');

    for (let i = 0; i < 9; i++) {
      cy.get('#paginator > button').eq(1).click();
    }
    cy.get('#paginator').invoke('data', 'cy-page').should('equal', 10);
    cy.get('#paginator > button').eq(1).should('be.disabled');
  });
});
