import { makeStyles, Theme, createStyles } from '@material-ui/core';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(8, 3, 0),
    },
  });

const useStyles = makeStyles(styles, { classNamePrefix: 'App' });

export default useStyles;
