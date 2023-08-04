describe('back button', () => {
  beforeEach(() => cy.visit('/'));

  it('should clcik back button and return to the repo list', () => {
    cy.get('input').type('ts challenge').wait(2000);
    cy.get('#cards')
      .get('[id^=repo-]')
      .eq(0)
      .invoke('attr', 'id')
      .then((id) => {
        cy.get('[id^=repo-]').eq(0).click().wait(2000);
        cy.get('#back-button').click();
        cy.get('#cards').should('exist');
        cy.get('#cards')
          .get('[id^=repo-]')
          .eq(0)
          .invoke('attr', 'id')
          .should('equal', id);
      });
  });
});
