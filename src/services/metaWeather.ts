import dayjs from 'dayjs';
import { DATE_FORMAT, META_WEATHER_PROXY_URL } from 'constants/common';
import {
  WeatherAtLocationData,
  WeatherSearchLocationData,
  WOEID,
} from 'types/metaWeather';
import BaseService from './base';

const today = dayjs().format(DATE_FORMAT);

class MetaWeatherService extends BaseService {
  constructor() {
    super({
      baseURL: META_WEATHER_PROXY_URL,
      headers: {
        authorization: 'fast-nguyen',
      },
    });
  }
  search = ({ value, field }: SearchLocationPayload) => {
    const params = new URLSearchParams({
      [field]: value,
    });
    return this.requestData<WeatherSearchLocationData>({
      url: `/location/search?${params}`,
      method: 'GET',
      cacheKey: `${field}:${value}:${today}`,
    });
  };
  get = (woeid: WOEID) => {
    return this.requestData<WeatherAtLocationData>({
      url: `/location/${woeid}`,
      method: 'GET',
    });
  };
}

const metaWeatherService = new MetaWeatherService();
export default metaWeatherService;

export type SearchLocationField = 'query' | 'lattlong';
export interface SearchLocationPayload {
  value: string;
  field: SearchLocationField;
}
