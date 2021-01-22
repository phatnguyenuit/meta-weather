import { makeStyles, createStyles, Theme } from '@material-ui/core';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      position: 'relative',
    },
    locationGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
      gap: theme.spacing(2),
    },
  });

const useStyles = makeStyles(styles, { classNamePrefix: 'WeatherSearch' });

export default useStyles;
