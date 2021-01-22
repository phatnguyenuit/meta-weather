import { IpResponseData } from 'types/ip';
import BaseService from './base';

class IpService extends BaseService {
  constructor() {
    super({
      baseURL: `https://api.ipify.org`,
    });
  }
  detect = () => {
    return this.requestData<IpResponseData>({
      url: '/?format=json',
      method: 'GET',
    });
  };
}

const ipService = new IpService();
export default ipService;
