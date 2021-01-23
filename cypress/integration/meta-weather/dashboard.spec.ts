describe('dashboard', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4001');
  });

  it('should render dashboard', () => {
    cy.url().should('include', '/weathers');
  });
});
