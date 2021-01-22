import { lazy, Suspense } from 'react';
import { ThemeProvider, CssBaseline } from '@material-ui/core';
import { Provider } from 'react-redux';
import { Switch, Router, Route, Redirect } from 'react-router-dom';
import { SnackbarProvider } from 'notistack';

import store from 'states/store';
import theme from 'theme';
import history from 'routes/history';
import Toast from 'components/common/toast';
import WeatherApp from 'components/app/weather';
import LoadingPage from 'components/common/loading-page';
import useStyles from './App.styles';

const NotFoundPage = lazy(() => import('containers/not-found'));
const App: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <ThemeProvider theme={theme}>
        <SnackbarProvider maxSnack={3}>
          <Provider store={store}>
            <CssBaseline />
            <Toast />
            <Router history={history}>
              <Suspense fallback={<LoadingPage />}>
                <Switch>
                  <Route path="/weathers">
                    <WeatherApp />
                  </Route>
                  <Redirect from="/" to="/weathers" exact />
                  <Route component={NotFoundPage} />
                </Switch>
              </Suspense>
            </Router>
          </Provider>
        </SnackbarProvider>
      </ThemeProvider>
    </div>
  );
};

export default App;
