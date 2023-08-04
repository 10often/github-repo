describe('open card', () => {
  beforeEach(() => cy.visit('/'));

  it('should equal repo id from card and detail', () => {
    cy.get('#cards')
      .get('[id^=repo-]')
      .eq(0)
      .invoke('attr', 'id')
      .then((id) => {
        cy.log(id);
        cy.get('#cards').get('[id^=repo-]').eq(0).click();
        cy.get('[id^=repo-]').invoke('attr', 'id').should('equal', id);
      });
  });
});
