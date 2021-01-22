import React, { memo } from 'react';
import { Grid } from '@material-ui/core';
import { Weather } from 'types/metaWeather';
import DailyWeather from 'components/weather/daily-weather';
import useStyles from './styles';

export const WeatherForecastsComponent: React.FC<WeatherForecastsProps> = ({
  forecasts,
  tz,
}) => {
  const classes = useStyles();
  return (
    <Grid container justify="flex-start" className={classes.forecastGrid}>
      {forecasts.map((forecast) => (
        <Grid item key={forecast.id}>
          <DailyWeather weather={forecast} tz={tz} />
        </Grid>
      ))}
    </Grid>
  );
};

const WeatherForecasts = memo(WeatherForecastsComponent);
WeatherForecasts.displayName = 'WeatherForecasts';

export default WeatherForecasts;

export interface WeatherForecastsProps {
  forecasts: Weather[];
  tz: string;
}
