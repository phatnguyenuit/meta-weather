import { LocationResponseData } from 'types/geoLocation';
import { GEO_ACCESS_KEY } from 'constants/common';
import BaseService from './base';

class GeoLocationService extends BaseService {
  constructor() {
    super({
      baseURL: 'https://ip-geolocation.whoisxmlapi.com',
    });
  }

  detect = (ip: string) => {
    const params = new URLSearchParams({
      apiKey: GEO_ACCESS_KEY,
      ipAddress: ip,
    });
    return this.requestData<LocationResponseData>({
      url: `/api/v1?${params}`,
      method: 'GET',
      cacheKey: ip, // Cache response by ip
    });
  };
}

const geoLocationService = new GeoLocationService();
export default geoLocationService;
