import { useState, useEffect } from 'react';
import useLocalLocation from './useLocalLocation';
import { SearchLocationPayload } from '../services/metaWeather';
import useIp from './useIp';
import useLocationByIP from './useLocationByIP';
import toastService from 'services/toast';

/**
 * Compute Meta weather search location params
 * Case 1: Using local location provided by browser
 * Case 2: Detect IP & detect location by IP
 */
const useLocationSearchParams = () => {
  const {
    location: localLocation,
    error: localLocationError,
  } = useLocalLocation();
  const { ip, detectIp, loading: ipDetecting } = useIp();
  const { detectLocationByIP, location: locationByIp } = useLocationByIP();

  const [
    locationSearchParams,
    setLocationSearchParams,
  ] = useState<SearchLocationPayload>();

  useEffect(() => {
    // Case 1: Detect local location provided by browser success
    if (localLocation) {
      setLocationSearchParams({
        field: 'lattlong',
        value: `${localLocation.latt},${localLocation.long}`,
      });
    }

    // Case 2: Detect IP => detect location by IP
    /**
     * In case `localLocationError` and still not call detect IP
     * => Call API to detect IP
     */
    if (localLocationError && ipDetecting === undefined) {
      detectIp();
      toastService.notify('Detecting location by IP', 'info');
    }

    /**
     * In case having IP
     * => Call API to detect location via IP
     */
    if (ip) {
      detectLocationByIP(ip);
    }
  }, [
    detectIp,
    detectLocationByIP,
    ip,
    ipDetecting,
    localLocation,
    localLocationError,
  ]);

  // Detect location by IP success
  useEffect(() => {
    if (locationByIp && !localLocation) {
      setLocationSearchParams({
        field: 'query',
        value: locationByIp.city,
      });
    }
  }, [localLocation, locationByIp]);

  return locationSearchParams;
};

export default useLocationSearchParams;
