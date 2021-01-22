/* eslint-disable @typescript-eslint/no-unused-vars */
import { call, put } from 'redux-saga/effects';
import service from 'services/ip';
import { IpResponseData, IpState } from 'types/ip';
import { BaseResponse, ServiceErrorState } from 'types/common';
import { isSuccessResponse } from 'utils/common';
import createSlice from 'utils/state/createSlice';

const initialState: IpState = {};

const ipSlice = createSlice({
  name: 'ip',
  initialState,
  reducers: {
    detectIp: (state: IpState) => ({
      ...state,
      loading: true,
    }),
    detectSuccess: (state: IpState, ipData: IpResponseData) => ({
      ...state,
      data: ipData,
      loading: false,
    }),
    detectFailed: (state: IpState, error: ServiceErrorState) => ({
      ...state,
      ...error,
      data: undefined,
      loading: false,
    }),
  },
  workers: {
    detectIp: ({ detectSuccess, detectFailed }) =>
      function* handleDetectIp() {
        const res = (yield call(
          service.detect,
        )) as BaseResponse<IpResponseData>;

        if (isSuccessResponse(res)) {
          yield put(detectSuccess(res.data));
        } else {
          yield put(detectFailed(res.data));
        }
      },
  },
});

export default ipSlice;
export const { actions: ipActions } = ipSlice;
