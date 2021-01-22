import { lazy } from 'react';
import { RouteInfo } from 'types/common';
import { weatherPaths } from './paths';

const routes: RouteInfo[] = [
  /**
   * DASHBOARD
   */
  {
    ...weatherPaths.dashboard(),
    component: lazy(() => import('containers/weather/dashboard')),
  },
  /**
   * WEATHERS
   */
  {
    ...weatherPaths.dashboard(),
    childRoutes: [
      {
        ...weatherPaths.weatherSearch(),
        component: lazy(() => import('containers/weather/weather-search')),
      },
      {
        ...weatherPaths.weatherCity(':woeid'),
        component: lazy(() => import('containers/weather/weather-city')),
      },
    ],
  },
];

export default routes;
