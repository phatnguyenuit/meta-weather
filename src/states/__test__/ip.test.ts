import createStore from 'utils/state/createStore';
import { sampleIp } from 'constants/seeds';
import ipSlice, { ipActions } from '../ip';

const setupTest = () => {
  const store = createStore({
    ip: ipSlice,
  });
  return store;
};

describe('ip', () => {
  describe('actions & reducers', () => {
    describe('detectIp', () => {
      test('should work', () => {
        const store = setupTest();
        const action = ipActions.detectIp();

        store.dispatch(action);
        const { ip } = store.getState();

        expect(ip.loading).toBe(true);
        expect(ip.code).toBe(undefined);
        expect(ip.data).toBe(undefined);
        expect(ip.message).toBe(undefined);
      });
    });
    describe('detectSuccess', () => {
      test('should work', () => {
        const store = setupTest();
        const action = ipActions.detectSuccess(sampleIp);

        store.dispatch(action);
        const { ip } = store.getState();

        expect(ip.loading).toBe(false);
        expect(ip.code).toBe(undefined);
        expect(ip.data).toStrictEqual(sampleIp);
        expect(ip.message).toBe(undefined);
      });
    });
    describe('detectFailed', () => {
      test('should work', () => {
        const store = setupTest();
        const sampleError = { code: 400, message: 'Network error' };
        const action = ipActions.detectFailed(sampleError);

        store.dispatch(action);
        const { ip } = store.getState();

        expect(ip.loading).toBe(false);
        expect(ip.code).toBe(sampleError.code);
        expect(ip.message).toBe(sampleError.message);
        expect(ip.data).toEqual(undefined);
      });
    });
  });
});
