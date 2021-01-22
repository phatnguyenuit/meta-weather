/* eslint-disable import/no-extraneous-dependencies */
import { createBrowserHistory } from 'history';

const history = createBrowserHistory({ basename: process.env.PUBLIC_URL });
export default history;
