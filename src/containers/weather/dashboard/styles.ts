import { makeStyles, createStyles, Theme } from '@material-ui/core';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      position: 'relative',
    },
  });

const useStyles = makeStyles(styles, { classNamePrefix: 'WeatherApp' });

export default useStyles;
