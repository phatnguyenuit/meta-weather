import { makeStyles, createStyles, fade, Theme } from '@material-ui/core';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      position: 'fixed',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: 1200,
      backgroundColor: fade(theme.palette.common.black, 0.3),
      transition: theme.transitions.create('all'),
    },
  });

const useStyles = makeStyles(styles, { classNamePrefix: 'LoadingPage' });

export default useStyles;
