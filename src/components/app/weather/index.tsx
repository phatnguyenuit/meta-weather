import React, { memo, useCallback, useEffect } from 'react';
import { generatePath, useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { Box, InputBase, Typography, Toolbar, AppBar } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import routes from 'routes';
import Routes from 'routes/Routes';
import { weatherPaths } from 'routes/paths';
import useQuery from 'hooks/useQuery';
import useStyles from './styles';

export const WeatherAppComponent: React.FC = () => {
  const inputRef = React.createRef<HTMLInputElement>();
  const classes = useStyles();
  const history = useHistory();
  const query = useQuery();
  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const searchPath = weatherPaths.weatherSearch({
        query: (inputRef.current as HTMLInputElement).value,
      }).path;
      history.push(searchPath);
    },
    [history, inputRef],
  );

  // Clear input ref if path not on search
  useEffect(() => {
    if (inputRef.current && !history.location.pathname.includes('search')) {
      inputRef.current.value = '';
    }
  }, [history.location.pathname, inputRef]);
  return (
    <Box data-testid="WeatherApp" className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <Link
            className={classes.title}
            to={generatePath(weatherPaths.dashboard().path)}
          >
            <Typography variant="h6" noWrap>
              Meta Weather
            </Typography>
          </Link>
          <div className={classes.grow} />
          <div className={classes.search}>
            <form data-testid="searchForm" onSubmit={handleSubmit}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                autoComplete={'off'}
                placeholder="Search city…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{
                  'aria-label': 'search',
                  'data-testid': 'searchInput',
                }}
                name="query"
                defaultValue={query.query}
                inputRef={inputRef}
              />
            </form>
          </div>
        </Toolbar>
      </AppBar>
      <Routes routes={routes} />
    </Box>
  );
};
const WeatherApp = memo(WeatherAppComponent);
WeatherApp.displayName = 'WeatherApp';

export default WeatherApp;
