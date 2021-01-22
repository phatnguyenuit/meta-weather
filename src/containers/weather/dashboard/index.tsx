import React, { memo } from 'react';
import { Box } from '@material-ui/core';
import useCurrentWeather from 'hooks/useCurrentWeather';
import useResetWeatherAtLocation from 'hooks/useResetWeatherAtLocation';
import CityWeather from 'components/weather/city-weather';
import LoadingPage from 'components/common/loading-page';
import useStyles from './styles';
import useIsMounted from 'hooks/useIsMounted';

export const DashboardComponent: React.FC = () => {
  const { loading, data } = useCurrentWeather();
  const isMounted = useIsMounted();
  const classes = useStyles();

  // Refresh weather at location
  useResetWeatherAtLocation();

  return (
    <Box data-testid="Dashboard" className={classes.root}>
      {(loading || !isMounted) && <LoadingPage />}
      {data && <CityWeather data={data} />}
    </Box>
  );
};

const Dashboard = memo(DashboardComponent);
Dashboard.displayName = 'Dashboard';

export default Dashboard;
