import { makeStyles, fade, createStyles, Theme } from '@material-ui/core';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(2, 3),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.black, 0.05),
      },
    },
    link: {
      textDecoration: 'none',
      '&:hover': {
        textDecoration: 'underline',
      },
    },
  });

const useStyles = makeStyles(styles, { classNamePrefix: 'DailyWeather' });

export default useStyles;
