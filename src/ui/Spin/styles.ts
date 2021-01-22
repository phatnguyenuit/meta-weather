import { makeStyles, Theme, createStyles } from '@material-ui/core';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      position: 'relative',
    },
    childrenWrapper: {
      '&$loading': {
        opacity: 0.5,
      },
    },
    progressWrapper: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      display: 'none',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: theme.zIndex.modal,
      '&$loading': {
        display: 'flex',
      },
    },
    loading: {},
  });

const useStyles = makeStyles(styles, { classNamePrefix: 'Spin' });

export default useStyles;
