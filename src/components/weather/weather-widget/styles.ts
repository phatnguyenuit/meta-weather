import { makeStyles, createStyles, Theme } from '@material-ui/core';

const styles = (theme: Theme) =>
  createStyles({
    weatherIconSection: {
      margin: theme.spacing(0, 10),

      [theme.breakpoints.down('xs')]: {
        margin: theme.spacing(3, 0),
      },
    },
  });

const useStyles = makeStyles(styles, { classNamePrefix: 'WeatherWidget' });

export default useStyles;
