import { useEffect } from 'react';
import { metaWeatherActions } from 'states/metaWeather';
import { RootState } from 'states/store';
import { WOEID } from 'types/metaWeather';
import useActions from './useActions';
import useShallowEqualSelector from './useShallowEqualSelector';

const selector = ({ metaWeather }: RootState) => metaWeather.weatherAtLocation;

/**
 * Get weather of a $woeid
 * @param woeid Where on earth id
 */
const useWeatherAtLocation = (woeid?: WOEID) => {
  const [getWeatherAtLocation] = useActions(
    metaWeatherActions.getWeatherAtLocation,
  );

  useEffect(() => {
    if (woeid && /^\d+$/.test(woeid.toString())) {
      getWeatherAtLocation(woeid);
    }
  }, [woeid, getWeatherAtLocation]);

  return useShallowEqualSelector(selector);
};

export default useWeatherAtLocation;
