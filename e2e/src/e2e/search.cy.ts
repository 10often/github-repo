describe('search', () => {
  beforeEach(() => cy.visit('/'));

  describe('should check empty input', () => {
    it('should be empty input', () => {
      cy.get('input').should('contain.value', '');
    });
    it('should exist own repo', () => {
      cy.get('[id^=repo-]')
        .eq(0)
        .invoke('data', 'cy-owner-id')
        .should('equal', 'MDQ6VXNlcjcyNDEwOTk1');
    });
  });

  describe('should check searching by input value', () => {
    it('should set input value', () => {
      cy.get('input').type('ts challenge');
      cy.get('[id^=repo-]')
        .eq(0)
        .invoke('data', 'cy-owner-id')
        .should('not.equal', 'MDQ6VXNlcjcyNDEwOTk1');
      cy.get('#cards').children().should('have.length.greaterThan', 0);
    });
  });
});
