import { useCallback, useEffect, useState } from 'react';
import toastService from 'services/toast';

const useLocalLocation = () => {
  const [location, setLocation] = useState<SimpleLocation>();
  const [error, setError] = useState<GeolocationPositionError>();
  const handleGetLocationSuccess = useCallback(
    (position: GeolocationPosition) => {
      setLocation({
        latt: position.coords.latitude,
        long: position.coords.longitude,
      });
    },
    [],
  );
  const handleGetLocationError = useCallback(
    (error: GeolocationPositionError) => {
      setError(error);
      toastService.notify(error.message, 'error');
    },
    [],
  );

  useEffect(() => {
    if (global.navigator.geolocation) {
      global.navigator.geolocation.getCurrentPosition(
        handleGetLocationSuccess,
        handleGetLocationError,
        {
          enableHighAccuracy: true,
          timeout: 5000,
          maximumAge: 0,
        },
      );
    }
  }, [handleGetLocationError, handleGetLocationSuccess]);

  return { location, error };
};

export default useLocalLocation;

export interface SimpleLocation {
  latt: number;
  long: number;
}
