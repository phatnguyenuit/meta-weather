import { makeStyles, createStyles, Theme } from '@material-ui/core';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      position: 'relative',
    },
    loadingPage: {
      height: 'calc(100vh - 64px)',
    },
    forecastSection: {
      marginTop: theme.spacing(4),
    },
  });

const useStyles = makeStyles(styles, { classNamePrefix: 'WeatherCity' });

export default useStyles;
