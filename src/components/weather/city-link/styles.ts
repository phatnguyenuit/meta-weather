import { makeStyles, createStyles, Theme } from '@material-ui/core';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      textDecoration: 'none',
      '&:hover': {
        textDecoration: 'none',
      },
    },
  });

const useStyles = makeStyles(styles, { classNamePrefix: 'CityLink' });

export default useStyles;
