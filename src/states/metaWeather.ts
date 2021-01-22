/* eslint-disable @typescript-eslint/no-unused-vars */
import { call, put } from 'redux-saga/effects';
import service, { SearchLocationPayload } from 'services/metaWeather';
import {
  WeatherAtLocationData,
  WeatherSearchLocationData,
  WeatherState,
  WOEID,
} from 'types/metaWeather';
import { BaseResponse, ServiceErrorState } from 'types/common';
import { isSuccessResponse } from 'utils/common';
import createSlice from 'utils/state/createSlice';

const initialState: WeatherState = {
  weatherAtLocation: {},
  weatherSearchLocation: {},
};

const metaWeatherSlice = createSlice({
  name: 'metaWeather',
  initialState,
  reducers: {
    getWeatherAtLocation: (state: WeatherState, _woeid: WOEID) => ({
      ...state,
      weatherAtLocation: {
        ...state.weatherAtLocation,
        loading: true,
        message: undefined,
      },
    }),
    resetWeatherSearch: (state: WeatherState) => ({
      ...state,
      weatherSearchLocation: {
        ...state.weatherSearchLocation,
        data: undefined,
      },
    }),
    resetWeatherAtLocation: (state: WeatherState) => ({
      ...state,
      weatherAtLocation: {
        ...state.weatherAtLocation,
        data: undefined,
      },
    }),
    getWeatherAtLocationSuccess: (
      state: WeatherState,
      weatherAtLocationData: WeatherAtLocationData,
    ) => ({
      ...state,
      weatherAtLocation: {
        ...state.weatherAtLocation,
        data: weatherAtLocationData,
        loading: false,
        message: undefined,
      },
    }),
    getWeatherAtLocationFailed: (
      state: WeatherState,
      errorData: ServiceErrorState,
    ) => ({
      ...state,
      weatherAtLocation: {
        ...state.weatherAtLocation,
        ...errorData,
        data: undefined,
        loading: false,
      },
    }),
    searchWeatherLocation: (
      state: WeatherState,
      _payload: SearchLocationPayload,
    ) => {
      return {
        ...state,
        weatherSearchLocation: {
          ...state.weatherSearchLocation,
          loading: true,
          message: undefined,
        },
      };
    },
    searchWeatherLocationSuccess: (
      state: WeatherState,
      weatherSearchLocationData: WeatherSearchLocationData,
    ) => {
      return {
        ...state,
        weatherSearchLocation: {
          ...state.weatherSearchLocation,
          data: weatherSearchLocationData,
          loading: false,
          message: undefined,
        },
      };
    },
    searchWeatherLocationFailed: (
      state: WeatherState,
      errorData: ServiceErrorState,
    ) => {
      return {
        ...state,
        weatherSearchLocation: {
          ...state.weatherSearchLocation,
          ...errorData,
          data: undefined,
          loading: false,
        },
      };
    },
  },
  workers: {
    searchWeatherLocation: ({
      searchWeatherLocationSuccess,
      searchWeatherLocationFailed,
    }) =>
      function* handleSearchWeatherLocation({ payload }) {
        const res = (yield call(
          service.search,
          payload,
        )) as BaseResponse<WeatherSearchLocationData>;

        if (isSuccessResponse(res)) {
          yield put(searchWeatherLocationSuccess(res.data));
        } else {
          yield put(searchWeatherLocationFailed(res.data));
        }
      },
    getWeatherAtLocation: ({
      getWeatherAtLocationSuccess,
      getWeatherAtLocationFailed,
    }) =>
      function* handleGetWeatherAtLocation({ payload: woeid }) {
        const res = (yield call(
          service.get,
          woeid,
        )) as BaseResponse<WeatherAtLocationData>;

        if (isSuccessResponse(res)) {
          yield put(getWeatherAtLocationSuccess(res.data));
        } else {
          yield put(getWeatherAtLocationFailed(res.data));
        }
      },
  },
});

export default metaWeatherSlice;
export const { actions: metaWeatherActions } = metaWeatherSlice;
