import { RootState } from 'states/store';
import useShallowEqualSelector from './useShallowEqualSelector';
import { geoLocationActions } from 'states/geoLocation';
import useActions from './useActions';

const selector = ({ geoLocation: { loading, data, message } }: RootState) => ({
  loading,
  location: data?.location,
  message,
});

const useLocationByIP = () => {
  const [detectLocationByIP] = useActions(geoLocationActions.detectGeoLocation);
  const state = useShallowEqualSelector(selector);
  return {
    ...state,
    detectLocationByIP,
  };
};

export default useLocationByIP;
