describe('links', () => {
  beforeEach(() => cy.visit('/'));

  it('should check github link in repo card', () => {
    cy.get('#cards a')
      .invoke('attr', 'href')
      .should('not.be.empty')
      .should('not.equal', '#');
    cy.get('#cards a').invoke('attr', 'target').should('equal', '_blank');
    cy.get('#cards a > span').contains('GitHub Link');
  });

  it('should check github link in detail card', () => {
    cy.get('input').type('ts challenge').wait(2000);
    cy.get('[id^=repo-]').eq(0).click();
    cy.get('[id^=repo-] a')
      .eq(0)
      .invoke('attr', 'href')
      .should('not.be.empty')
      .should('not.equal', '#');
    cy.get('[id^=repo-] a')
      .eq(0)
      .invoke('attr', 'target')
      .should('equal', '_blank');
    cy.get('[id^=repo-] a > span').eq(0).contains('GitHub Link');
  });

  it('should check owner link in detail card', () => {
    cy.get('[id^=repo-]').eq(0).click();
    cy.get('[id^=repo-] a')
      .eq(1)
      .invoke('attr', 'href')
      .should('not.be.empty')
      .should('not.equal', '#');
    cy.get('[id^=repo-] a')
      .eq(1)
      .invoke('attr', 'target')
      .should('equal', '_blank');
    cy.get('[id^=repo-] a > h4').eq(0).contains('10often');
  });
});
