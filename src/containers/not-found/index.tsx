import React, { memo } from 'react';

export const NotFoundComponent: React.FC = () => (
  <div data-testid="NotFound">NotFound</div>
);

const NotFound = memo(NotFoundComponent);
NotFound.displayName = 'NotFound';

export default NotFound;
