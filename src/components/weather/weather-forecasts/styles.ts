import { makeStyles, createStyles, Theme } from '@material-ui/core';

const styles = (theme: Theme) =>
  createStyles({
    forecastGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
      gap: theme.spacing(2),
    },
  });

const useStyles = makeStyles(styles, { classNamePrefix: 'WeatherForecasts' });

export default useStyles;
