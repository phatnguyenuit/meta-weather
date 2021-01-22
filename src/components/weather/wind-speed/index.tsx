import React, { memo } from 'react';
import { Typography } from '@material-ui/core';
import useStyles from './styles';

export const WindSpeedComponent: React.FC<WindSpeedProps> = (props) => {
  const classes = useStyles(props);
  const { speed } = props;
  return (
    <Typography variant="caption" component="span">
      <span className={classes.dir}></span>
      <span className={classes.speed}>{speed.toFixed(0)}mph</span>
    </Typography>
  );
};

const WindSpeed = memo(WindSpeedComponent);
WindSpeed.displayName = 'WindSpeed';

export default WindSpeed;

export interface WindSpeedProps {
  speed: number; // mph
  direction: string; // compass direction
}
