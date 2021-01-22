import React, { memo } from 'react';
import { useParams } from 'react-router';
import { Box, Grid, Typography } from '@material-ui/core';
import useWeatherAtLocation from 'hooks/useWeatherAtLocation';
import useIsMounted from 'hooks/useIsMounted';
import useResetWeatherAtLocation from 'hooks/useResetWeatherAtLocation';
import CityWeather from 'components/weather/city-weather';
import LoadingPage from 'components/common/loading-page';
import { isValidWoeid } from 'utils/metaWeather';
import { INVALID_WOEID_MESSAGE } from 'constants/common';
import useStyles from './styles';

export const WeatherCityComponent: React.FC = () => {
  const classes = useStyles();
  const isMounted = useIsMounted();
  const { woeid } = useParams<{ woeid: string }>();
  const { loading, data, message } = useWeatherAtLocation(woeid);

  // Refresh weather at location
  useResetWeatherAtLocation();
  return (
    <Box data-testid="WeatherCity" className={classes.root}>
      {(loading || !isMounted) && <LoadingPage />}
      {data && <CityWeather data={data} />}
      <Grid container justify="space-around">
        <Grid item xs="auto">
          <Box textAlign="center">
            <Typography variant="h5" component="h5" gutterBottom>
              {!isValidWoeid(woeid) && INVALID_WOEID_MESSAGE}
              {message}
            </Typography>
          </Box>
        </Grid>
        <Grid item xs></Grid>
      </Grid>
    </Box>
  );
};

const WeatherCity = memo(WeatherCityComponent);
WeatherCity.displayName = 'WeatherCity';

export default WeatherCity;
