import { makeStyles, createStyles, fade, Theme } from '@material-ui/core';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(2, 3),
      textAlign: 'center',
      '&:hover': {
        backgroundColor: fade(theme.palette.common.black, 0.05),
      },
    },
    icon: {
      fontSize: theme.spacing(8),
    },
    title: {
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
    },
  });

const useStyles = makeStyles(styles, { classNamePrefix: 'LocationItem' });

export default useStyles;
