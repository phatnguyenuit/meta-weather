import { useMemo } from 'react';
import { RootState } from 'states/store';
import useLocationSearchParams from './useLocationSearchParams';
import useSearchWeatherLocation from './useSearchWeatherLocation';
import useWeatherAtLocation from './useWeatherAtLocation';
import useShallowEqualSelector from './useShallowEqualSelector';

const selector = ({ ip, geoLocation }: RootState) => {
  const ipLocationLoading = [ip.loading, geoLocation.loading].some(Boolean);
  return ipLocationLoading;
};

/**
 * Get current weather of user by detecting user location
 */
const useCurrentWeather = () => {
  const params = useLocationSearchParams();
  const { data } = useSearchWeatherLocation(params?.value, params?.field);
  const woeid = useMemo(() => data?.[0]?.woeid, [data]);
  const weatherAtLocationState = useWeatherAtLocation(woeid);
  const ipLocationLoading = useShallowEqualSelector(selector);

  return {
    ...weatherAtLocationState,
    loading: [weatherAtLocationState.loading, ipLocationLoading].some(Boolean),
  };
};

export default useCurrentWeather;
