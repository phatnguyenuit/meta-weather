import { useEffect } from 'react';

import useActions from './useActions';
import { metaWeatherActions } from 'states/metaWeather';

const useResetWeatherAtLocation = () => {
  const [resetWeatherAtLocation] = useActions(
    metaWeatherActions.resetWeatherAtLocation,
  );

  useEffect(() => {
    resetWeatherAtLocation();
  }, [resetWeatherAtLocation]);
};

export default useResetWeatherAtLocation;
