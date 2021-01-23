/* eslint-disable jest/valid-expect */

describe('weather-city', () => {
  beforeEach(function () {
    cy.fixture('meta-weather/weather-at-location')
      .as('weatherAtLocationData')
      .then((data) => {
        cy.visit(`${Cypress.env('host')}/weathers/${data.woeid}`);
      });

    cy.intercept(
      {
        method: 'GET',
        url: /\/location\/\d+/,
      },
      (req) => {
        req.reply((res) => {
          res.delay(1000);
          res.send({ fixture: 'meta-weather/weather-at-location' });
        });
      },
    ).as('getCityWeatherRequest');
  });

  it('should render weather city page by id', function () {
    cy.get("[data-testid='searchInput']").should('have.value', '');
    cy.get('[data-testid="LoadingPage"]').should('be.visible');

    cy.wait('@getCityWeatherRequest');

    const { consolidated_weather, title } = this.weatherAtLocationData;
    cy.get("[data-testid='WeatherWidget']").should('contain.text', title);

    const currentForecast = consolidated_weather[0];
    cy.get("[data-testid='WeatherWidget']").should(
      'contain.text',
      currentForecast.weather_state_name,
    );

    const weatherForecasts = consolidated_weather.slice(1);
    cy.get("[data-testid='DailyWeather']").should(($items) => {
      expect($items).to.have.length(weatherForecasts.length);
    });
  });
});
