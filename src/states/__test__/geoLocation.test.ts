import createStore from 'utils/state/createStore';
import { sampleLocationByIP } from 'constants/seeds';
import geoLocationSlice, { geoLocationActions } from '../geoLocation';

const setupTest = () => {
  const store = createStore({
    geoLocation: geoLocationSlice,
  });
  return store;
};

describe('geoLocation', () => {
  describe('actions & reducers', () => {
    describe('detectGeoLocation', () => {
      test('should work', () => {
        const store = setupTest();
        const action = geoLocationActions.detectGeoLocation('ip');

        store.dispatch(action);
        const { geoLocation } = store.getState();

        expect(geoLocation.loading).toBe(true);
        expect(geoLocation.code).toBe(undefined);
        expect(geoLocation.data).toBe(undefined);
        expect(geoLocation.message).toBe(undefined);
      });
    });
    describe('detectSuccess', () => {
      test('should work', () => {
        const store = setupTest();
        const action = geoLocationActions.detectSuccess(sampleLocationByIP);

        store.dispatch(action);
        const { geoLocation } = store.getState();

        expect(geoLocation.loading).toBe(false);
        expect(geoLocation.code).toBe(undefined);
        expect(geoLocation.data).toStrictEqual(sampleLocationByIP);
        expect(geoLocation.message).toBe(undefined);
      });
    });
    describe('detectFailed', () => {
      test('should work', () => {
        const store = setupTest();
        const sampleError = { code: 400, message: 'Network error' };
        const action = geoLocationActions.detectFailed(sampleError);

        store.dispatch(action);
        const { geoLocation } = store.getState();

        expect(geoLocation.loading).toBe(false);
        expect(geoLocation.code).toBe(sampleError.code);
        expect(geoLocation.message).toBe(sampleError.message);
        expect(geoLocation.data).toEqual(undefined);
      });
    });
  });
});
