import createStore from 'utils/state/createStore';
import {
  sampleWeatherAtLocation,
  sampleWeatherLocation,
} from 'constants/seeds';
import metaWeatherSlice, { metaWeatherActions } from '../metaWeather';
import { SearchLocationPayload } from '../../services/metaWeather';

const setupTest = () => {
  const store = createStore({
    metaWeather: metaWeatherSlice,
  });
  return store;
};

describe('metaWeather', () => {
  describe('actions & reducers', () => {
    describe('getWeatherAtLocation', () => {
      test('should work', () => {
        const store = setupTest();
        const woeid = 'woeid';
        const action = metaWeatherActions.getWeatherAtLocation(woeid);

        store.dispatch(action);
        const {
          metaWeather: { weatherAtLocation },
        } = store.getState();

        expect(weatherAtLocation.loading).toBe(true);
        expect(weatherAtLocation.code).toBe(undefined);
        expect(weatherAtLocation.data).toBe(undefined);
        expect(weatherAtLocation.message).toBe(undefined);
      });
    });
    describe('getWeatherAtLocationSuccess', () => {
      test('should work', () => {
        const store = setupTest();
        const action = metaWeatherActions.getWeatherAtLocationSuccess(
          sampleWeatherAtLocation,
        );

        store.dispatch(action);
        const {
          metaWeather: { weatherAtLocation },
        } = store.getState();

        expect(weatherAtLocation.loading).toBe(false);
        expect(weatherAtLocation.code).toBe(undefined);
        expect(weatherAtLocation.data).toStrictEqual(sampleWeatherAtLocation);
        expect(weatherAtLocation.message).toBe(undefined);
      });
    });
    describe('getWeatherAtLocationFailed', () => {
      test('should work', () => {
        const store = setupTest();
        const sampleError = { code: 400, message: 'Network error' };
        const action = metaWeatherActions.getWeatherAtLocationFailed(
          sampleError,
        );

        store.dispatch(action);
        const {
          metaWeather: { weatherAtLocation },
        } = store.getState();

        expect(weatherAtLocation.loading).toBe(false);
        expect(weatherAtLocation.code).toBe(sampleError.code);
        expect(weatherAtLocation.message).toBe(sampleError.message);
        expect(weatherAtLocation.data).toEqual(undefined);
      });
    });
    describe('searchWeatherLocation', () => {
      test('should work with latt/long params', () => {
        const store = setupTest();
        const samplePayload: SearchLocationPayload = {
          field: 'lattlong',
          value: '1,1',
        };
        const action = metaWeatherActions.searchWeatherLocation(samplePayload);

        store.dispatch(action);
        const {
          metaWeather: { weatherSearchLocation },
        } = store.getState();

        expect(weatherSearchLocation.loading).toBe(true);
        expect(weatherSearchLocation.code).toBe(undefined);
        expect(weatherSearchLocation.message).toBe(undefined);
        expect(weatherSearchLocation.data).toEqual(undefined);
      });
      test('should work with query params', () => {
        const store = setupTest();
        const samplePayload: SearchLocationPayload = {
          field: 'query',
          value: 'san',
        };
        const action = metaWeatherActions.searchWeatherLocation(samplePayload);

        store.dispatch(action);
        const {
          metaWeather: { weatherSearchLocation },
        } = store.getState();

        expect(weatherSearchLocation.loading).toBe(true);
        expect(weatherSearchLocation.code).toBe(undefined);
        expect(weatherSearchLocation.message).toBe(undefined);
        expect(weatherSearchLocation.data).toEqual(undefined);
      });
    });
    describe('searchWeatherLocationSuccess', () => {
      test('should work', () => {
        const store = setupTest();
        const action = metaWeatherActions.searchWeatherLocationSuccess([
          sampleWeatherLocation,
        ]);

        store.dispatch(action);
        const {
          metaWeather: { weatherSearchLocation },
        } = store.getState();

        expect(weatherSearchLocation.loading).toBe(false);
        expect(weatherSearchLocation.code).toBe(undefined);
        expect(weatherSearchLocation.message).toBe(undefined);
        expect(weatherSearchLocation.data).toContain(sampleWeatherLocation);
      });
    });
    describe('searchWeatherLocationFailed', () => {
      test('should work', () => {
        const store = setupTest();
        const sampleError = { code: 400, message: 'Network error' };
        const action = metaWeatherActions.searchWeatherLocationFailed(
          sampleError,
        );

        store.dispatch(action);
        const {
          metaWeather: { weatherSearchLocation },
        } = store.getState();

        expect(weatherSearchLocation.loading).toBe(false);
        expect(weatherSearchLocation.code).toBe(sampleError.code);
        expect(weatherSearchLocation.message).toBe(sampleError.message);
        expect(weatherSearchLocation.data).toStrictEqual(undefined);
      });
    });
  });
});
