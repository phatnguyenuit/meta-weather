describe('dashboard', () => {
  beforeEach(function () {
    cy.fixture('meta-weather/current-location').as('currentLocations');
    cy.fixture('meta-weather/current-weather').as('weatherAtLocationData');
    cy.visit(Cypress.env('host'));

    cy.intercept(
      {
        method: 'GET',
        url: 'https://api.ipify.org',
      },
      { fixture: 'meta-weather/ip' },
    );

    cy.intercept(
      {
        method: 'GET',
        url: 'https://ip-geolocation.whoisxmlapi.com',
      },
      { fixture: 'meta-weather/location-by-ip' },
    );

    cy.intercept(
      {
        method: 'GET',
        url: '/location/search',
      },
      { fixture: 'meta-weather/current-location' },
    );

    cy.intercept(
      {
        method: 'GET',
        url: /\/location\/\d+/,
      },
      { fixture: 'meta-weather/current-weather' },
    );
  });

  it('should render dashboard', function () {
    cy.get('[data-testid="WeatherWidget"]').should(
      'contain.text',
      this.currentLocations[0].title,
    );
    const { consolidated_weather } = this.weatherAtLocationData;
    cy.get('[data-testid="WeatherWidget"]').should(
      'contain.text',
      consolidated_weather[0].weather_state_name,
    );
    const forecastItems = consolidated_weather.slice(1);
    cy.get('[data-testid="DailyWeather"]').should(($items) => {
      // eslint-disable-next-line jest/valid-expect
      expect($items).to.have.length(forecastItems.length);
    });
  });

  it('should be able to search city', function () {
    cy.get('[data-testid="searchInput"]').type('san{enter}');
    cy.url().should('contain', '/search?query=san');
  });
});
