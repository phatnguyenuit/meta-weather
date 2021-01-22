import { AsyncServiceState } from './common';

export interface IpResponseData {
  ip: string;
}

export type IpState = AsyncServiceState<IpResponseData>;
