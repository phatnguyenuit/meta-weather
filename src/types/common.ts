import { RouteProps } from 'react-router-dom';

export interface StoreServiceState {
  readonly loading?: boolean;
}

export type BaseResponse<TData = unknown> =
  | FailResponse
  | SuccessResponse<TData>;

export interface SuccessResponse<TData = unknown> {
  kind: 'success';
  data: TData;
}

export interface FailResponse {
  kind: 'failed';
  data: ServiceErrorState;
}

export interface ServiceErrorState {
  code?: number;
  message?: string;
}

export type AsyncServiceState<TData> = { data?: TData } & StoreServiceState &
  ServiceErrorState;

export interface LinkInfo {
  title: string;
  path: string;
}

export interface RouteInfo extends LinkInfo, OmitFrom<RouteProps, 'path'> {
  childRoutes?: RouteInfo[];
}
