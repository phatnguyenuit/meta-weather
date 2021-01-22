import createStore from 'utils/state/createStore';
import ip from './ip';
import geoLocation from './geoLocation';
import metaWeather from './metaWeather';

const store = createStore({
  ip,
  geoLocation,
  metaWeather,
});

export default store;
export type RootState = ReturnType<typeof store['getState']>;
