import { useEffect } from 'react';
import { metaWeatherActions } from 'states/metaWeather';
import { RootState } from 'states/store';
import { SearchLocationPayload } from 'services/metaWeather';
import useActions from './useActions';
import useShallowEqualSelector from './useShallowEqualSelector';

const selector = ({ metaWeather }: RootState) =>
  metaWeather.weatherSearchLocation;

const useSearchWeatherLocation = (
  value?: SearchLocationPayload['value'],
  field?: SearchLocationPayload['field'],
) => {
  const [searchWeatherLocation] = useActions(
    metaWeatherActions.searchWeatherLocation,
  );

  useEffect(() => {
    if (field && value) {
      searchWeatherLocation({ field, value });
    }
  }, [value, field, searchWeatherLocation]);

  return useShallowEqualSelector(selector);
};

export default useSearchWeatherLocation;
