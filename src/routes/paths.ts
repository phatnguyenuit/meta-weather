import { WOEID } from 'types/metaWeather';
import { createPaths } from 'utils/routes/paths';

const createPathWithSearch = (basePath: string, params: object = {}) => {
  const init = Object.fromEntries(
    Object.entries(params)
      .filter(
        ([, value]) => value !== undefined && value !== null && value !== '',
      )
      .map(([key, value]) => [key, String(value)]),
  );
  const search = new URLSearchParams(init).toString();
  return search ? `${basePath}?${search}` : basePath;
};

export const weatherPaths = createPaths('weathers', {
  dashboard: {
    title: 'Dashboard',
    path: '',
  },
  weatherSearch: {
    title: 'Weather Search',
    path: (params?: { query: string }) =>
      createPathWithSearch('search', params),
  },
  weatherCity: {
    title: 'Weather City',
    path: (woeid: WOEID) => `${woeid}`,
  },
});
