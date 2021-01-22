import LoadingPage from 'components/common/loading-page';
import React, { memo, Suspense } from 'react';
import { Redirect, Switch, Route } from 'react-router-dom';
import { RouteInfo } from 'types/common';

const flattenRoutes = (routes: RouteInfo[], collectedRoutes: RouteInfo[]) => {
  routes.forEach((route) => {
    if (route.childRoutes) {
      flattenRoutes(route.childRoutes, collectedRoutes);
    } else {
      collectedRoutes.push(route);
    }
  });
};

export const RoutesComponent: React.FC<RoutesProps> = ({ routes }) => {
  let allRoutes: RouteInfo[] = [];
  flattenRoutes(routes, allRoutes);
  return (
    <Suspense fallback={<LoadingPage />}>
      <Switch>
        {allRoutes.map(({ path, exact = true, ...props }) => (
          <Route {...props} key={path} path={path} exact={exact} />
        ))}
        <Redirect from="/*" to="/not-found" />
      </Switch>
    </Suspense>
  );
};

const Routes = memo(RoutesComponent);
Routes.displayName = 'Routes';

export default Routes;

export interface RoutesProps {
  routes: RouteInfo[];
}
