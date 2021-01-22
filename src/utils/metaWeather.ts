import { WOEID } from 'types/metaWeather';

const baseImageUrl =
  'https://www.metaweather.com/static/img/weather/{abbr}.svg';
export const getWeatherIcon = (name: string) =>
  baseImageUrl.replace('{abbr}', name);

export const isValidWoeid = (woeid: WOEID) => {
  return /^\d+$/.test(woeid.toString());
};
