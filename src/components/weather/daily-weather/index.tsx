import React, { memo } from 'react';
import { Grid, Typography, Paper } from '@material-ui/core';
import { Weather } from 'types/metaWeather';
import WeatherIcon from 'components/weather/weather-icon';
import WindSpeed from 'components/weather/wind-speed';
import WeatherTemperature from 'components/weather/weather-temperature';
import { computeDisplayDate } from './utils';
import useStyles from './styles';

export const DailyWeatherComponent: React.FC<DailyWeatherProps> = ({
  weather,
  tz,
}) => {
  const classes = useStyles();
  return (
    <Paper data-testid="DailyWeather" className={classes.root} elevation={3}>
      <Grid container direction="column" spacing={1}>
        <Grid item>
          <Typography component="h6" variant="h6" gutterBottom>
            {computeDisplayDate(weather.applicable_date, undefined, tz)}
          </Typography>
        </Grid>
        <Grid item>
          <WeatherIcon
            width={48}
            height={48}
            name={weather.weather_state_abbr}
          />
        </Grid>
        <Grid item>
          <WeatherTemperature min={weather.min_temp} max={weather.max_temp} />
        </Grid>
        <Grid item>
          <WindSpeed
            speed={weather.wind_speed}
            direction={weather.wind_direction_compass}
          />
        </Grid>
      </Grid>
    </Paper>
  );
};

const DailyWeather = memo(DailyWeatherComponent);
DailyWeather.displayName = 'DailyWeather';

export default DailyWeather;

export interface DailyWeatherProps {
  weather: Weather;
  tz: string;
}
