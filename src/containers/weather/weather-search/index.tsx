import React, { memo, useEffect } from 'react';
import { Box, Grid, Typography } from '@material-ui/core';
import useQuery from 'hooks/useQuery';
import useSearchWeatherLocation from 'hooks/useSearchWeatherLocation';
import useActions from 'hooks/useActions';
import useIsMounted from 'hooks/useIsMounted';
import { metaWeatherActions } from 'states/metaWeather';
import LoadingPage from 'components/common/loading-page';
import LocationItem from 'components/weather/location-item';
import CityLink from 'components/weather/city-link';
import useStyles from './styles';

export const WeatherSearchComponent: React.FC = () => {
  const classes = useStyles();
  const query = useQuery();
  const isMounted = useIsMounted();
  const [resetWeatherSearch] = useActions(
    metaWeatherActions.resetWeatherSearch,
  );
  const { loading, data } = useSearchWeatherLocation(
    query.query ?? '',
    'query',
  );

  useEffect(() => {
    resetWeatherSearch();
  }, [resetWeatherSearch]);

  useEffect(() => {
    resetWeatherSearch();
  }, [query.query, resetWeatherSearch]);

  return (
    <Box data-testid="WeatherSearch" className={classes.root}>
      {(loading || !isMounted) && <LoadingPage />}
      <Grid container justify="space-around">
        <Grid item xs="auto">
          <Box textAlign="center">
            <Typography variant="h5" component="h5" gutterBottom>
              {loading && `Searching keyword "${query.query}"....`}
              {!query.query && 'Please input query to search!'}
              {data && `Total found: ${data?.length} result(s)`}
            </Typography>
          </Box>
        </Grid>
        <Grid item xs></Grid>
      </Grid>
      {data && (
        <Grid container className={classes.locationGrid}>
          {data.map((location) => (
            <Grid item key={location.woeid}>
              <CityLink woeid={location.woeid}>
                <LocationItem location={location} />
              </CityLink>
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
};

const WeatherSearch = memo(WeatherSearchComponent);
WeatherSearch.displayName = 'WeatherSearch';

export default WeatherSearch;
