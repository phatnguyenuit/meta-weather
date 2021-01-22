import { AsyncServiceState } from 'types/common';

export type WeatherLocationType =
  | 'City'
  | 'Region'
  | 'State'
  | 'Province'
  | 'Country'
  | 'Continent';
export type WOEID = string | number;

export interface WeatherLocation {
  title: string;
  location_type: WeatherLocationType;
  woeid: WOEID;
  latt_long: string;
  distance?: number;
}

export interface WeatherSource {
  title: string;
  slug: string;
  url: string;
  crawl_rate: number;
}

export interface Weather {
  id: number;
  weather_state_name: string;
  weather_state_abbr: string;
  wind_direction_compass: string;
  created: string;
  applicable_date: string;
  min_temp: number;
  max_temp: number;
  the_temp: number;
  wind_speed: number;
  wind_direction: number;
  air_pressure: number;
  humidity: number;
  visibility: number;
  predictability: number;
}

export interface WeatherAtLocationData extends WeatherLocation {
  consolidated_weather: Weather[];
  parent: WeatherLocation;
  time: string;
  sun_rise: string;
  sun_set: string;
  timezone: string;
  timezone_name: string;
}

export type WeatherSearchLocationData = WeatherLocation[];

export interface WeatherState {
  weatherAtLocation: AsyncServiceState<WeatherAtLocationData>;
  weatherSearchLocation: AsyncServiceState<WeatherSearchLocationData>;
}
