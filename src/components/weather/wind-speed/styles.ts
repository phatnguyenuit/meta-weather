import { makeStyles, Theme, createStyles } from '@material-ui/core';
import { WindSpeedProps } from '.';

const degreePerDirection: Record<string, number> = {
  'dir-nne': 22.5,
  'dir-ne': 45,
  'dir-ene': 67.5,
  'dir-e': 90,
  'dir-ese': 112.5,
  'dir-se': 135,
  'dir-sse': 157.5,
  'dir-s': 180,
  'dir-ssw': 202.5,
  'dir-sw': 225,
  'dir-wsw': 247.5,
  'dir-w': 270,
  'dir-wnw': 292.5,
  'dir-nw': 315,
  'dir-nnw': 337.5,
};

const styles = (theme: Theme) =>
  createStyles({
    dir: {
      background: 'url("https://www.metaweather.com/static/img/windarrow.svg")',
      width: '1em',
      height: '1em',
      display: 'inline-block',
      backgroundSize: '100% 100%',
      transform: ({ direction }: WindSpeedProps) => {
        const reg = degreePerDirection[`dir-${direction.toLowerCase()}`];
        return `rotate(${reg}deg)`;
      },
    },
    speed: {
      paddingLeft: theme.spacing(1 / 2),
    },
  });

const useStyles = makeStyles(styles, { classNamePrefix: 'WindSpeed' });

export default useStyles;
