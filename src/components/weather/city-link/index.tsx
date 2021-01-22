import React, { memo } from 'react';
import { generatePath } from 'react-router';
import { Link } from 'react-router-dom';
import { WOEID } from 'types/metaWeather';
import { weatherPaths } from 'routes/paths';
import useStyles from './styles';

const weatherCityPath = weatherPaths.weatherCity(':woeid').path;

export const CityLinkComponent: React.FC<CityLinkProps> = ({
  woeid,
  children,
}) => {
  const classes = useStyles();
  return (
    <Link
      data-testid="CityLink"
      className={classes.root}
      to={generatePath(weatherCityPath, { woeid })}
    >
      {children}
    </Link>
  );
};

const CityLink = memo(CityLinkComponent);
CityLink.displayName = 'CityLink';

export default CityLink;

export interface CityLinkProps {
  woeid: WOEID;
  children: React.ReactNode;
}
