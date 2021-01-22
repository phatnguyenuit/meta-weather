import Axios, { AxiosRequestConfig, AxiosInstance, AxiosError } from 'axios';
import { BaseResponse, ServiceErrorState, SuccessResponse } from 'types/common';
import { NETWORK_TIMEOUT, NETWORK_TIMEOUT_MESSAGE } from 'constants/common';
import toastService from './toast';

const getErrorCodeAndMessage = (error: AxiosError) => ({
  code: error?.response?.status || 0,
  message: error.response?.data?.message || error?.message || 'Unknown error',
});

export default abstract class BaseService {
  private readonly instance: AxiosInstance;

  private readonly cachedResponses: Record<
    string,
    SuccessResponse<unknown>
  > = {};

  constructor(config?: AxiosRequestConfig) {
    this.instance = Axios.create(config);
  }

  protected requestData = async <TResponseData, TResultData = TResponseData>(
    {
      cacheKey,
      shouldNotifyError = true,
      shouldNotifySuccess = false,
      timeout = NETWORK_TIMEOUT,
      timeoutErrorMessage = NETWORK_TIMEOUT_MESSAGE,
      ...rest
    }: BaseRequestConfig,
    transformData?: TransformData<TResponseData, TResultData>,
  ): Promise<BaseResponse<TResultData>> => {
    if (cacheKey) {
      const cachedRes = this.cachedResponses[cacheKey];
      if (cachedRes) return cachedRes as SuccessResponse<TResultData>;
    }

    let code: number;
    let message: string;
    let data: unknown;

    try {
      const res = await this.instance.request<TResponseData>({
        timeout,
        timeoutErrorMessage,
        ...rest,
      });

      ({ status: code, data } = res);

      if (code.toString().match(/^2\d{2,5}/)) {
        const resData = res.data;
        const resultData = (transformData
          ? await transformData(resData)
          : resData) as TResultData;

        if (shouldNotifySuccess) toastService.notify('Success!', 'success');

        const successRes: SuccessResponse<TResultData> = {
          kind: 'success',
          data: resultData,
        };

        if (cacheKey) this.cachedResponses[cacheKey] = successRes;

        return successRes;
      }
    } catch (error) {
      ({ code, message } = getErrorCodeAndMessage(error));
      data = { code, message };
      if (shouldNotifyError) toastService.notify(message, 'error');
    }

    return {
      kind: 'failed',
      data: data as ServiceErrorState,
    };
  };
}

export interface BaseRequestConfig extends AxiosRequestConfig {
  shouldNotifyError?: boolean;
  shouldNotifySuccess?: boolean;
  cacheKey?: string;
}

export type TransformData<TFrom, TTo> = (data: TFrom) => TTo | Promise<TTo>;
