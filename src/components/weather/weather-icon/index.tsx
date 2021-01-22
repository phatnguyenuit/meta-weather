import React, { memo } from 'react';
import { getWeatherIcon } from 'utils/metaWeather';

export const WeatherIconComponent: React.FC<WeatherIconProps> = ({
  name,
  ...props
}) => <img {...props} alt="weather icon" src={getWeatherIcon(name)} />;

const WeatherIcon = memo(WeatherIconComponent);
WeatherIcon.displayName = 'WeatherIcon';

export default WeatherIcon;

export interface WeatherIconProps
  extends React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  > {
  name: string;
}
