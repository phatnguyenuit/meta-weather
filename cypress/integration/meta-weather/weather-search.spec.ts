/* eslint-disable jest/valid-expect */
describe('weather-search', () => {
  const searchValue = 'san';
  beforeEach(function () {
    cy.fixture('meta-weather/search-location').as('searchLocationData');
    cy.visit(`${Cypress.env('host')}/weathers/search?query=${searchValue}`);

    cy.intercept(
      {
        method: 'GET',
        url: '/location/search',
      },
      (req) => {
        req.reply((res) => {
          res.delay(1000);
          res.send({ fixture: 'meta-weather/search-location' });
        });
      },
    ).as('searchLocationRequest');
  });

  it('should render search page', function () {
    cy.get("[data-testid='searchInput']").should('have.value', searchValue);
    cy.get('[data-testid="LoadingPage"]').should('be.visible');
    cy.contains(`Searching keyword "${searchValue}"....`).should('be.visible');

    cy.wait('@searchLocationRequest');
    const locationLength = this.searchLocationData.length;
    cy.contains(`Total found: ${locationLength} result(s)`).should(
      'be.visible',
    );
    cy.get("[data-testid='CityLink']").should(($items) => {
      expect($items).to.have.length(locationLength);
    });

    const { woeid } = this.searchLocationData[0];
    cy.get("[data-testid='CityLink']").eq(0).click();

    cy.url().should('include', `/weathers/${woeid}`);
  });
});
