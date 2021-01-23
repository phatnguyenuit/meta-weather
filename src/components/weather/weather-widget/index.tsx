import React, { memo } from 'react';
import { Box, Grid, Typography } from '@material-ui/core';
import { Weather } from 'types/metaWeather';
import { formatDate } from 'components/weather/daily-weather/utils';
import WeatherIcon from 'components/weather/weather-icon';
import WeatherTemperature from 'components/weather/weather-temperature';
import WindSpeed from 'components/weather/wind-speed';
import useStyles from './styles';

export const WeatherWidgetComponent: React.FC<WeatherWidgetProps> = ({
  title,
  date,
  weather,
}) => {
  const classes = useStyles();
  return (
    <Grid
      data-testid="WeatherWidget"
      container
      justify="flex-start"
      alignItems="center"
    >
      <Grid item sm xs={12} md="auto">
        <Grid container direction="column" alignItems="center">
          <Box textAlign="center">
            <Typography variant="h4" gutterBottom>
              {title}
            </Typography>
            <Typography variant="h5" gutterBottom>
              {formatDate(date)}
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <Grid item sm xs={12} md="auto" className={classes.weatherIconSection}>
        <Grid container direction="column" alignItems="center">
          <WeatherIcon
            width={96}
            height={96}
            name={weather.weather_state_abbr}
          />
          <Typography>{weather.weather_state_name}</Typography>
        </Grid>
      </Grid>
      <Grid item sm xs={12} md="auto">
        <Grid container direction="column" alignItems="center">
          <WeatherTemperature max={weather.max_temp} min={weather.min_temp} />
          <WindSpeed
            speed={weather.wind_speed}
            direction={weather.wind_direction_compass}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

const WeatherWidget = memo(WeatherWidgetComponent);
WeatherWidget.displayName = 'WeatherWidget';

export default WeatherWidget;

export interface WeatherWidgetProps {
  title: string;
  date: string;
  weather: Weather;
}
