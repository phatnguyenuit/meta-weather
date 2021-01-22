import React, { memo } from 'react';
import { Typography, Paper } from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import { WeatherLocation } from 'types/metaWeather';
import useStyles from './styles';

export const LocationItemComponent: React.FC<WeatherLocationProps> = ({
  location,
}) => {
  const classes = useStyles();
  return (
    <Paper elevation={2} className={classes.root} title={location.title}>
      <LocationOnOutlinedIcon className={classes.icon} />
      <Typography variant="h6" className={classes.title} title={location.title}>
        {location.title}
      </Typography>
    </Paper>
  );
};

const LocationItem = memo(LocationItemComponent);
LocationItem.displayName = 'LocationItem';

export default LocationItem;

export interface WeatherLocationProps {
  location: WeatherLocation;
}
