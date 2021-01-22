import React, { memo } from 'react';
import { Typography } from '@material-ui/core';

export const WeatherTemperatureComponent: React.FC<WeatherTemperatureProps> = ({
  min,
  max,
}) => (
  <Typography variant="caption">
    <span>Min: {min.toFixed(0)}°C</span>
    <br />
    <span>Max: {max.toFixed(0)}°C</span>
  </Typography>
);

const WeatherTemperature = memo(WeatherTemperatureComponent);
WeatherTemperature.displayName = 'WeatherTemperature';

export default WeatherTemperature;

export interface WeatherTemperatureProps {
  min: number;
  max: number;
}
