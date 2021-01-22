import React from 'react';
import ReactDOM from 'react-dom';
import { Integrations } from '@sentry/tracing';
import * as Sentry from '@sentry/react';

import App from './App';
import { SENTRY_DSN } from './constants/common';
import reportWebVitals from './reportWebVitals';
import pkg from '../package.json';
import './index.css';

Sentry.init({
  dsn: SENTRY_DSN,
  autoSessionTracking: true,
  release: `${pkg.name}-${pkg.version}`,
  integrations: [new Integrations.BrowserTracing()],

  // We recommend adjusting this value in production, or using tracesSampler
  // for finer control
  tracesSampleRate: 0.2,
});

ReactDOM.render(<App />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
