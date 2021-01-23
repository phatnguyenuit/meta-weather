import React, { memo } from 'react';
import { Box, Grid, Typography } from '@material-ui/core';
import { WeatherAtLocationData } from 'types/metaWeather';
import WeatherWidget from 'components/weather/weather-widget';
import WeatherForecasts from 'components/weather/weather-forecasts';
import useStyles from './styles';

export const CityWeatherComponent: React.FC<CityWeatherProps> = ({ data }) => {
  const classes = useStyles();

  const todayWeather = data.consolidated_weather[0];
  const weatherForecasts = data.consolidated_weather.slice(1);
  return (
    <Box data-testid="CityWeather" className={classes.root}>
      <WeatherWidget
        title={data.title}
        date={data.time}
        weather={todayWeather}
      />
      <Grid
        container
        justify="space-around"
        className={classes.forecastSection}
      >
        <Grid item xs="auto">
          <Box textAlign="center">
            <Typography variant="h5" component="h5" gutterBottom>
              The next 5 days forecast
            </Typography>
          </Box>
        </Grid>
        <Grid item xs></Grid>
      </Grid>
      <WeatherForecasts forecasts={weatherForecasts} tz={data.timezone} />
    </Box>
  );
};

const CityWeather = memo(CityWeatherComponent);
CityWeather.displayName = 'CityWeather';

export default CityWeather;

export interface CityWeatherProps {
  data: WeatherAtLocationData;
}
