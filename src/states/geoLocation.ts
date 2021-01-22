/* eslint-disable @typescript-eslint/no-unused-vars */
import { call, put } from 'redux-saga/effects';
import service from 'services/geoLocation';
import { LocationResponseData, GeoLocationState } from 'types/geoLocation';
import { BaseResponse, ServiceErrorState } from 'types/common';
import { isSuccessResponse } from 'utils/common';
import createSlice from 'utils/state/createSlice';

const initialState: GeoLocationState = {};

const geoLocationSlice = createSlice({
  name: 'geoLocation',
  initialState,
  reducers: {
    detectGeoLocation: (state: GeoLocationState, _ip: string) => ({
      ...state,
      loading: true,
    }),
    detectSuccess: (
      state: GeoLocationState,
      geoLocationData: LocationResponseData,
    ) => ({
      ...state,
      data: geoLocationData,
      loading: false,
    }),
    detectFailed: (state: GeoLocationState, error: ServiceErrorState) => ({
      ...state,
      ...error,
      data: undefined,
      loading: false,
    }),
  },
  workers: {
    detectGeoLocation: ({ detectSuccess, detectFailed }) =>
      function* handleDetectGeoLocation({ payload: ip }) {
        const res = (yield call(
          service.detect,
          ip,
        )) as BaseResponse<LocationResponseData>;

        if (isSuccessResponse(res)) {
          yield put(detectSuccess(res.data));
        } else {
          yield put(detectFailed(res.data));
        }
      },
  },
});

export default geoLocationSlice;
export const { actions: geoLocationActions } = geoLocationSlice;
