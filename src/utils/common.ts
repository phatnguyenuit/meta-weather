import { BaseResponse, SuccessResponse, FailResponse } from 'types/common';

export function isSuccessResponse<TData>(
  res: BaseResponse<TData>,
): res is SuccessResponse<TData> {
  return res.kind === 'success';
}

export function isFailedResponse<TData>(
  res: BaseResponse<TData>,
): res is FailResponse {
  return res.kind === 'failed';
}
