import React, { memo } from 'react';
import Spin from 'ui/Spin';
import useStyles from './styles';

export const LoadingPageComponent: React.FC = () => {
  const classes = useStyles();
  return (
    <Spin
      data-testid="LoadingPage"
      loading
      color="primary"
      className={classes.root}
      size={72}
    />
  );
};

const LoadingPage = memo(LoadingPageComponent);
LoadingPage.displayName = 'LoadingPage';

export default LoadingPage;
